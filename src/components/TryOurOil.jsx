"use client";
import { bitter } from "../../constants";
import { BsPlay, BsPlayBtn } from "react-icons/bs";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";

export const TryOurOil = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section className="px-16 relative max-lg:px-4 mb-20 h-full rounded-3xl">
      <section
        className={
          "bg-tryOurOil bg-center rounded-3xl max-sm:px-10 max-lg:px-20 px-60 py-40 h-full w-full bg-cover "
        }
      >
        <h1
          className={`${bitter.className} w-[800px] max-lg:w-2/3 max-sm:w-4/5 mb-8 max-sm:text-2xl max-lg:text-4xl text-7xl text-white`}
        >
          Try our spa treatment with aroma oils
        </h1>
        <div className={"flex items-center gap-10"}>
          <div
            onClick={() => setShowVideo(!showVideo)}
            className={
              "text-white bg-link-color-hover p-6 border-4 border-white rounded-full"
            }
          >
            <BsPlayBtn size={40} />
          </div>

          <span className={"text-lg font-bold text-white"}>
            Watch our video
          </span>
        </div>
      </section>
      {showVideo && (
        <div
          onClick={() => setShowVideo(!showVideo)}
          className="absolute w-full flex items-center justify-center p-10 top-1/2 left-1/2 -translate-x-1/2 backdrop-blur-lg -translate-y-1/2"
        >
          <div className="shadow rounded-xl">
            <video autoPlay width="320" height="240" controls>
              <source src="/assets/images/insta-spa-video.mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};
