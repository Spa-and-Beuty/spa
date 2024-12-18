"use client";

import { CloudUpload } from "lucide-react";
import Link from "next/link";
import React, { useMemo, useRef, useState } from "react";
import { CheckCircle } from "phosphor-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import JoditEditor from "jodit-react";
// import { joditConfig } from "../../../constants";
// import { bitter } from "../../../constants";
import { X } from "lucide-react";
import { joditConfig } from "../../../constants/joditConfig";
import { bitter } from "../../../constants";
import { updateService } from "@/data/services";

export default function EditService({ service }) {
  const [imagePreview, setImagePreview] = useState(
    service ? service.imageUrl : ""
  );
  const [image, setImage] = useState(null);
  const [title, setName] = useState(service ? service.title : "");
  const [description, setDescription] = useState(
    service ? service.description : ""
  );
  const [tag, setSlug] = useState(service ? service.tag : "");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const editor = useRef(null);

  const config = useMemo(() => ({ ...joditConfig }), []);

  // const updateService = async (id, updatedData) => {
  //   const response = await fetch(`/api/v1/service/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedData),
  //   });

  //   if (!response.ok) {
  //     throw new Error("Failed to update service");
  //   }

  //   return response.json();
  // };

  const handleImageUpload = (e) => {
    setError("");
    const file = e.target.files[0];
    if (file) {
      if (
        !["image/png", "image/jpg", "image/jpeg", "image/gif"].includes(
          file.type
        )
      ) {
        setError("Only PNG, JPG, and GIF files are allowed.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("File size exceeds 5MB.");
        return;
      }
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setError("Please upload a valid image file.");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title || !tag || !description) {
      setError("All fields are required.");
      return;
    }

    setIsLoading(true);

    const updatedData = {
      title,
      tag,
      description,
      image_url: imagePreview, // Send the image URL if already uploaded
    };

    try {
      const res = await updateService(service.id, updatedData);

      if (res.error) {
        setError(
          res.message || "An error occurred while updating the service."
        );
      } else {
        setShowModal(true);
      }
    } catch (err) {
      setError("Failed to update service. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex lg:flex-row flex-col items-start p-10 w-full gap-10">
      <div className="w-1/2 bg-white lg:sticky top-20 p-10 rounded">
        <div className="h-1/2">
          <Image
            width={400}
            height={400}
            src={imagePreview || "/placeholder-image.png"}
            alt="Service"
            className="w-full h-[300px] rounded object-cover"
          />
        </div>

        <div>
          <h1 className="text-xl mt-4 text-[#313b5e]">
            {title || "Service Name"}
          </h1>
          <p className="text-sm mt-3">{description || "Service Description"}</p>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div className="mt-8">
            <div className="flex justify-between">
              <input
                type="submit"
                value={isLoading ? "Loading..." : "Update Service"}
                className="px-4 py-2 bg-link-color-hover transition-colors duration-200 ease-in-out hover:bg-black text-white rounded cursor-pointer"
                onClick={onSubmit}
              />
              <Link
                className="px-4 py-2 border-link-color-hover border text-hero rounded"
                href="/admin/services"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="bg-white relative border-dashed border-2 rounded flex flex-col w-full items-center justify-center p-24 border-[#d8dfe7]">
          <CloudUpload size={50} className="text-hero" />
          <h1 className="text-xl mt-3 font-semibold">
            Drop Your Image Here or,{" "}
            <span className="text-hero">Click to browse</span>
          </h1>
          <span className="text-sm mt-2">
            1600 x 1200 (4:3) recommended. PNG, JPG, and GIF files are allowed.
          </span>
          <input
            required
            onChange={handleImageUpload}
            title="image"
            type="file"
            className="w-full opacity-0 absolute inset-0 h-full"
          />
        </div>

        <div className="mt-4 rounded ">
          <div className="bg-white border-b p-4">Service Details</div>
          <form className="bg-white p-4 text-[#5d7186]">
            <div className="flex gap-10 items-center">
              <div className="flex flex-col w-1/2">
                <label htmlFor="title">Service Title</label>
                <input
                  required
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2 border"
                  placeholder="Service Title"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="tag">Service Tag</label>
                <input
                  required
                  type="text"
                  id="tag"
                  value={tag}
                  onChange={(e) => setSlug(e.target.value)}
                  className="px-4 py-2 border rounded"
                />
              </div>
            </div>
            <div className="flex items-start flex-col lg:flex-row md:flex-row gap-10">
              <div className="flex w-full flex-col mt-4">
                <label htmlFor="description">Description</label>
                <JoditEditor
                  className="dark:bg-[#1e1e1e] text-black"
                  theme="dark"
                  ref={editor}
                  value={description}
                  config={config}
                  tabIndex={1}
                  onBlur={(newContent) => setDescription(newContent)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="fixed z-40 flex items-center justify-center flex-col bg-white shadow-md p-10 rounded-sm border border-gray-300 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CheckCircle color="green" fill="green" size={200} />
          <p className={`text-2xl font-bold ${bitter.className}`}>
            Service successfully updated!
          </p>
          <button
            onClick={() => setShowModal(!showModal)}
            className="absolute z-50 top-4 right-4"
          >
            <X size={50} />
          </button>
        </div>
      )}
    </section>
  );
}
