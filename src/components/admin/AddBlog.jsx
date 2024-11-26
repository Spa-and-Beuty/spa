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
// import Quill from "quill";
// import "quill/";

export default function AddBlog() {
  // console.log("Logo", categories);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [categories, setCategories] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [images, setImages] = useState([]);
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
      zIndex: 0,
      readonly: false,
      activeButtonsInReadOnly: ["source", "fullsize", "print", "about", "dots"],
      toolbarButtonSize: "middle",
      theme: "default",
      saveModeInCookie: false,
      spellcheck: true,
      editorCssClass: false,
      triggerChangeEvent: true,
      width: "auto",
      height: "auto",
      minHeight: 100,
      direction: "",
      language: "auto",
      debugLanguage: false,
      i18n: "en",
      tabIndex: -1,
      toolbar: true,
      enter: "P",
      // defaultMode: Jodit.MODE_WYSIWYG,
      useSplitMode: false,
      colors: {
        greyscale: [
          "#000000",
          "#434343",
          "#666666",
          "#999999",
          "#B7B7B7",
          "#CCCCCC",
          "#D9D9D9",
          "#EFEFEF",
          "#F3F3F3",
          "#FFFFFF",
        ],
        palette: [
          "#980000",
          "#FF0000",
          "#FF9900",
          "#FFFF00",
          "#00F0F0",
          "#00FFFF",
          "#4A86E8",
          "#0000FF",
          "#9900FF",
          "#FF00FF",
        ],
        full: [
          "#E6B8AF",
          "#F4CCCC",
          "#FCE5CD",
          "#FFF2CC",
          "#D9EAD3",
          "#D0E0E3",
          "#C9DAF8",
          "#CFE2F3",
          "#D9D2E9",
          "#EAD1DC",
          "#DD7E6B",
          "#EA9999",
          "#F9CB9C",
          "#FFE599",
          "#B6D7A8",
          "#A2C4C9",
          "#A4C2F4",
          "#9FC5E8",
          "#B4A7D6",
          "#D5A6BD",
          "#CC4125",
          "#E06666",
          "#F6B26B",
          "#FFD966",
          "#93C47D",
          "#76A5AF",
          "#6D9EEB",
          "#6FA8DC",
          "#8E7CC3",
          "#C27BA0",
          "#A61C00",
          "#CC0000",
          "#E69138",
          "#F1C232",
          "#6AA84F",
          "#45818E",
          "#3C78D8",
          "#3D85C6",
          "#674EA7",
          "#A64D79",
          "#85200C",
          "#990000",
          "#B45F06",
          "#BF9000",
          "#38761D",
          "#134F5C",
          "#1155CC",
          "#0B5394",
          "#351C75",
          "#733554",
          "#5B0F00",
          "#660000",
          "#783F04",
          "#7F6000",
          "#274E13",
          "#0C343D",
          "#1C4587",
          "#073763",
          "#20124D",
          "#4C1130",
        ],
      },
      colorPickerDefaultTab: "background",
      imageDefaultWidth: 300,
      removeButtons: [],
      disablePlugins: [],
      extraButtons: [],
      sizeLG: 900,
      sizeMD: 700,

      sizeSM: 400,
      buttons: [
        "source",
        "|",
        "bold",
        "strikethrough",
        "underline",
        "italic",
        "|",
        "ul",
        "ol",
        "|",
        "outdent",
        "indent",
        "|",
        "font",
        "fontsize",
        "brush",
        "paragraph",
        "|",
        "image",
        "video",
        "table",
        "link",
        "|",
        "align",
        "undo",
        "redo",
        "|",
        "hr",
        "eraser",
        "copyformat",
        "|",
        "symbol",
        "fullsize",
        "print",
        "about",
      ],
      buttonsXS: [
        "bold",
        "image",
        "|",
        "brush",
        "paragraph",
        "|",
        "align",
        "|",
        "undo",
        "redo",
        "|",
        "eraser",
        "dots",
      ],
      events: {},
      textIcons: false,
    }),
    [],
  );

  useEffect(() => {
    // async function getCategories() {
    //   try {
    //     const data = await getManyBlogCategories();
    //     setCategories(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // getCategories();
  });
  const handleImageUpload = (e) => {
    setError("");
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      if (
        !["image/jpeg", "image/png", "image/gif", "image/avif"].includes(
          file.type,
        )
      ) {
        setError("Only JPG, PNG, and GIF formats are allowed.");
      }
    });

    setImages((prevImages) => [...prevImages, ...files]);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
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
      setError("Please upload at least 2 images.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("blogTitle", blogTitle);
    formData.append("blogContent", blogContent);
    formData.append("categorySlug", categorySlug);
    images.forEach((image) => {
      formData.append("images", image);
    });
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
  const isSubmitDisabled = images.length > 2;
  return (
    <section className="flex lg:flex-row flex-col items-start p-10 w-full gap-10">
      <div className="w-1/2 bg-white dark:bg-[#1e1e1e] lg:sticky top-20 p-10 rounded">
        {images.length > 0 && (
          <div className="h-1/2">
            <Image
              width={40}
              height={40}
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
                width={40}
                height={40}
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
            multiple
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
                  <label>Blog Categories</label>
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
                <JoditEditor
                  className="dark:bg-[#1e1e1e] text-black"
                  theme="dark"
                  ref={editor}
                  value={blogContent}
                  config={config}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={(newContent) => setBlogContent(newContent)}
                  onChange={(newContent) => {
                    setBlogContent(newContent);
                  }}
                />
              </div>
            </div>
            <div>{blogContent}</div>
            <div className="flex gap-10 p-4 items-center">
              <div className="my-8">
                <input
                  type="submit"
                  value={isLoading ? "Creating" : "Create Blog"}
                  className={`px-4 rounded cursor-pointer py-2 m-auto bg-[#22c55e] text-white ${
                    isSubmitDisabled ? "cursor-not-allowed opacity-50" : ""
                  }`}
                />
              </div>
              <Link
                className="px-4 py-2 border-hero border text-hero rounded"
                href={"/admin/blog"}
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
