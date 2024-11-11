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

import TestimonialCard from "./TestimonialCard";
export const Team = ({ mt = true }) => {
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
    {
      id: 7,
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
      className={`container max-sm:grid-cols-1 max-sm:grid-rows-1 max-lg:grid-cols-2 max-lg:grid-rows-4  grid grid-rows-2 gap-10 grid-cols-4 ${mt && " mt-32"} max-lg:mt-20 max-sm:mt-10 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]`}
    >
      {experts.map((expert) => (
        <TestimonialCard
          white={false}
          key={expert.id}
          socialMedia={expert.socialMedia}
          role={expert.role}
          full_name={expert.full_name}
          image_url={expert.image_url}
        />
      ))}
    </section>
  );
};
