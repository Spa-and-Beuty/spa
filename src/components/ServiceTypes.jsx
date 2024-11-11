"use client";
import React from "react";
import { bitter, services } from "../../constants";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import Search from "./Search";
import { FlowerIcon } from "lucide-react";
import { BsArrowUpRight } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function ServiceTypes() {
  const pathname = usePathname();
  const id = Number(pathname.split("/service/")[1]) || "";
  return (
    <section className="w-full ">
      <div className={`${bitter.className} p-6 mt-4  rounded-xl border`}>
        <h1 className={`font-semibold mb-4 text-3xl flex items-center gap-4`}>
          <FlowerIcon size={40} className="text-link-color-hover" />
          Our Services
        </h1>
        <ul className="flex list-disc flex-col">
          {services.map((service) => (
            <li
              key={service.id}
              className={`${id === service.id ? "text-link-color-hover" : "text-blackish-color"} flex uppercase   text-sm py-4 border-b border-gray-200 items-center justify-between`}
            >
              <Link
                className="hover:text-link-color-hover hover:scale-[1.01] transition-all duration-300"
                href={`/service/${service.id}`}
              >
                {service.title}
              </Link>
              <span className="text-sm hover:rotate-45 text-darkish-color">
                <BsArrowUpRight />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
