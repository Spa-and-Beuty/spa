"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  BsArrowBarRight,
  BsMenuButton,
  BsSearch,
  BsTelephone,
} from "react-icons/bs";
import { ReachUs } from "@/components/ReachUs";
import { Menu, MenuIcon } from "lucide-react";
import { MobileIcon } from "@radix-ui/react-icons";
import { MobileMenu } from "@/components/MobileMenu";
import { GlobalSearch } from "@/components/GlobalSearch";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const hide = pathname.split("/").includes("admin");
  const headerLinks = [
    { title: "Home", link: "/" },
    { title: "Our Team", link: "team" },
    { title: "Blog", link: "blog" },
    { title: "Service", link: "service" },
    { title: "About Us", link: "about" },
    { title: "Contact", link: "contact" },
    { title: "Faqs", link: "faqs" },
  ];
  return (
    <header
      className={` justify-between sticky top-0 z-50 backdrop-blur-2xl items-center sm:px-8 md:px-10 px-6 lg:px-16 py-10 max-sm:py-6 ${hide ? "hidden" : "flex"}`}
    >
      <div className={"flex items-center lg:gap-10"}>
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt={"logo"}
            width={188}
            height={45}
          />
        </Link>
        <nav className={"hidden lg:block"}>
          <ul
            className={
              "flex  font-bold uppercase text-link-color-normal items-center gap-4 justify-center"
            }
          >
            {headerLinks.map((links) => (
              <li
                key={links.link}
                className={`hover:text-link-color-hover transition-colors duration-200 ${pathname.split("/").includes(links.link) ? "text-link-color-hover" : ""}`}
              >
                <Link href={links.link === "/" ? "/" : `/${links.link}`}>
                  {links.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="hidden lg:block">
        <ReachUs
          title={"call us now"}
          number={"+251 912345678"}
          Icon={BsTelephone}
          buttonText={" Get Qoute"}
        />
      </div>

      <div className={"flex items-center gap-10 lg:hidden"}>
        <GlobalSearch />
        <MobileMenu />
      </div>
    </header>
  );
};
