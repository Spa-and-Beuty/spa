"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsPersonArmsUp, BsPersonXFill } from "react-icons/bs";
import Image from "next/image";
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/a11y";
import { bitter } from "../../constants";
export const AboutSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Relieving Stress",
      description:
        "The practice that involves acupressure applied to the hands and feet.",
      image: "/assets/images/relieving-stress.png",
      Icon: BsPersonXFill,
    },
    {
      id: 2,
      title: "Face Massage",
      description:
        "provide a wet heat experience by using high humidity and steam ugit quando intell",
      image: "/assets/images/face-massage.png",
      Icon: BsPersonXFill,
    },
    {
      id: 3,
      title: "Sport Massage",
      description:
        "Which is why there’s an entire industry around specifically-tailored sports massage. ",
      image: "/assets/images/sport-massage.png",
      Icon: BsPersonArmsUp,
    },
  ];
  return (
    <section className={"max-sm:px-10  max-lg:px-10"}>
      <Swiper
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay, A11y]}
        spaceBetween={50}
        loop
        breakpoints={{
          430: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          820: {
            slidesPerView: 2,
          },
          1240: {
            slidesPerView: 2,
          },

          1330: {
            slidesPerView: 2,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={
                "flex  max-lg:pb-10 max-lg:flex-col  bg-secondary-color rounded-3xl"
              }
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={600}
                height={600}
                priority
                className={
                  "max-sm:w-full max-sm:h-1/2 max-lg:w-full max-md:h-1/2 w-1/2  h-full rounded-3xl"
                }
              />
              <div className={"px-10 flex flex-col items-start gap-10 pt-10"}>
                <span
                  className={"text-white bg-link-color-hover p-4 rounded-full"}
                >
                  <slide.Icon size={40} />
                </span>
                <h1
                  className={`font-semibold pb-4 border-b text-3xl border-gray-200  ${bitter.className}`}
                >
                  {slide.title}
                </h1>
                <p className={"text-darkish-color"}>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
