"use client";

import React from "react";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import { jewelery } from "@app/client/api/products";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay } from "swiper/modules";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import CurrencyFormat from "./currencyFormatter";

import CurrencyFormat from "./CurrencyFormatter";

import Image from "next/image";

export default function ProductDetail({ singleProduct, children }) {
  console.log(singleProduct);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="">
      <div className="py-24 w-full h-full dark:bg-[#262d34] lg:px-24  md:px-16  sm:px-8 px-4">
        <div className="lg:flex  w-full gap-10 justify-between">
          <div className="lg:w-1/2 h-2/6">
            <Swiper
              loop={true}
              spaceBetween={3}
              autoplay={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="h-72 "
            >
              {singleProduct.images.map((image) => (
                <SwiperSlide
                  key={singleProduct.id}
                  className=" flex items-center justify-center relative"
                >
                  <Image
                    width={400}
                    height={400}
                    alt={singleProduct.name}
                    src={`${image}`}
                    className=" absolute top-1/2 left-1/2 -translate-x-1/2 object-contain h-full w-full rounded-md object-center -translate-y-1/2"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="m-4  h-full p-4 w-full flex "
            >
              {singleProduct.images.map((image) => (
                <SwiperSlide
                  key={singleProduct.id}
                  className="flex w-20 h-20 items-center rounded-md justify-center "
                >
                  <Image
                    width={20}
                    height={20}
                    alt={singleProduct.name}
                    src={`${image}`}
                    className="w-16 h-16 object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex gap-4 flex-col flex-1 justify-center">
            <h1 className=" text-slate-900 w-full text-balance dark:text-white font-extrabold text-4xl">
              {singleProduct.name.slice(0, 30)}
            </h1>
            <span className="px-2 py-1 text-sm self-start bg-color-primary text-white rounded-full">
              In stock
            </span>
            <div className="flex gap-4 text-2xl font-medium">
              <p className="text-gray-400 line-through">
                <CurrencyFormat amount={singleProduct.price + 100} />
              </p>
              <p>
                <CurrencyFormat amount={singleProduct.price} />
              </p>
            </div>

            <small>Description</small>
            <div
              dangerouslySetInnerHTML={{ __html: singleProduct.description }}
              className="text-base break-words lg:w-3/4 dark:text-primary-p text-gray-600"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
