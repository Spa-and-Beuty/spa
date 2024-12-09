"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";
import AdminHeader from "./AdminHeader";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Dashboard({ children }) {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1     h-screen"
        // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      {!pathname.split("/").includes("login") && (
        <SideBar show={show} setShow={setShow} />
      )}

      <div className="flex-1  overflow-y-scroll bg-[#f9f7f7]">
        {!pathname.split("/").includes("login") && (
          <AdminHeader setShow={setShow} show={show} />
        )}

        {children}
      </div>
    </div>
  );
}
