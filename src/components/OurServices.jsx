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
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";
import { getManyServices } from "@/data/services";
export const OurServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getAllServices() {
      setIsLoading(true);

      try {
        const data = await getManyServices();
        console.log("Data", data);
        setServices(data);
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getAllServices();
  }, []);
  return (
    <section
      className={
        "bg-service max-sm:px-10 max-lg:px-10 bg-secondary-color relative max-lg:py-10 py-32  bg-no-repeat"
      }
    >
      <div
        className={
          "container mt-10 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]"
        }
      >
        <span className={"px-4 rounded-full bg-light-color"}>Our Services</span>
        <div className={"flex items-center justify-between"}>
          <h1
            className={`${bitter.className} max-lg:text-4xl max-sm:text-4xl text-6xl font-semibold mb-7 my-5 `}
          >
            The luxury experience
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
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard
                id={service.id}
                image_url={service.imageUrl}
                tag={service.tag}
                title={service.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
