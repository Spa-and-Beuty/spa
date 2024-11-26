import ApexChart from "@/components/admin/ApexChart";
// import Orders from "@/components/admin/Orders";
// import ProductsList from "@/components/admin/ProductsList";
import StatusCard from "@/components/admin/StatusCard";
// import { getManyProducts } from "@/data/products";
import React from "react";
import { Appointments } from "@/components/admin/Appointments";
import Services from "@/components/admin/Services";
import { Blogs } from "@/components/admin/Blogs";
// import {
//   BellIcon,
//   CalendarIcon,
//   FileTextIcon,
//   GlobeIcon,
//   InputIcon,
// } from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento";

// const features = [
//   {
//     Icon: FileTextIcon,
//     name: "Save your files",
//     description: "We automatically save your files as you type.",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
//   },
//   {
//     Icon: InputIcon,
//     name: "Full text search",
//     description: "Search through all your files in one place.",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
//   },
//   {
//     Icon: GlobeIcon,
//     name: "Multilingual",
//     description: "Supports 100+ languages and counting.",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
//   },
//   {
//     Icon: CalendarIcon,
//     name: "Calendar",
//     description: "Use the calendar to filter your files by date.",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
//   },
//   {
//     Icon: BellIcon,
//     name: "Notifications",
//     description:
//       "Get notified when someone shares a file or mentions you in a comment.",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
//   },
// ];
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
