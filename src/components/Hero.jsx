"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import Link from "next/link";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { BsArrowBarRight } from "react-icons/bs";
import {
  Navigation,
  Pagination,
  A11y,
  Virtual,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { bitter } from "../../constants";
export const Hero = () => {
  const slides = [
    {
      id: 1,
      idea: "practice positive energy",
      title: "Relaxation, made simple",
      image: "/assets/images/demo1-slide01.png",
    },
    {
      id: 2,
      idea: "rejuvenate you today",
      title: "Revilalize, inner serenity",
      image: "/assets/images/demo1-slide02.png",
    },
    {
      id: 3,
      idea: "shine with perfection",
      title: "Rejuvenation, beautiful cover",
      image: "/assets/images/demo1-slide03.png",
    },
  ];
  return (
    <div className={"lg:px-16 lg:rounded-3xl sm:h-[800px]"}>
      <Swiper
        virtual={true}
        modules={[Navigation, EffectFade, Autoplay, Virtual, Pagination, A11y]}
        pagination
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={
                "relative  flex items-center h-[800px] max-md:h-[580px] max-sm:h-[450px]   "
              }
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={600}
                height={100}
                quality={100}
                className={"w-full h-full object-cover  lg:rounded-3xl"}
              />
              <div
                className={
                  "flex absolute items-start justify-start flex-col gap-10 text-white-color top-1/2 max-sm:pl-4 pl-20   rounded-3xl  -translate-y-1/2"
                }
              >
                <span
                  className={
                    "px-4 uppercase text-sm py-1 border-2 flex-inline border-white rounded-full"
                  }
                >
                  {slide.idea}
                </span>
                <h1
                  className={`${bitter.className}  text-4xl 
    md:text-6xl 
    lg:text-7xl xl:text-7xl 2xl:text-9xl  flex flex-col gap-4`}
                >
                  <span className={"font-bold "}>
                    {slide.title.split(",")[0]}
                  </span>
                  {slide.title.split(",")[1]}
                </h1>
                <Link
                  href={"#"}
                  className={
                    "flex items-center gap-1 bg-white text-blackish-color p-4 rounded-full"
                  }
                >
                  More Detail <BsArrowBarRight />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
