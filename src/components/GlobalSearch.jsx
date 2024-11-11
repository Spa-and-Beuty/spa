import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";

export const GlobalSearch = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className={"border-0 outline-0"}>
          <BsSearch />
        </SheetTrigger>
        <SheetContent className={"border-0 h-1/2"} side={"top"}>
          <section
            className={"flex w-full justify-center h-full items-center p-10 "}
          >
            <div className={"relative px-10 border-b"}>
              <input
                type={"text"}
                placeholder={"Search..."}
                className={
                  "  bg-transparent border-0 outline-none placeholder:text-3xl placeholder:font-bold border-white p-4"
                }
              />
              <span
                className={
                  "absolute cursor-pointer right-0 top-1/2 -translate-y-1/2"
                }
              >
                <BsSearch />
              </span>
            </div>
          </section>
        </SheetContent>
      </Sheet>
    </>
  );
};
