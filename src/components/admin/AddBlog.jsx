"use client";
// import { createBlog } from "@/data/blogs";
import { CloudUpload, Delete, DollarSign } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
// import { getManyBlogCategories } from "@/data/blogCategories";
import Image from "next/image";

export default function AddBlog() {
  // console.log("Logo", category);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [images, setImages] = useState([]);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [categories, setCategories] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   async function getCategories() {
  //     try {
  //       const data = await getManyBlogCategories();
  //       setCategories(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getCategories();
  // });

  const handleImageUpload = (e) => {
    setError("");
    const files = Array.from(e.target.files);

    const validFiles = files.filter((file) =>
      ["image/jpeg", "image/png", "image/gif"].includes(file.type),
    );
    if (validFiles.length < files.length) {
      setError("Only JPG, PNG, and GIF formats are allowed.");
      return;
    }

    setImages((prevImages) => [...prevImages, ...validFiles]);
    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index),
    );
  };

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (images.length < 4) {
      setError("Please upload at least 4 images.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("blogTitle", blogTitle);
    formData.append("blogContent", blogContent);
    formData.append("categorySlug", categorySlug);

    images.forEach((image) => formData.append("images", image));

    // try {
    //   const res = await createBlog(formData);
    //   if (res.error) setError(res.error);
    // } catch (error) {
    //   // setError("An error occurred while creating the product.");
    //   console.log("error", error);
    // } finally {
    //   setIsLoading(false);
    // }
  }
  const isSubmitDisabled = images.length < 4;

  return (
    <section className="flex lg:flex-row flex-col items-start p-10 w-full gap-10">
      <div className="w-1/2 bg-white lg:sticky top-20 p-10 rounded">
        {images.length > 0 && (
          <div className="h-1/2">
            <Image
              width={400}
              height={400}
              src={imagePreviews[0]}
              alt=""
              className="w-full h-[300px] rounded object-cover"
            />
          </div>
        )}
        {images.length < 4 && (
          <p className="my-4 text-hero text-sm text-color-body">
            You need to add at least 4 images.
          </p>
        )}
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex flex-wrap gap-4 mt-6">
          {imagePreviews.map((preview, index) => (
            <div key={index} className="relative">
              <Image
                width={400}
                height={400}
                src={preview}
                alt="Preview"
                className="w-10 rounded h-10"
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="cursor-pointer absolute -top-4 right-6 p-2"
              >
                <Delete color="red" size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="flex-1 bg-white relative border-dashed border-2 rounded flex flex-col w-full items-center justify-center p-24 border-[#d8dfe7]">
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
            multiple
            className="w-full opacity-0 absolute inset-0 text-sm py-3 mb-9 px-7 h-full border-color-light text-color-body rounded-md border"
          />
        </div>

        <div className="mt-4 rounded shadow-md">
          <div className="bg-white border-b mt-4 p-4">Product Detail</div>
          <form onSubmit={onSubmit} className="w-full text-[#5d7186]">
            <div className="bg-white p-4">
              <div className="flex gap-10 items-center justify-between">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="blogTitle">Blog Title</label>
                  <input
                    required
                    type="text"
                    id="blogTitle"
                    onChange={(e) => setBlogTitle(e.target.value)}
                    className="px-4 py-2 border"
                    placeholder="Blog Title"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label>Product Categories</label>
                  <Select onValueChange={setCategorySlug}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((categ) => (
                        <SelectItem key={categ.id} value={categ.slug}>
                          {categ.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="blogContent">Blog Content</label>
                <textarea
                  id="blogContent"
                  onChange={(e) => setBlogContent(e.target.value)}
                  className="border outline-none"
                ></textarea>
              </div>
            </div>

            <div className="flex gap-10 p-4 items-center">
              <div className="my-8">
                <input
                  type="submit"
                  value={isLoading ? "Creating" : "Create Blog"}
                  disabled={isSubmitDisabled || isLoading}
                  className={`px-4 rounded cursor-pointer py-2 m-auto bg-[#22c55e] text-white ${
                    isSubmitDisabled ? "cursor-not-allowed opacity-50" : ""
                  }`}
                />
              </div>
              <Link
                className="px-4 py-2 border-hero border text-hero rounded"
                href={"/admin/products"}
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
