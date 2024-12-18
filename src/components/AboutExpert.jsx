import Image from "next/image";
import React from "react";
import { bitter } from "../../constants";
import {
  BsArrowLeftRight,
  BsArrowUpRight,
  BsCheckCircle,
} from "react-icons/bs";
import Link from "next/link";

export default function AboutExpert({ className = "" }) {
  return (
    <div
      className={`flex justify-between w-full   gap-32 mt-5 max-sm:flex-col max-lg:flex-col`}
    >
      <div
        className={`flex-1 ${className} border order-1 max-lg:px-10 relative`}
      >
        <Image
          src="/assets/images/expert.jpg"
          alt="mask image"
          width={400}
          height={400}
          className=" rounded-3xl h-auto"
        />
      </div>
      <div className="flex h-full flex-1 max-lg:px-10 gap-4 w-full flex-col items-start">
        <span
          className={`text-blackish-color  bg-white px-6 py-3 text-sm rounded-full uppercase`}
        >
          about us
        </span>

        <p>
          {
            "  Rejuva Glow Beauty, LLC - Empowering Beauty As the CEO and Founder of Rejuva Glow Beauty, LLC, I am Adriene Murray. Since 2009, I’ve been a licensed cosmetologist. My journey began with a personal struggle with my own skincare, losing a lot of hair and self-esteem, leading to a loss of confidence. This experience ignited my passion for skincare and beauty. I am committed to helping, educating, and treating women with similar concerns, knowing the impact of feeling confident due to improved skin. Specializing in skincare and cosmetics, I stay updated on the latest trends and techniques. Building personal relationships with each client is my priority, and I aim to provide exceptional, meaningful services. Join me on this journey and let’s embrace beauty, confidence, and empowerment together."
          }
        </p>

        <div className={`justify-self-end mt-5 `}>
          <Link
            href={"/contact"}
            className={
              "items-center flex max-sm:mt-4 gap-4 bg-blackish-color text-white hover:bg-secondary-color hover:text-blackish hover:text-blackish-color transition-colors duration-200  px-6 py-3 rounded-full"
            }
          >
            {" "}
            Contact Us
            <BsArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
