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
import gsap from "gsap";
import { useEffect, useRef } from "react";
export const Testimonials = () => {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    // Clean up
    return () => ctx.revert();
  }, []);
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
      ref={sectionRef}
      className={
        "max-lg:px-10 py-32 pt-10 bg-testimonial bg-left-bottom bg-no-repeat"
      }
    >
      <div
        className={
          "container mt-10 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]"
        }
      >
        <span
          className={"px-4 py-2 uppercase text-sm rounded-full bg-light-color"}
        >
          Testimonials
        </span>
        <div className={"flex items-center justify-between"}>
          <h1
            ref={headingRef}
            className={`${bitter.className} max-lg:text-4xl max-sm:text-4xl text-6xl font-semibold mb-7 my-5 `}
          >
            What Our Clients Say
          </h1>
          <div className={"flex max-sm:hidden gap-4 items-center"}>
            <button
              className={
                "bg-white prev-btn font-bold text-link-color-hover p-4 rounded"
              }
            >
              <BiChevronLeft size={25} />
            </button>
            <button
              className={
                "bg-white next-btn font-bold text-link-color-hover p-4 rounded"
              }
            >
              <BiChevronRight size={25} />
            </button>
          </div>
        </div>
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          modules={[Navigation, Autoplay, A11y]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          spaceBetween={50}
          breakpoints={{
            430: {
              slidesPerView: 1,
            },
            393: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={3}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className={"rounded-3xl p-10 bg-secondary-color shadow-md"}>
                <div className={"flex items-center justify-between mb-5"}>
                  <div className={"flex gap-4 items-center"}>
                    <Image
                      src={testimonial.image_url}
                      alt={testimonial.full_name}
                      width={100}
                      height={100}
                      className={"rounded-full"}
                    />
                    <div>
                      <h1 className={` text-xl font-semibold`}>
                        {testimonial.full_name}
                      </h1>
                      <span className={"uppercase font-semibold text-sm"}>
                        {testimonial.status}
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      "text-white bg-link-color-hover p-4 rounded-full"
                    }
                  >
                    {" "}
                    <BsQuote />
                  </div>
                </div>
                <p className={"mb-2"}>{testimonial.message}</p>
                <Rating rating={testimonial.rating} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
