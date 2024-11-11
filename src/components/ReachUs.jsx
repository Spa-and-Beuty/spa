import {
  BsArrowBarRight,
  BsArrowUpRight,
  BsSearch,
  BsTelephone,
} from "react-icons/bs";
import Link from "next/link";
import React from "react";
import { GlobalSearch } from "@/components/GlobalSearch";

export const ReachUs = ({
  showSearch = true,
  smallHidden = true,
  Icon,
  title,
  number,
  buttonText,
}) => {
  return (
    <div
      className={
        "flex  items-center gap-10 max-sm:flex-col max-sm:items-start max-sm:gap-4"
      }
    >
      <div
        className={` items-center flex max-sm:mt-4 ${smallHidden && "hidden lg:flex"} gap-4`}
      >
        <button
          className={
            "bg-light-color hover:bg-link-color-hover hover:text-white transition-colors duration-200  p-3 rounded-full"
          }
        >
          {" "}
          <Icon size={20} />
        </button>
        <div>
          <p className={"uppercase text-sm text-darkish-color"}>{title}</p>
          <p className={"text-blackish-color text-lg font-bold"}>{number}</p>
        </div>
      </div>
      {showSearch && <GlobalSearch />}
      <Link
        href={"#"}
        className={`flex  hover:bg-blackish-color hover:text-white-color-rgb transition-colors duration-200 items-center gap-4 px-8 py-4 font-bold rounded-full ${!smallHidden ? "bg-white border text-link-color-hover  border-link-color-hover " : "bg-link-color-hover text-white"}  font-semibold`}
      >
        {buttonText}
        <BsArrowUpRight />
      </Link>
    </div>
  );
};
