"use client";
import { usePathname } from "next/navigation";
import { bitter } from "../../constants";

export const PagesHero = ({ title = "" }) => {
  const pathname = usePathname();
  return (
    <main
      className={
        "bg-title bg-cover overflow-x-hidden flex justify-center flex-col  max-sm:min-h-[400px] min-h-[500px] bg-center lg:mx-6 max-sm:mx-0 rounded-3xl max-lg:rounded-none  px-10 max-lg:px-6"
      }
    >
      <div
        className={
          "z-10 w-2/3  max-lg:w-11/12 flex gap-6 flex-col  text-white  h-full"
        }
      >
        {" "}
        <h1
          className={`max-sm:text-3xl font-semibold max-lg:text-5xl text-6xl ${bitter.className}`}
        >
          {" "}
          {title}
        </h1>
        <span
          className={`flex items-center gap-2 uppercase  ${bitter.className}`}
        >
          <span>Home</span>
          <span>{">"}</span>
          <span>{pathname.split("/")[1]}</span>
        </span>
      </div>
    </main>
  );
};
