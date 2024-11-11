import React from "react";
import ServiceCard from "./ServiceCard";

export default function Service() {
  const services = [
    {
      id: 1,
      title: "Thai Massage",
      image_url: "/assets/images/service-01.jpg",
      tag: "#",
    },
    {
      id: 2,
      title: "Stone Treatment",
      image_url: "/assets/images/service-02.jpg",
      tag: "#",
    },
    {
      id: 3,
      title: "Revitalize Facial",
      image_url: "/assets/images/service-03.jpg",
      tag: "#",
    },
    {
      id: 4,
      title: "Salt & Aroma",
      image_url: "/assets/images/service-04.jpg",
      tag: "#",
    },
    {
      id: 5,
      title: "Body Massage",
      image_url: "/assets/images/service-05.jpg",
      tag: "#",
    },
    {
      id: 6,
      title: "Skin Care",
      image_url: "/assets/images/service-06.jpg",
      tag: "#",
    },
  ];
  return (
    <section
      className={
        "container max-sm:grid-cols-1 max-sm:grid-rows-1 gap-y-20 max-lg:grid-cols-2 max-lg:grid-rows-3  grid grid-rows-2 gap-10 grid-cols-3 mt-32 max-lg:mt-20 max-sm:mt-10 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]"
      }
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          white={false}
          id={service.id}
          image_url={service.image_url}
          tag={service.tag}
          title={service.title}
        />
      ))}
    </section>
  );
}
