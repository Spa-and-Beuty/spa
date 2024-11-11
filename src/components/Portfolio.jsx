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
import { BsArrowRight } from "react-icons/bs";
import { bitter } from "../../constants";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { PortfolioCard } from "@/components/PortfolioCard";
export const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      title: "Hot Spring",
      image_url: "/assets/images/portfolio-01.jpg",
      tag: "beauty",
    },
    {
      id: 2,
      title: "Facial Crubs",
      image_url: "/assets/images/portfolio-02.jpg",
      tag: "cosmotics",
    },
    {
      id: 3,
      title: "Treatment Herbal Oils",
      image_url: "/assets/images/portfolio-03.jpg",
      tag: "herbal",
    },
    {
      id: 4,
      title: "Wooden Goodie",
      image_url: "/assets/images/portfolio-04.jpg",
      tag: "lifestyle",
    },
    {
      id: 5,
      title: "The Chill Factor",
      image_url: "/assets/images/portfolio-05.jpg",
      tag: "relaxation",
    },
    {
      id: 6,
      title: "The Complete Pack",
      image_url: "/assets/images/portfolio-06.jpg",
      tag: "relaxation",
    },
  ];
  return (
    <section className={"max-sm:mx-2 overflow-hidden"}>
      <div className={""}>
        <Swiper
          autoplay={{ delay: 3000 }}
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
            400: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            },
          }}
        >
          {portfolio.map((service) => (
            <SwiperSlide key={service.id}>
              <PortfolioCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
