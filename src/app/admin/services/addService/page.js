"use client";
// import { createCategory } from "@/data/category";
import { CloudUpload } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { createBlogCategory } from "@/data/blogCategories";
import Image from "next/image";

export default function AddCategory() {
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [forWhat, setForWhat] = useState("");

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
    if (!name || !slug || !description || !image || !forWhat) {
      setError("All fields are required.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    // try {
    //   let res;
    //   if (forWhat === "blogs") {
    //     res = await createBlogCategory(formData);
    //   } else if (forWhat === "products") {
    //     res = await createCategory(formData);
    //   }
    //
    //   if (res.error) {
    //     setError(
    //       res.message || "An error occurred while creating the category."
    //     );
    //   }
    // } catch (error) {
    //   setError("Failed to create category. Please try again.");
    // } finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <div className="flex lg:flex-row flex-col items-start p-10 w-full gap-10">
      <div className="w-1/2 bg-white lg:sticky top-20 p-10 rounded">
        {imagePreview && (
          <div className="h-1/2">
            <Image
              width={400}
              height={400}
              src={imagePreview}
              alt="Category"
              className="w-full h-[300px] rounded object-cover"
            />
          </div>
        )}

        <div>
          <h1 className="text-xl mt-4 text-[#313b5e]">
            {name || "Service Name"}
          </h1>
          <p className="text-sm mt-3">{description || "Service Description"}</p>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div className="mt-8">
            <div className="flex justify-between">
              <input
                type="submit"
                value={isLoading ? "Loading..." : "Create Service"}
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
            name="image"
            type="file"
            className="w-full opacity-0 absolute inset-0 h-full"
          />
        </div>

        <div className="mt-4 rounded shadow-md">
          <div className="bg-white border-b p-4">Service Details</div>
          <form className="bg-white p-4 text-[#5d7186]">
            <div className="flex gap-10 items-center">
              <div className="flex flex-col w-1/2">
                <label htmlFor="name">Service Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2 border"
                  placeholder="Category Name"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="slug">Service Slug</label>
                <input
                  required
                  type="text"
                  id="slug"
                  onChange={(e) => setSlug(e.target.value)}
                  className="px-4 py-2 border rounded"
                />
              </div>
            </div>
            <div className="flex items-start flex-col lg:flex-row md:flex-row gap-10">
              <div className=" flex w-full flex-col mt-4">
                <label htmlFor="description">For What</label>
                <Select onValueChange={setForWhat}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="For What ?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={"service"}>Service</SelectItem>
                    <SelectItem value={"blogs"}>Blogs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex w-full flex-col mt-4">
                <label htmlFor="description">Description</label>
                <textarea
                  required
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  className="border outline-none p-2"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
