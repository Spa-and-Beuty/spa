import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsQuote,
  BsTwitterX,
} from "react-icons/bs";
export default function TestimonialCard({
  socialMedia,
  white = true,
  full_name,
  image_url,
  role,
}) {
  return (
    <div className="">
      <div
        className={`rounded-3xl border ${white ? "bg-white" : "bg-secondary-color"} flex flex-col  items-center justify-center`}
      >
        <div className={"flex items-center justify-between mb-5"}>
          <div
            className={
              "flex justify-center flex-col box-border py-5 gap-4 items-center"
            }
          >
            <div className={"relative"}>
              {" "}
              <Image
                src={image_url}
                alt={full_name}
                width={230}
                height={230}
                className={"rounded-full  h-64 w-64 object-cover"}
              />
              <span className="rounded-full text-white uppercase absolute bottom-0 left-1/2 -translate-x-1/2 bg-link-color-hover px-4 z-50 py-2 ">
                {role}
              </span>
            </div>

            <div>
              <h1 className={` text-xl font-semibold`}>{full_name}</h1>
            </div>
            <div className="flex items-center gap-3 ">
              <Link
                className="p-4 rounded-full bg-secondary-color"
                href={socialMedia?.facebook || "#"}
              >
                <BsFacebook size={20} />
              </Link>
              <Link
                className="p-4 rounded-full bg-secondary-color"
                href={socialMedia?.twitterX || "#"}
              >
                <BsTwitterX size={20} />
              </Link>
              <Link
                className="p-4 rounded-full bg-secondary-color"
                href={socialMedia?.facebook || "#"}
              >
                <BsLinkedin size={20} />
              </Link>
              <Link
                className="p-4 rounded-full bg-secondary-color"
                href={socialMedia?.linkedIn || "#"}
              >
                <BsInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
