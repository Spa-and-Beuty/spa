"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/a11y";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsQuote } from "react-icons/bs";
import { bitter } from "../../constants";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Rating from "@/components/Rating";
import { ChevronLeft, ChevronRight } from "lucide-react";
export const FullScreenTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      full_name: " Evangeline lee",
      image_url: "/assets/images/testimonial-01.jpg",
      rating: 4,
      message:
        " My best friend recommended your salon to me and I was really impressed by the quality of service you provide! I feel so relaxed after the massage! Very thankful!",
      status: " Happy Farmer",
    },
    {
      id: 2,
      full_name: "  Clarabelle",
      image_url: "/assets/images/testimonial-02.jpg",
      rating: 4,
      message:
        "The lap of luxury as you take in treatments at the world’s top spas, your only worry whether to stick to the traditional massage or go for a sea-salt body scrub.",
      status: " Happy Farmer",
    },
    {
      id: 3,
      full_name: " Stephen Welch",
      image_url: "/assets/images/testimonial-03.jpg",
      rating: 4,
      message:
        "The lap of luxury as you take in treatments at the world’s top spas, your only worry whether to stick to the traditional massage or go for a sea-salt body scrub.",
      status: "Happy Farmer",
    },

    {
      id: 4,
      full_name: " Clarabelle",
      image_url: "/assets/images/testimonial-04.jpg",
      rating: 4,
      message:
        "The lap of luxury as you take in treatments at the world’s top spas, your only worry whether to stick to the traditional massage or go for a sea-salt body scrub.",
      status: " Happy Farmer",
    },
    {
      id: 5,
      full_name: " Adeline wood",
      image_url: "/assets/images/testimonial-05.jpg",
      rating: 4,
      message:
        "My best friend recommended your salon to me and I was really impressed by the quality of service you provide! I feel so relaxed after the massage! Very thankful!",
      status: "Happy Farmer",
    },
    {
      id: 6,
      full_name: " Scarlett",
      image_url: "/assets/images/testimonial-06.jpg",
      rating: 4,
      message:
        " The lap of luxury as you take in treatments at the world’s top spas, your only worry whether to stick to the traditional massage or go for a sea-salt body scrub.",
      status: "Happy Farmer",
    },
  ];
  return (
    <section
      className={
        "max-lg:px-10  py-32 bg-fullScreenTestimonial  bg-contain  mt-20  bg-no-repeat"
      }
    >
      <div
        className={
          "container flex items-center mt-10 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]"
        }
      >
        <button
          className={
            "bg-link-color-hover max-sm:hidden prev-btn text-white rounded px-4 py-2 "
          }
        >
          <ChevronLeft size={30} />
        </button>
        <Swiper
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Autoplay, A11y]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className={
                  "rounded-3xl p-10 max-sm:p-4 flex flex-col items-center "
                }
              >
                <div className={"flex items-center justify-between mb-5"}>
                  <div className={""}>
                    <div className="relative">
                      <Image
                        src={testimonial.image_url}
                        alt={testimonial.full_name}
                        width={100}
                        height={100}
                        className={"w-full rounded-full"}
                      />
                      <div
                        className={
                          "text-white absolute top-1/2 -translate-y-1/2 -right-10 bg-link-color-hover p-4 rounded-full"
                        }
                      >
                        {" "}
                        <BsQuote />
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  className={
                    "my-3 text-3xl max-sm:text-sm max-lg:text-xl text-center"
                  }
                >
                  {testimonial.message}
                </p>
                <Rating rating={testimonial.rating} />
                <h1 className={`my-3 text-2xl font-semibold`}>
                  {testimonial.full_name}
                </h1>
                <span className={"uppercase font-semibold text-sm"}>
                  {testimonial.status}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={
            "bg-blackish-color max-sm:hidden next-btn text-white rounded px-4 py-2 "
          }
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </section>
  );
};
