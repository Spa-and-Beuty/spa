"use client";
import {Jodit} from "jodit-react"
import React, { useMemo, useRef, useState } from "react";
import { CloudUpload, Delete } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
import  PlanItem  from "@/components/PlanItem";
import { createPricing } from "@/data/pricing";
import { X } from "lucide-react";
import { bitter } from "../../../constants";
import { CheckCircle } from "phosphor-react";
import { joditConfig } from "../../../constants/joditConfig";
import JoditEditor from "jodit-react";

export default function AddPricing() {
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleImageUpload = (e) => {
    setError("");
    const file = e.target.files[0];

    if (
      !["image/jpeg", "image/png", "image/gif", "image/avif"].includes(
        file.type
      )
    ) {
      setError("Only JPG, PNG, and GIF formats are allowed.");
      return;
    }

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    if (!image) {
      setError("Please upload a profile image.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);

    formData.append("image", image);

    // Simulate API submission
    try {
      // Replace with your API call
      const response = await createPricing(formData);
      if (!response.error) {
        setShowModal(true);
      }
      if (response.error) {
        setError(response.error);
      }
      console.log(response);
      console.log("Form submitted:", Object.fromEntries(formData.entries()));
    } catch (err) {
      setError("An error occurred while saving employee details.");
    } finally {
      setIsLoading(false);
    }
  }

  const isSubmitDisabled = !image || !title || !price || !description;

  const editor = useRef(null);
  const config = useMemo(
    () => ({
      ...joditConfig,
 defaultMode: Jodit.MODE_SOURCE,
    }),
    []
  );

  return (
    <section className="flex lg:flex-row flex-col items-start p-10 w-full gap-10">
      <div className="lg:w-1/2 w-full bg-white dark:bg-[#1e1e1e] lg:sticky top-20 p-10 rounded">
        <PlanItem
          image_url={imagePreview}
          title={title}
          price={price}
          description={description}
        />
        {/*{imagePreview ? (*/}
        {/*  <Image*/}
        {/*    width={400}*/}
        {/*    height={400}*/}
        {/*    src={imagePreview}*/}
        {/*    alt="Employee Preview"*/}
        {/*    className="w-full h-[300px] rounded object-cover"*/}
        {/*  />*/}
        {/*) : (*/}
        {/*  <p className="my-4 text-hero text-sm text-color-body">*/}
        {/*    Please upload a profile image.*/}
        {/*  </p>*/}
        {/*)}*/}

        {/*{imagePreview && (*/}
        {/*  <button*/}
        {/*    type="button"*/}
        {/*    onClick={handleRemoveImage}*/}
        {/*    className="cursor-pointer text-red-500 mt-2"*/}
        {/*  >*/}
        {/*    Remove Image*/}
        {/*  </button>*/}
        {/*)}*/}
      </div>

      <div className="w-full">
        <div className="flex-1 dark:bg-[#1e1e1e] bg-white relative border-dashed border-2 rounded flex flex-col w-full items-center justify-center p-24 border-[#d8dfe7">
          <CloudUpload size={50} className="text-hero" />
          <h1 className="text-xl mt-3 font-semibold">
            Drop Profile Image Here or,{" "}
            <span className="text-hero">Click to browse</span>
          </h1>
          <input
            required
            onChange={handleImageUpload}
            name="image"
            type="file"
            className="w-full opacity-0 absolute inset-0 text-sm py-3 px-7 h-full border-color-light text-color-body rounded-md border"
          />
        </div>

        <form
          onSubmit={onSubmit}
          className="w-full text-[#5d7186] dark:text-white"
        >
          <div className="bg-white dark:bg-[#1e1e1e] p-4 mt-4 rounded">
            <div className="flex  gap-10 items-center mb-4">
              <div className="flex order-1 flex-col w-1/2">
                <label>Price</label>
                <input
                  required
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                  className="px-4 py-2 border"
                  placeholder="Price"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label>Title</label>
                <input
                  required
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  className="px-4 py-2 border"
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label>Description</label>
              <JoditEditor
                className="dark:bg-[#1e1e1e] text-black"
                theme="dark"
                ref={editor}
                value={description}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setDescription(newContent)}
                onChange={(newContent) => {
                  setDescription(newContent);
                }}
              />
            </div>

            {error && <div className="text-hero text-sm">{error}</div>}

            <div className="flex gap-10 p-4 mt-10 items-center">
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className="bg-link-color-hover transition-colors duration-200 ease-in-out hover:bg-blackish-color disabled:opacity-50 w-1/2 text-white p-2 rounded-lg"
              >
                {isLoading ? "Saving Price..." : "Save Price"}
              </button>
              <Link
                href="/admin/teams"
                className="bg-[#e4e4e4] w-1/2 text-black dark:text-white p-2 rounded-lg text-center"
              >
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="fixed z-40 flex items-center justify-center flex-col bg-white shadow-md p-10 rounded-sm border border-gray-300 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CheckCircle color="green" fill="green" size={200} />
          <p className={`text-2xl font-bold ${bitter.className}`}>
            Priceing plan successfully added!
          </p>
          <button
            onClick={() => setShowModal(!showModal)}
            className="absolute  z-50 top-4 right-4"
          >
            <X size={50} />
          </button>
        </div>
      )}
    </section>
  );
}
