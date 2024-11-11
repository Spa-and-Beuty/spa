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
import {
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsQuote,
  BsTwitterX,
} from "react-icons/bs";
import { bitter } from "../../constants";
import { BiChevronLeft, BiChevronRight, BiLogoFacebook } from "react-icons/bi";
import Rating from "@/components/Rating";
import { AiOutlineFacebook } from "react-icons/ai";
import { Facebook } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
export const OurExperts = () => {
  const experts = [
    {
      id: 1,
      role: "Massage Expert",
      socialMedia: {
        instagram: "",
        twitterX: "",
        linkedIn: "",
        facebook: "",
      },
      full_name: " Evangeline lee",
      image_url: "/assets/images/team-01.jpg",
    },
    {
      id: 1,
      role: "massage expert",
      socialMedia: {
        instagram: "#",
        twitterX: "#",
        linkedIn: "#",
        facebook: "#",
      },
      full_name: " David Green",
      image_url: "/assets/images/team-01.jpg",
    },

    {
      id: 2,
      role: "spa manager",
      socialMedia: {
        instagram: "#",
        twitterX: "#",
        linkedIn: "#",
        facebook: "#",
      },
      full_name: " Amy Walker",
      image_url: "/assets/images/team-02.jpg",
    },

    {
      id: 3,
      role: "massage expert",
      socialMedia: {
        instagram: "#",
        twitterX: "#",
        linkedIn: "#",
        facebook: "#",
      },
      full_name: " Natalie Jones",
      image_url: "/assets/images/team-03.jpg",
    },

    {
      id: 4,
      role: "massage expert",
      socialMedia: {
        instagram: "#",
        twitterX: "#",
        linkedIn: "#",
        facebook: "#",
      },
      full_name: " Paula Deen",
      image_url: "/assets/images/team-04.jpg",
    },

    {
      id: 5,
      role: "relaxing spa",
      socialMedia: {
        instagram: "#",
        twitterX: "#",
        linkedIn: "#",
        facebook: "#",
      },
      full_name: " Carla Hall",
      image_url: "/assets/images/team-05.jpg",
    },
    {
      id: 6,
      role: "massage expert",
      socialMedia: {
        instagram: "#",
        twitterX: "#",
        linkedIn: "#",
        facebook: "#",
      },
      full_name: " Bobby Flay",
      image_url: "/assets/images/team-06.jpg",
    },
  ];
  return (
    <section
      className={
        "mx-10  rounded-3xl max-sm:py-10 max-lg:py-16 px-10 py-24 bg-secondary-color bg-expert bg-left-bottom bg-no-repeat"
      }
    >
      <div
        className={
          "container mt-10 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]"
        }
      >
        <span className={"px-4 py-2 uppercase text-sm rounded-full bg-white"}>
          our team
        </span>
        <div className={"flex items-center justify-between"}>
          <h1
            className={`${bitter.className} max-lg:text-4xl max-sm:text-4xl text-5xl font-semibold mb-7 my-5 `}
          >
            Meet Our Experts
          </h1>
          <div className={"flex max-sm:hidden gap-4 items-center"}>
            <button
              className={
                "bg-link-color-hover prev-btn  font-bold text-white p-4 rounded"
              }
            >
              <BiChevronLeft size={25} />
            </button>
            <button
              className={
                "bg-blackish-color next-btn font-bold text-white p-4 rounded"
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
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
        >
          {experts.map((expert) => (
            <SwiperSlide key={expert.id}>
              <TestimonialCard
                key={expert.id}
                socialMedia={expert.socialMedia}
                role={expert.role}
                full_name={expert.full_name}
                image_url={expert.image_url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
