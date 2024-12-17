import Categories from "@/components/Categories";
import { PagesHero } from "@/components/PagesHero";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight, BsFilePdf, BsTelephone } from "react-icons/bs";
import { bitter, posts } from "../../../../constants";
import { FlowerIcon } from "lucide-react";
import ServiceTypes from "@/components/ServiceTypes";
import { DownloadIcon } from "lucide-react";
import { getOneService } from "@/data/services";

export default async function RootLayout({ children, params }) {
  return (
    <main>
      <PagesHero title={"Service Detail"} />
      <section className="container gap-20 flex max-lg:flex-col justify-between mt-10 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]">
        <div className="w-1/3 max-lg:w-full mb-10">
          <ServiceTypes />
          <div className="bg-serviceAd my-10 bg-blackish-color  bg-no-repeat bg-cover bg-center  rounded-2xl p-10 py-20 flex items-center justify-center gap-10 flex-col ">
            <span className="border rounded-full font-semibold px-8 py-4 text-white uppercase">
              our best offer{" "}
            </span>
            <span className="flex items-center gap-2 text-lg text-white">
              <BsTelephone className="text-link-color-hover" />
              +251 912345678
            </span>
            <h1
              className={`${bitter.className} text-6xl font-semibold text-white text-center`}
            >
              Book your Spa Session
            </h1>
            <Link
              href={"#"}
              className={`text-2xl font-semibold flex items-center gap-2 px-8 py-4 rounded-full bg-link-color-hover text-white hover:bg-blackish-color transition-colors duration-200 ${bitter.className}`}
            >
              Register Now <BsArrowUpRight />
            </Link>
          </div>
          <div>
            <h1
              className={`${bitter.className}font-semibold mb-4 text-3xl flex items-center gap-4`}
            >
              <FlowerIcon size={40} className="text-link-color-hover" />
              Company Profile
            </h1>
            <Link
              href="#"
              className="flex justify-between items-center rounded-full px-8 py-3 bg-secondary-color gap-2"
            >
              <span>
                <BsFilePdf size={40} className="text-link-color-hover" />
              </span>
              <span className="uppercase font-bold">Download Pdf File</span>
              <span className="text-white bg-blackish-color p-4 rounded-full">
                <DownloadIcon size={40} />
              </span>
            </Link>

            <Link
              href="#"
              download={true}
              className="flex justify-between items-center rounded-full px-8 py-3 mt-4 bg-link-color-hover gap-2"
            >
              <span>
                <BsFilePdf size={40} className="text-white" />
              </span>
              <span className="uppercase text-white font-bold">
                Download Pdf File
              </span>
              <span className="text-link-color-hover    bg-white p-4 rounded-full">
                <DownloadIcon size={40} />
              </span>
            </Link>
          </div>
        </div>

        {children}
      </section>
    </main>
  );
}
