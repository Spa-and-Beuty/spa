"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";
import AdminHeader from "./AdminHeader";

export default function Dashboard({ children }) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex relative full justify-between overflow-hidden h-svh ">
      <SideBar show={show} setShow={setShow} />

      <div className="w-full page-full  h-full  overflow-scroll bg-[#f9f7f7]">
        <AdminHeader setShow={setShow} show={show} />

        {children}
      </div>
    </div>
  );
}
