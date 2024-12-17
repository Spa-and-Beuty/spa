"use client";
import React, { Suspense } from "react";
// import Rating from "./Rating";
import CurrencyFormat from "./CurrencyFormatter";
import Link from "next/link";
// import { useCart } from "@/store/cart";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { showToastMessage, warningToast } from "@/lib/toasts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

export default function ProductCard({ loading, product, children }) {
  // const { addToCart, cartProducts } = useCart();
  // const exist = cartProducts.find((cart) => cart.id === product.id);

  // function handleAddToCart(product, e) {
  //   e.stopPropagation();
  //   if (exist) {
  //     warningToast();
  //   } else {
  //     showToastMessage();
  //     addToCart(product);
  //   }
  // }

  return (
    <div className="group  flex bg-white dark:bg-[#282f36] flex-col items-center border rounded-xl p-4 transition-all cursor-pointer">
      <div className="h-52 relative overflow-hidden w-full transition-all ease-in-out mb-3">
        <div className="p-4 w-full h-full">
          {loading ? (
            <Skeleton
              width="100%"
              height="100%"
              style={{ borderRadius: "10px" }}
            />
          ) : (
            <Link className="w-full" href={`products/${product.id}`}>
              <Image
                width={400}
                height={400}
                src={product.images[0]}
                alt="image"
                className="scale-110 w-80 rounded group-hover:scale-125 transition-all ease-in-out duration-300 w-full object-cover h-36"
              />
            </Link>
          )}
        </div>
      </div>

      <div className="w-full">
        <Suspense fallback={<Skeleton width="100%" />}>
          <p className="text-sm">
            {loading ? <Skeleton width="70%" /> : product.name.slice(0, 25)}
          </p>
        </Suspense>

        <Suspense fallback={<Skeleton width="100%" height={20} />}>
          {children}
        </Suspense>

        <Suspense fallback={<Skeleton width="100%" height={30} />}>
          <p className="flex gap-4 font-bold">
            <span className="text-primary-p line-through">
              {loading ? (
                <Skeleton width="50%" />
              ) : (
                <CurrencyFormat amount={product.price + 10} />
              )}
            </span>
            {loading ? (
              <Skeleton width="50%" />
            ) : (
              <CurrencyFormat amount={product.price} />
            )}
          </p>
        </Suspense>
      </div>
    </div>
  );
}
