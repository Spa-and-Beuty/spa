import React from "react";
import { bitter } from "../../constants";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({
  id,
  white = true,
  image_url,
  title,
  tag,
}) {
  return (
    <div className={`rounded-3xl ${white ? "bg-white" : "bg-secondary-color"}`}>
      <Image
        src={image_url}
        alt={title}
        width={500}
        height={500}
        className={"w-full rounded-3xl "}
      />
      <div className={"flex px-5 py-4 items-center justify-between"}>
        <h1 className={`text-2xl font-semibold ${bitter.className}`}>
          {title}
        </h1>

        <Link
          href={`/service/${id}`}
          className={
            "p-4 rounded-full bg-link-color-hover text-white hover:bg-link-color-normal hover:text-white transition duration-200"
          }
        >
          <BsArrowRight size={30} />
        </Link>
      </div>
    </div>
  );
}
