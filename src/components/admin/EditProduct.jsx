"use client";
// import { getManyCategories } from "@/data/categories";
// import { createProduct } from "@/data/products";
import { CheckCircle, CloudUpload, Delete, DollarSign, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { RiDiscountPercentLine, RiStockLine } from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import JoditEditor from "jodit-react";
import { joditConfig } from "../../../constants/joditConfig";
import { bitter } from "../../../constants";
import { createProduct, updateProduct } from "@/data/products";
import { MdNumbers } from "react-icons/md";

export default function EditProduct({ id, product }) {
  // console.log(categories)
  const [imagePreviews, setImagePreviews] = useState(
    product ? product.images : []
  );
  const [images, setImages] = useState([]);

  const [name, setName] = useState(product ? product.name : "");
  const [description, setDescription] = useState(
    product ? product.description : ""
  );
  const [price, setPrice] = useState(product ? product.price : "");
  const [tag, setCategorySlug] = useState(product ? product.category : "");
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(product ? product.quantity : 1);
  const [discount, setDiscount] = useState(product ? product.discount : 0);
  const [stockStatus, setStockStatus] = useState(
    product ? product.stockStatus : ""
  );
  // const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Multi-select state for sizes and colors

  const handleImageUpload = (e) => {
    setError("");
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      if (
        !["image/jpeg", "image/png", "image/gif", "image/avif"].includes(
          file.type
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
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  const toggleItem = (item, setSelected, selectedList) => {
    if (selectedList.includes(item)) {
      setSelected(selectedList.filter((i) => i !== item));
    } else {
      setSelected([...selectedList, item]);
    }
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
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", tag);
    formData.append("stockStatus", stockStatus);
    formData.append("quantity", quantity);

    formData.append("discount", discount);

    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const res = await updateProduct(id, formData);
      if (res.error) {
        setError(res.error);
      }
      if (res.name) {
        setShowModal(true);
      }
    } catch (error) {
      setError("An error occurred while creating the product.");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  const isSubmitDisabled = imagePreviews.length < 4;
  const finalPrice = price - (price * discount) / 100;

  const editor = useRef(null);
  const config = useMemo(
    () => ({
      ...joditConfig,
    }),
    []
  );

  return (
    <section className="flex lg:flex-row flex-col items-start p-10 w-full gap-10">
      <div className="lg:w-1/2 w-full  bg-white lg:sticky top-20 p-10 rounded">
        {images.length > 0 && (
          <div className="h-1/2">
            <Image
              width={400}
              height={400}
              src={imagePreviews[1]}
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
                className="cursor-pointer  absolute -top-4 right-6 p-2 "
              >
                <Delete color="red" size={15} />
              </button>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-xl mt-4 text-[#313b5e]">{name}</h1>
          <h1 className="text-lg flex flex-col mt-4  text-[##313b5e]">
            Price:{" "}
            <span className="flex font-medium gap-4">
              <span className="line-through ">${price}</span>
              <span>${finalPrice}</span>
            </span>
          </h1>

          <p className="text-sm mt-3 ">{description}</p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex-1 bg-white relative border-dashed border-2 rounded flex flex-col w-full items-center justify-center p-24 border-[#d8dfe7">
          <CloudUpload size={50} className="text-hero " />
          <h1 className="text-xl mt-3 font-semibold">
            Drop Your Images Here or,{" "}
            <span className="text-hero">Click to browse</span>
          </h1>
          <span className="text-sm mt-2 text-">
            1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
          </span>
          <input
            required
            onChange={handleImageUpload}
            name="images"
            type="file"
            multiple={true}
            className="w-full opacity-0 absolute inset-0 text-sm py-3 mb-9 px-7 h-full border-color-light text-color-body rounded-md border"
          />
        </div>

        <div className="mt-4 rounded shadow-md">
          <div className="bg-white border-b mt-4 p-4">Product Detail</div>
          <form onSubmit={onSubmit} className="w-full text-[#5d7186]">
            <div className="bg-white p-4">
              <div className="flex gap-10 items-center justify-between">
                <div className="flex flex-col w-1/2">
                  <label>Product Name</label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-2 border"
                    placeholder="Product Name"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label>Product Categories</label>
                  <input
                    value={tag}
                    placeholder={"Enter category name "}
                    type={"text"}
                    className="px-4 py-2 border"
                    onChange={(e) => setCategorySlug(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="">Description</label>
                <JoditEditor
                  className="dark:bg-[#1e1e1e] text-black"
                  theme="dark"
                  ref={editor}
                  value={description}
                  config={config}
                  tabIndex={1}
                  onBlur={(newContent) => setDescription(newContent)}
                  onChange={(newContent) => {
                    setDescription(newContent);
                  }}
                />
              </div>
            </div>

            <div className="p-4 mt-8 bg-white">
              <div className="py-4 border-b mb-4">Price Details</div>
              <div className="flex gap-10 items-center">
                <div className="flex w-1/4 flex-col">
                  <label>Price</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="border outline-none pl-10 px-4 py-2"
                    />
                    <DollarSign
                      size={30}
                      className="absolute top-1/2 -translate-y-1/2 left-2"
                    />
                  </div>
                </div>

                <div className="flex w-1/4 flex-col relative">
                  <label>Discount</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={discount}
                      className="border outline-none px-4 pl-10 py-2"
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                    <RiDiscountPercentLine
                      size={30}
                      className="absolute top-1/2 -translate-y-1/2 left-2"
                    />
                  </div>
                </div>
                <div className="flex w-1/4 flex-col relative">
                  <label>Stock Status</label>
                  <div className="relative">
                    <input
                      value={stockStatus}
                      type="text"
                      className="border outline-none px-4 pl-10 py-2"
                      onChange={(e) => setStockStatus(e.target.value)}
                    />
                    <RiStockLine
                      size={30}
                      className="absolute top-1/2 -translate-y-1/2 left-2"
                    />
                  </div>
                </div>
                <div className="flex w-1/4 flex-col relative">
                  <label>Quantity</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={quantity}
                      className="border outline-none px-4 pl-10 py-2"
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <MdNumbers
                      size={30}
                      className="absolute top-1/2 -translate-y-1/2 left-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            {error && <div className="text-red-400 text-sm">{error}</div>}
            <div className="flex gap-10 p-4 items-center">
              <div className="my-8">
                <input
                  type="submit"
                  value={isLoading ? "Loading..." : "Create Product"}
                  disabled={isSubmitDisabled || isLoading}
                  className={`px-4  rounded cursor-pointer py-2 m-auto bg-[#22c55e] text-white ${
                    isSubmitDisabled ? "cursor-not-allowed opacity-50" : ""
                  }`}
                />
              </div>
              <Link
                onClick={() => setIsLoading(false)}
                className="px-4 py-2 border-hero border text-hero rounded"
                href={"/admin/products"}
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
            Product successfully upadted!
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
