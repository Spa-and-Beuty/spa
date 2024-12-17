"use client";
// import { createBlog } from "@/data/blogs";
import { CloudUpload, Delete, DollarSign } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
// import { getManyBlogCategories } from "@/data/blogCategories";
import Image from "next/image";
// import JoditTextEditor from "../JoditEditor";
import JoditEditor from "jodit-react";
import { createBlog } from "@/data/blogs";
import axios from "axios";
import { joditConfig } from "../../../constants/joditConfig";
import { CheckCircle } from "phosphor-react";
import { bitter } from "../../../constants";
import { MdClose } from "react-icons/md";
import { X } from "lucide-react";
// import Quill from "quill";
// import "quill/";

export default function AddBlog() {
  const HOST = "http://localhost:8000";
  // console.log("Logo", categories);
  const [title, setBlogTitle] = useState("");
  const [description, setBlogContent] = useState("");
  const [tag, setCategorySlug] = useState("");

  // const [categories, setCategories] = useState([]);
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const configs = {
    readonly: false,
    height: 400,
    toolbarButtonSize: "middle",
    buttons: ["bold", "italic", "underline", "link", "unlink", "source"],
    uploader: {
      insertImageAsBase64URI: true,
    },
  };
  const editor = useRef(null);
  const config = useMemo(
    () => ({
      ...joditConfig,
    }),
    []
  );

  const handleImageUpload = (e) => {
    setError("");
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setError("Please upload a valid image file.");
    }
  };

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    setIsLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tag", tag);
    if (image) {
      formData.append("image", image);
    }
    try {
      const res = await axios.post(`${HOST}/api/v1/blog`, formData);
      console.log(res);
      if (res.data) {
        setShowModal(true);
      }
    } catch (error) {
      setError(error.message);
      console.log("error", error);
    } finally {
      setIsLoading(false);
      setImage("")
      setImagePreview("")
      setBlogTitle("")
      setBlogContent("")
      setCategorySlug("")
      // setShowModal(true);
    }
  }
  // const isSubmitDisabled = images.length > 2;
  return (
    <section className="flex lg:flex-row flex-col items-start p-10 w-full gap-10">
      <div className="w-1/2 bg-white dark:bg-[#1e1e1e] lg:sticky top-20 p-10 rounded">
        {image && (
          <div className="h-1/2">
            <Image
              width={40}
              height={40}
              src={imagePreview}
              alt=""
              className="w-full h-[300px] rounded object-cover"
            />
          </div>
        )}
        {!image && (
          <p className="my-4 text-hero text-sm text-color-body">
            You need to add image.
          </p>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <div className="w-full">
        <div className="flex-1 bg-white dark:bg-[#1e1e1e] relative border-dashed dark:border-[#3c3c3c] border-2 rounded flex flex-col w-full items-center justify-center p-24 border-[#d8dfe7]">
          <CloudUpload size={50} className="text-hero" />
          <h1 className="text-xl mt-3 font-semibold">
            Drop Your Images Here or,{" "}
            <span className="text-hero">Click to browse</span>
          </h1>
          <span className="text-sm mt-2">
            1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
          </span>
          <input
            required
            onChange={handleImageUpload}
            name="images"
            type="file"
            className="w-full opacity-0 absolute inset-0 text-sm py-3 mb-9 px-7 h-full border-color-light text-color-body rounded-md border"
          />
        </div>
        <div className="mt-4 rounded ">
          <div className="bg-white dark:bg-[#3C3C3C]  border-b mt-4 p-4">
            Blog Detail
          </div>
          <form onSubmit={onSubmit} className="w-full text-black">
            <div className="bg-white dark:bg-[#3C3C3C]  p-4">
              <div className="flex gap-10 items-center justify-between">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="title">Blog Title</label>
                  <input
                    required
                    type="text"
                    id="title"
                    onChange={(e) => setBlogTitle(e.target.value)}
                    className="px-4 py-2 border"
                    placeholder="Blog Title"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label>Tag</label>
                  {/*<Select onValueChange={setCategorySlug}>*/}
                  {/*  <SelectTrigger className="w-full">*/}
                  {/*    <SelectValue placeholder="Categories" />*/}
                  {/*  </SelectTrigger>*/}
                  {/*  <SelectContent>*/}
                  {/*    {categories.map((categ) => (*/}
                  {/*      <SelectItem key={categ.id} value={categ.slug}>*/}
                  {/*        {categ.name}*/}
                  {/*      </SelectItem>*/}
                  {/*    ))}*/}
                  {/*  </SelectContent>*/}
                  {/*</Select>*/}
                  <input
                    required
                    type="text"
                    id="tag"
                    onChange={(e) => setCategorySlug(e.target.value)}
                    className="px-4 py-2 border"
                    placeholder="Blog Title"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="description">Blog Content</label>
                <JoditEditor
                  className="dark:bg-[#1e1e1e] text-black"
                  theme="dark"
                  ref={editor}
                  value={description}
                  config={config}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={(newContent) => setBlogContent(newContent)}
                  onChange={(newContent) => {
                    setBlogContent(newContent);
                  }}
                />
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex gap-10 p-4 items-center">
              <div className="my-8">
                <input
                  type="submit"
                  value={isLoading ? "Creating" : "Create Blog"}
                  className={`px-4 rounded cursor-pointer py-2 m-auto bg-[#22c55e] text-white `}
                />
              </div>
              <Link
                className="px-4 py-2 border-hero border text-hero rounded"
                href={"/admin/blogs"}
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
      {showModal && (
        <div className="fixed z-40 flex items-center justify-center flex-col bg-white shadow-md p-10 rounded-sm border border-gray-300 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CheckCircle color="green" fill="green" size={200} />
          <p className={`text-2xl font-bold ${bitter.className}`}>
            Blog successfully added!
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
