"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import Link from "next/link";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import gsap from "gsap";
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
import { useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TopBar from "@/components/TopBar";

export const Hero = () => {
  const heroRef = useRef();

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

  return (
    <div ref={heroRef} className={"lg:px-6  lg:rounded-3xl sm:h-[800px]"}>
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
        onSlideChange={(swiper) => {
          const currentSlide = swiper.slides[swiper.activeIndex];
          if (!currentSlide) return;

          const heroHeadings = currentSlide.querySelectorAll(".hero");
          const ideas = currentSlide.querySelectorAll(".idea");
          const details = currentSlide.querySelectorAll(".detail");

          gsap.from(heroHeadings, {
            opacity: 0,
            y: 50,
            duration: 1.5,
            stagger: 0.3,
            ease: "power1.out",
          });

          gsap.from(ideas, {
            opacity: 0,
            duration: 1.5,
            stagger: 0.6,
            ease: "power1.out",
          });

          gsap.from(details, {
            opacity: 0,
            y: 50,
            duration: 1.5,
            stagger: 0.8,
            ease: "power1.out",
          });
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {(
              <div
                className={
                  "relative flex items-center h-[800px] max-md:h-[580px] max-sm:h-[450px]"
                }
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={600}
                  height={100}
                  quality={100}
                  priority={true}
                  className={"w-full h-full object-cover lg:rounded-3xl"}
                />
                <div
                  className={
                    "flex absolute items-start justify-start flex-col gap-10 text-white-color top-1/2 max-sm:pl-4 pl-20 rounded-3xl -translate-y-1/2"
                  }
                >
                  <span
                    className={
                      "px-4 uppercase idea text-sm py-1 border-2 flex-inline border-white rounded-full"
                    }
                  >
                    {slide.idea}
                  </span>
                  <h1
                    className={`${bitter.className} hero text-4xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-9xl flex flex-col gap-4`}
                  >
                    <span className={"font-bold"}>
                      {slide.title.split(",")[0]}
                    </span>
                    {slide.title.split(",")[1]}
                  </h1>
                  <Link
                    href={"#"}
                    className={
                      "flex detail items-center gap-1 bg-white text-blackish-color p-4 rounded-full"
                    }
                  >
                    More Detail <BsArrowBarRight />
                  </Link>
                </div>
              </div>
            ) || (
              <div>
                <Skeleton className={"w-full h-full bg-red-300"} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
