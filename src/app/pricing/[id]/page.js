import { getOnePlan } from "@/data/pricing";
import Image from "next/image";
import React from "react";

export default async function Page({ params }) {
  const { id } = await params;
  const singlePlan = await getOnePlan(id);
  console.log("single plan: " + singlePlan);

  return (
    <div className="flex items-center justify-center">
      <Image
        src={"/assets/images/waxing.png"}
        width={400}
        height={400}
        className="w-[400px] h-[400px]"
        alt={singlePlan.title}
      />
      <ul
        className="w-[400px] h-[400px]"
        dangerouslySetInnerHTML={{ __html: singlePlan.description }}
      ></ul>
    </div>
  );
}
