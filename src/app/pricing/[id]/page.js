import { getOnePlan } from "@/data/pricing";
import Image from "next/image";
import React from "react";
export default async function Page({ params }) {
  const { id } = await params;
  const singlePlan = await getOnePlan(id);
  console.log("single plan: " + singlePlan);

  return (
    <div>
      <h1 className={` text-4xl text-center font-bold mt-10`}>
        {singlePlan.title}
      </h1>
      <div className="flex shadow rounded max-sm:flex-col  lg:min-w-[900px] m-auto mt-10 gap-10 items-center justify-center">
        <Image
          src={singlePlan.image}
          width={400}
          height={400}
          className="w-[450px] rounded-xl h-[400px]"
          alt={singlePlan.title}
        />
        <ul
          className="min-w-[450px] text-xl max-sm:text-sm px-4 flex   items-center justify-center  h-full"
          dangerouslySetInnerHTML={{ __html: singlePlan.description }}
        ></ul>
      </div>
    </div>
  );
}
