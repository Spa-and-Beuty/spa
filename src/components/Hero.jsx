"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
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
import Skeleton from "react-loading-skeleton";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "react-loading-skeleton/dist/skeleton.css";

const slides = [
  {
    id: 1,
    idea: "practice positive energy",
    title: "Beautiful, skin starts here",
    image: "/assets/images/slide3.png",
  },
  {
    id: 2,
    idea: "rejuvenate you today",
    title: "Revilalize, inner serenity",
    image: "/assets/images/slide2.png",
  },
  {
    id: 3,
    idea: "shine with perfection",
    title: "Rejuvenation, beautiful cover",
    image: "/assets/images/slide1.png",
  },
];

export const Hero = () => {
  const heroRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([".hero", ".idea", ".detail"], { opacity: 0, y: 50 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.slides[swiper.activeIndex];
    if (!currentSlide) return;

    const heroHeadings = currentSlide.querySelectorAll(".hero");
    const ideas = currentSlide.querySelectorAll(".idea");
    const details = currentSlide.querySelectorAll(".detail");

    gsap.to([heroHeadings, ideas, details], {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  };

  const handleSlideChangeTransitionStart = () => {
    if (swiperRef.current) {
      const currentSlide =
        swiperRef.current.slides[swiperRef.current.activeIndex];
      if (currentSlide) {
        gsap.set([".hero", ".idea", ".detail"], { opacity: 0, y: 50 });
      }
    }
  };

  return (
    <div ref={heroRef} className="lg:px-6 lg:rounded-3xl h-[500px]">
      <Swiper
        virtual={true}
        modules={[Navigation, EffectFade, Autoplay, Virtual, Pagination, A11y]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative flex items-center h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority={true}
                  className="lg:rounded-3xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 lg:rounded-3xl" />
                <div className="flex absolute items-start justify-start flex-col gap-6 text-white-color top-1/2 max-sm:pl-4 pl-20 -translate-y-1/2 z-10">
                  <span className="px-4 uppercase idea text-sm py-1 border-2 inline-block border-white rounded-full transition-all duration-300 ease-out">
                    {slide.idea}
                  </span>
                  <h1
                    className={`${bitter.className} hero text-3xl md:text-5xl lg:text-6xl flex flex-col gap-2 transition-all duration-300 ease-out`}
                  >
                    <span className="font-bold">
                      {slide.title.split(",")[0]}
                    </span>
                    {slide.title.split(",")[1]}
                  </h1>
                  <Link
                    href="#"
                    className="flex detail items-center gap-1 bg-white text-blackish-color px-4 py-2 rounded-full transition-all duration-300 ease-out hover:bg-opacity-90"
                  >
                    More Detail <BsArrowBarRight />
                  </Link>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
