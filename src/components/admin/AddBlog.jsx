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

  const options = [
    "bold",
    "italic",
    "|",
    "ul",
    "ol",
    "|",
    "font",
    "fontsize",
    "|",
    "outdent",
    "indent",
    "align",
    "|",
    "hr",
    "|",
    "fullsize",
    "brush",
    "|",
    "table",
    "link",
    "|",
    "undo",
    "redo",
  ];
  const editor = useRef(null);
  const config = useMemo(
    () => ({
      ...joditConfig,
    }),
    [],
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
    } catch (error) {
      // setError("An error occurred while creating the product.");
      console.log("error", error);
    } finally {
      setIsLoading(false);
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
        <div className="mt-4 rounded shadow-md">
          <div className="bg-white dark:bg-[#3C3C3C]  border-b mt-4 p-4">
            Blog Detail
          </div>
          <form onSubmit={onSubmit} className="w-full text-gray-200">
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
            <div>{description}</div>
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
    </section>
  );
}
