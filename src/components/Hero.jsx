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
import gsap from "gsap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

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
    const animateSlide = (slideEl) => {
      if (!slideEl) return;

      const elements = slideEl.querySelectorAll(".animate-text");
      if (elements.length === 0) return;

      const timeline = gsap.timeline();

      timeline
        .fromTo(
          elements,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
        )
        .to(
          elements,
          {
            opacity: 0,
            x: -50,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.in",
          },
          "+=2.5"
        );

      return timeline;
    };

    let currentAnimation;

    const handleSlideChange = (swiper) => {
      if (currentAnimation) {
        currentAnimation.kill();
      }

      const activeSlide = swiper.slides[swiper.activeIndex];
      if (activeSlide) {
        currentAnimation = animateSlide(activeSlide);
      }
    };

    if (swiperRef.current) {
      const swiper = swiperRef.current;

      swiper.on("slideChange", handleSlideChange);
      handleSlideChange(swiper); // Animate the initial slide

      return () => {
        swiper.off("slideChange", handleSlideChange);
        if (currentAnimation) {
          currentAnimation.kill();
        }
      };
    }
  }, []);

  return (
    <div
      ref={heroRef}
      className="lg:px-6 lg:rounded-3xl h-[550px] sm:h-[450px] md:h-[550px]"
    >
      <Swiper
        modules={[Navigation, EffectFade, Autoplay, Virtual, Pagination, A11y]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
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
                <div className="flex absolute items-start justify-start flex-col gap-4 sm:gap-6 text-white-color top-1/2 max-sm:pl-4 pl-8 sm:pl-12 md:pl-20 -translate-y-1/2 z-10 overflow-hidden">
                  <span className="px-3 sm:px-4 uppercase idea text-xs sm:text-sm py-1 border-2 inline-block border-white rounded-full transition-all duration-300 ease-out animate-text">
                    {slide.idea}
                  </span>
                  <h1
                    className={`${bitter.className} hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-col gap-1 sm:gap-2 transition-all duration-300 ease-out animate-text`}
                  >
                    <span className="font-bold">
                      {slide.title.split(",")[0]}
                    </span>
                    {slide.title.split(",")[1]}
                  </h1>
                  <Link
                    href="#"
                    className="flex detail items-center gap-1 bg-white text-blackish-color px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition-all duration-300 ease-out hover:bg-opacity-90 animate-text"
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
