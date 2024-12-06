"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";
import AdminHeader from "./AdminHeader";
import { usePathname } from "next/navigation";

export default function Dashboard({ children }) {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={`flex  relative full justify-between overflow-hidden h-svh`}
    >
      {!pathname.split("/").includes("login") && (
        <SideBar show={show} setShow={setShow} />
      )}

      <div className="w-full page-full  h-full  overflow-scroll bg-[#f9f7f7]">
        {!pathname.split("/").includes("login") && (
          <AdminHeader setShow={setShow} show={show} />
        )}

        {children}
      </div>
    </div>
  );
}
