"use client";
import { ChevronDown, DeleteIcon, Edit, EyeIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
// import { getManyCategories } from "@/data/category";
// import { getManyProducts } from "@/data/products";

const products = [
  {
    name: "Black T-Shirt",
    sizes: "S, M",
    price: "$80",
    stock: "486 items sold, 200 items left",
    category: "Fashion",
    rating: 4.8,
    reviews: 58,
  },
  {
    name: "Blue Jeans",
    sizes: "30, 32, 34",
    price: "$60",
    stock: "300 items sold, 150 items left",
    category: "Clothing",
    rating: 4.5,
    reviews: 45,
  },
  {
    name: "Running Shoes",
    sizes: "8, 9, 10",
    price: "$120",
    stock: "200 items sold, 80 items left",
    category: "Footwear",
    rating: 4.7,
    reviews: 30,
  },
  {
    name: "Leather Wallet",
    sizes: "One Size",
    price: "$50",
    stock: "150 items sold, 50 items left",
    category: "Accessories",
    rating: 4.6,
    reviews: 25,
  },
  {
    name: "Smart Watch",
    sizes: "One Size",
    price: "$200",
    stock: "400 items sold, 100 items left",
    category: "Electronics",
    rating: 4.9,
    reviews: 70,
  },
];

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true); // Track loading state

  // useEffect(() => {
  //   async function fetchCategories() {
  //     try {
  //       console.log("Fetching category..."); // Log when fetching starts
  //       const fetchedCategories = await getManyCategories();
  //       console.log("Fetched Categories:", fetchedCategories); // Check if you're receiving the correct data
  //       setCategories(fetchedCategories);
  //     } catch (error) {
  //       console.error("Failed to fetch category:", error);
  //     } finally {
  //       // setIsCategoriesLoading(false); // Stop loading after fetching
  //     }
  //   }
  //
  //   fetchCategories();
  // }, []);

  const categHighLight = categories.slice(0, 4);
  return (
    <div>
      <div className=" my-5 items-center  justify-center flex gap-10">
        {[].map((categ) => (
          <div
            key={categ.id}
            className="bg-white w-[300px] h-[220px] shadow-md flex  p-14 gap-2 flex-col items-center justify-center  text-primary"
          >
            <div className="flex relative w-full items-center justify-center bg-[#f9f7f7] shadow-md rounded">
              <Image
                width={40}
                height={40}
                alt={categ.name}
                className="w-40 h-40  object-cover  rounded p-10"
                src={categ.image}
              />
            </div>
            <h1 className="text-xl font-semibold">{categ.name}</h1>
          </div>
        ))}
      </div>
      <div className="p-6 mb-3 rounded bg-white">
        <div className="flex items-center justify-between">
          <h4 className="card-title">Categories</h4>
          <div className="flex item gap-2">
            <Link
              href="/admin/addCategory"
              className="text-sm p-2 hover:bg-blackish-color    text-white rounded  bg-link-color-hover transition-all duration-200 ease-in-out"
            >
              <button>+ Add Category</button>
            </Link>
            <div className="relative">
              <button className="p-2 rounded bg-gray-200 flex items-center gap-1 text-sm">
                File <ChevronDown size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b bg-white text-[#5d7186]">
            <th className=" py-4 text-left">Categories</th>
            <th className=" py-4 text-left">Starting Price</th>
            <th className=" py-4 text-left">Created By</th>
            <th className=" py-4 text-left">Id</th>
            <th className=" py-4 text-left">Created At</th>
            <th className=" py-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {categories.map((categ) => (
            <tr key={categ?.id} className="border-b text-left bg-white">
              <td className="flex gap-2">
                <Image
                  src={categ?.image}
                  width={50}
                  height={50}
                  className="w-10 h-10 shadow border object-cover rounded-md"
                  alt={categ?.name}
                />
                <span>
                  <h1>{categ?.name}</h1>
                </span>
              </td>
              <td className="text-[#8686a7] text-left text-sm">ETB 5,000</td>
              <td className="text-sm">
                <Spaville></Spaville>
              </td>
              <td className="text-[#8686a7] text-sm">
                {categ.id.slice(0, 10)}...
              </td>
              <td className="gap-1 justify-center items-center text-[#8686a7] text-sm">
                <span className="bg-[#8686a7] mr-2 px-2 py-1 text-white inline rounded">
                  {categ?.createdAt?.split("T")[0] || "wed"}
                </span>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <Link href={"#"} className="p-1 bg-[#8686a7] rounded">
                    <EyeIcon color="white" />
                  </Link>
                  <Link
                    href={"#"}
                    className="p-1 rounded group hover:bg-[#ff6c2f] transition-colors duration-200 bg-[#ff3d5430]"
                  >
                    <Edit className="text-[#ff6c2f] group-hover:text-white" />
                  </Link>
                  <Link
                    href={"#"}
                    className="p-1 rounded group hover:bg-hero transition-colors duration-200 bg-[#ff3d5430]"
                  >
                    <DeleteIcon className="text-hero group-hover:text-white" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
