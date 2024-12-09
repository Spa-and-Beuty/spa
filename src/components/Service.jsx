"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { getManyServices } from "@/data/services";

export default function Service() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getService() {
      try {
        const data = await getManyServices();
        setData(data);
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getService();
  }, []);

  return (
    <section
      className={
        "container max-sm:grid-cols-1 max-sm:grid-rows-1 gap-y-20 max-lg:grid-cols-2 max-lg:grid-rows-3  grid grid-rows-2 gap-10 grid-cols-3 mt-32 max-lg:mt-20 max-sm:mt-10 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]"
      }
    >
      {data.map((service) => (
        <ServiceCard
          key={service.id}
          white={false}
          id={service.id}
          image_url={service.imageUrl}
          tag={service.tag}
          title={service.title}
        />
      ))}
    </section>
  );
}
