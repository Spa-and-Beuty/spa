import Image from "next/image";
import React from "react";
import { bitter } from "../../constants";
import {
  BsArrowLeftRight,
  BsArrowUpRight,
  BsCheckCircle,
} from "react-icons/bs";
import Link from "next/link";

export default function AbouUsGrid() {
  return (
    <div className="flex  gap-10 mt-20 max-sm:flex-col max-lg:flex-col">
      <div className="flex-1 max-lg:px-10 relative">
        <div className="w-[30px] rounded-1xl bg-white  h-full absolute left-[60%] -translate-x-1/2"></div>
        <Image
          src="/assets/images/pbmit-mask-img.jpg"
          alt="mask image"
          width={400}
          height={400}
          className="w-full rounded-3xl h-auto"
        />
        <div className=" text-center w-[250px] text-white bg-white pt-8 px-8 rounded-t-3xl  absolute bottom-0    items-start self-start">
          <div className="p-5 rounded-3xl bg-link-color-hover w-full h-full">
            <h1 className="text-4xl ">
              100<span className="text-base">%</span>
            </h1>
            <p className="mt-3">Satisifacrion Guarantee</p>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-1 max-lg:px-10 gap-4 w-full flex-col items-start">
        <span className="text-blackish-color bg-secondary-color px-6 py-3 text-sm rounded-full uppercase">
          about us
        </span>
        <h1
          className={`${bitter.className} max-lg:text-4xl max-sm:text-4xl text-6xl font-semibold mb-7 my-5 `}
        >
          Welcome to the Beauty & Spa Center
        </h1>
        <p>
          Steam saunas or Turkish baths, provide a wet heat experience by using
          high humidity and steam ugit quando intellThese amenities provide heat
          therapy, relaxation, and potential health benefits.
        </p>
        <div
          className={
            "grid grid-rows-2 grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-1 gap-6 mb-10"
          }
        >
          <p className={"flex items-center gap-6 font-bold"}>
            <span className={"text-white bg-link-color-hover p-1 rounded-full"}>
              {" "}
              <BsCheckCircle />
            </span>
            <span>Helps Relieve Pain</span>
          </p>
          <p className={"flex items-center gap-6 font-bold"}>
            <span className={"text-white bg-link-color-hover p-1 rounded-full"}>
              {" "}
              <BsCheckCircle />
            </span>
            <span>Reduce Body Stress</span>
          </p>
          <p className={"flex items-center gap-6 font-bold"}>
            <span className={"text-white bg-link-color-hover p-1 rounded-full"}>
              {" "}
              <BsCheckCircle />
            </span>
            <span>Ease chronic pain</span>
          </p>
          <p className={"flex items-center gap-6 font-bold"}>
            <span className={"text-white bg-link-color-hover p-1 rounded-full"}>
              {" "}
              <BsCheckCircle />
            </span>
            <span>Boosts your mood</span>
          </p>
        </div>
        <div className={`justify-self-end `}>
          <Link
            href={"/contact"}
            className={
              "items-center flex max-sm:mt-4 gap-4 bg-blackish-color text-white hover:bg-secondary-color hover:text-blackish hover:text-blackish-color transition-colors duration-200  px-6 py-3 rounded-full"
            }
          >
            {" "}
            Contact Us
            <BsArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
