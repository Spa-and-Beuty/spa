"use client";
import ApexChart from "@/components/admin/ApexChart";
import StatusCard from "@/components/admin/StatusCard";
import React, { Suspense } from "react";

import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/components/admin/Services"), {
  ssr: false,
});
const Appointments = dynamic(() => import("@/components/admin/Appointments"), {
  ssr: false,
});
export default function page() {
  return (
    <div className="p-10  full w-full">
      <div className=" lg:flex lg:flex-row md:flex-row items-start flex md:flex flex-col gap-4">
        <div className="lg:w-1/2 w-full text-[#5d7186] max-sm:justify-center md:w-1/2 flex gap-2 flex-wrap items-start">
          <StatusCard />
          <StatusCard />
          <StatusCard />
          <StatusCard />
        </div>
        <ApexChart />
      </div>

      <Services />

      <Appointments />
    </div>
  );
}
