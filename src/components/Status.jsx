"use client";
import { bitter } from "../../constants";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export const Status = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Initialize ScrollTrigger
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        once: true,
        onEnter: () => setStartCounting(true), // Trigger counting on enter
      },
    });
  }, []);

  return (
    <div
      className={
        "container max-sm:w-96 mt-10 max-sm:mx-4 mx-auto xl:max-w-[1428px] flex flex-col items-center lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]"
      }
    >
      <div className={"w-full h-[1px] bg-gray-200"}></div>
      <div
        ref={sectionRef}
        className="grid grid-rows-1 grid-cols-4 max-sm:grid-rows-4 max-sm:grid-cols-1 max-lg:grid-cols-2 max-lg:grid-rows  gap-4 p-20 max-sm:p-10  items-center justify-between"
      >
        <div className="text-center">
          <h1
            className={`text-7xl mb-2 text-link-color-hover font-bold ${bitter.className}`}
          >
            {startCounting && (
              <CountUp className={"text-red"} start={0} end={25} />
            )}
            {startCounting && "+"}
          </h1>
          <p className={"text-sm uppercase"}>satisfied customers</p>
        </div>{" "}
        <div className="text-center">
          <h1
            className={`text-7xl mb-2 text-link-color-hover font-bold ${bitter.className}`}
          >
            {startCounting && (
              <CountUp className={"text-red"} start={0} end={100} />
            )}
          </h1>
          <p className={"text-sm uppercase"}>spa accessories</p>
        </div>{" "}
        <div className="text-center">
          <h1
            className={`text-7xl mb-2 text-link-color-hover font-bold ${bitter.className}`}
          >
            {startCounting && (
              <CountUp className={"text-red"} start={0} end={6} />
            )}
          </h1>
          <p className={"text-sm uppercase"}>years of experience</p>
        </div>{" "}
        <div className="text-center">
          <h1
            className={`text-7xl mb-2 text-link-color-hover font-bold ${bitter.className}`}
          >
            {startCounting && (
              <CountUp className={"text-red"} start={0} end={2} />
            )}
          </h1>
          <p className={"text-sm uppercase"}>number of centers</p>
        </div>
      </div>
    </div>
  );
};
