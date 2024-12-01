"use client";
import Image from "next/image";
import { bitter } from "../../constants";
import { PlanItem } from "@/components/PlanItem";
import { getManyPriceing } from "@/data/pricing";
import { useEffect, useState } from "react";

export const OurPlan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPlan() {
      const res = await getManyPriceing();
      setData(res);
    }
    getPlan();
  }, []);

  return (
    <div className={"flex max-lg:px-10  mt-20 flex-col items-center"}>
      <span
        className={
          "px-8 uppercase text-sm  py-1 rounded-full bg-secondary-color"
        }
      >
        {" "}
        Best Plans
      </span>
      <h1
        className={`text-blackish-color my-3 mb-10 max-lg:text-center max-lg:text-4xl max-sm:text-4xl text-6xl font-semibold ${bitter.className}`}
      >
        Our Flexible Pricing Plan
      </h1>
      <div
        className={
          "grid grid-cols-2 max-lg:grid-cols-1 max-lg:grid-rows-1 grid-rows-3 gap-x-20 gap-y-10"
        }
      >
        {" "}
        {data.map((plan) => (
          <PlanItem
            key={plan.id}
            image_url={plan.image}
            title={plan.title}
            price={plan.price}
            description={plan.description}
          />
        ))}
      </div>
    </div>
  );
};
