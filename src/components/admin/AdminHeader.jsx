"use client";
import React, { useState } from "react";
// import ThemeToggle from "../ThemeToggle";
import { RiMenu2Line, RiMenuLine, RiNotification2Fill } from "react-icons/ri";
import {
  MenuIcon,
  MenuSquare,
  MenuSquareIcon,
  Search,
  Settings,
  TimerIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { BsMenuButton, BsMenuButtonWide } from "react-icons/bs";

export default function AdminHeader({ show, setShow }) {
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  return (
    <div className="w-full sticky top-0 z-50 py-10 px-8 bg-[#f9f7f7]">
      <nav className="flex justify-between items-center ">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setShow(true)}
            className="outline-none button-show hidden"
          >
            <RiMenu2Line size={30} />
          </button>
          <h1 className="text-2xl md:text-xl sm:text-base   font-bold mr-4 text-Primary">
            {pathname === "/" ? "Welcome" : pathname}
          </h1>
        </div>
        <div className="relative flex  text-[#9097a7]  lg:px-4 md:px-2 px-1 py-2 bg-white">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 px-4 lg:w-full w-2/3 outline-none py-1 rounded"
          />
          <Search className="absolute top-1/2  -translate-y-1/2" />
        </div>
        <ul className="lg:flex hidden items-center gap-4 text-[#9097a7]">
          <li>{/*<ThemeToggle size={20} />*/}</li>
          <li>
            <RiNotification2Fill size={20} />
          </li>
          <li>
            <Settings size={20} />
          </li>
          <li>
            <TimerIcon size={20} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
