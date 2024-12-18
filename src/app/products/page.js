import ProductCard from "@/components/ProductCard";
import { getManyProducts } from "@/data/products";
// import Rating from "@/components/Rating";
// import Link from "next/link";
// import { useEffect, useState, Suspense } from "react";
// import Header from "@/components/Header";
import { MoveLeftIcon, MoveRightIcon, Search } from "lucide-react";
// import { ThemeProvider, useTheme } from "next-themes";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import the skeleton CSS
import { bitter } from "../../../constants";
// import { getManyProducts } from "@/data/products";
// import ShopHeader from "@/components/ShopHeader";
// import ShopCategory from "@/components/ShopCategory";
export const dynamic = "force-dynamic";
export default async function Page({ searchParams }) {
  const allProducts = await getManyProducts();

  return (
    <div className="w-full mt-10 ">
      <h1
        className={`${bitter.className} md:px-12 sm:px-8 px-4   font-medium text-4xl `}
      >
        Explore our Products
      </h1>
      {/* <div className="text-white bg-hero text-2xl font-extrabold text-center ">{pathname}</div> */}
      <main className="lg:px-18  md:px-12 sm:px-8 px-4 w-full flex items-start flex-col lg:flex-row  gap-10 pt-10 ">
        {/* <ShopCategory /> */}

        <div className="w-full">
          {/* <ShopHeader /> */}
          <div className=" w-full  sm:px-20 px-14 lg:px-0 md:px-0 max-sm:grid-cols-1 min-sm:grid-cols-1 grid xl:grid-cols-4 max-md:grid-cols-2 md:grid-cols-3 lg:grid-col-3 gap-8">
            {allProducts.map((product) => (
              <ProductCard
                loading={false}
                key={product.id}
                product={product}
              ></ProductCard>
            ))}
            {/* </Suspense> */}
          </div>
        </div>
        {/* ))} */}
        {/* </div> */}
      </main>
      {/* <div className="flex gap-8 mt-20 pb-20 items-center justify-center">
        <button
          disabled={allProducts.length <= 0}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="text-hero font-bold"
        >
          <MoveRightIcon />
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="text-hero font-bold"
        >
          <MoveLeftIcon />
        </button>
      </div> */}
    </div>
  );
}
