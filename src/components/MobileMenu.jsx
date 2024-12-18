import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import React from "react";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { HiMenu, HiOutlineMenu } from "react-icons/hi";
import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

export const MobileMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className={"outline-0"}>
          <RxHamburgerMenu size={30} />
        </SheetTrigger>
        <SheetContent>
          <nav className={"mt-20 flex items-center justify-center "}>
            <ul
              className={
                "flex flex-col  font-bold uppercase text-link-color-normal  gap-4 justify-center"
              }
            >
              <li
                className={
                  "hover:text-link-color-hover transition-colors duration-200"
                }
              >
                <Link href={"/"}>Home</Link>
              </li>
              <li
                className={
                  "hover:text-link-color-hover transition-colors duration-200"
                }
              >
                <Link href={"/products"}>Products</Link>
              </li>{" "}
              <li
                className={
                  "hover:text-link-color-hover transition-colors duration-200"
                }
              >
                <Link href={"/blog"}>Blog</Link>
              </li>{" "}
              <li
                className={
                  "hover:text-link-color-hover transition-colors duration-200"
                }
              >
                <Link href={"/service"}>Service</Link>
              </li>{" "}
              <li
                className={
                  "hover:text-link-color-hover transition-colors duration-200"
                }
              >
                <Link href={"/about"}>About Us</Link>
              </li>{" "}
              <li
                className={
                  "hover:text-link-color-hover transition-colors duration-200"
                }
              >
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li
                className={
                  "hover:text-link-color-hover transition-colors duration-200"
                }
              >
                <Link href={"/pricing"}>Pricing</Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};
