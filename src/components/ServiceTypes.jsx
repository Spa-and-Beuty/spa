"use client";
import React, { useEffect, useState } from "react";
import { bitter, services } from "../../constants";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import Search from "./Search";
import { FlowerIcon } from "lucide-react";
import { BsArrowUpRight } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { getManyServices } from "@/data/services";
import Skeleton from "react-loading-skeleton";

export default function ServiceTypes() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const id = Number(pathname.split("/service/")[1]) || "";
  useEffect(() => {
    async function getServices() {
      setIsLoading(true);

      try {
        const data = await getManyServices();
        console.log("Data", data);
        setServices(data);
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getServices();
  }, []);
  return (
    <section className="w-full ">
      <div className={`${bitter.className} p-6 mt-4  rounded-xl border`}>
        <h1 className={`font-semibold mb-4 text-3xl flex items-center gap-4`}>
          <FlowerIcon size={40} className="text-link-color-hover" />
          Our Services
        </h1>
        <ul className="flex list-disc flex-col">
          {services.map(
            (service) =>
              (
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
                  <Link
                    href={`/service/${service.id}`}
                    className="text-sm hover:rotate-45 transition-all duration-200 hover:text-link-color-hover text-darkish-color"
                  >
                    <BsArrowUpRight />
                  </Link>
                </li>
              ) || <Skeleton key={service.id} width={700} height={40} />
          )}
        </ul>
      </div>
    </section>
  );
}
