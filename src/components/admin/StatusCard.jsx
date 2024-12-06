import { ChevronUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsBagX } from "react-icons/bs";

export default function StatusCard({ title, amount, link }) {
  return (
    <div className=" flex flex-col bg-white gap-4 w-72 md:w-64 sm:w-56  rounded">
      <div className="flex items-center justify-between p-4">
        <div className=" bg-[#ff3d5430]  text-hero rounded-md p-4">
          <BsBagX size={40} className=" " />
        </div>
        <div className="flex flex-col ">
          <h1>{title}</h1>
          <p className="text-[#313b5e] text-2xl font-bold">{amount}</p>
        </div>
      </div>
      <div className="flex justify-between items-center  p-4 bg-card-footer">
        <p className="flex gap-1 text-sm text-success items-center">
          <ChevronUp />
          2.3% last week
        </p>
        <Link href={`/${link}`} className="text-sm ">
          View Detail
        </Link>
      </div>
    </div>
  );
}
