import Image from "next/image";
import React from "react";
import { posts, services } from "../../../../constants";
import { BsQuote } from "react-icons/bs";

export default function page({ params }) {
  const service = services.find((item) => item.id == params.serviceId);
  return (
    <div className="w-2/3 max-lg:w-full  max-lg:-order-1  flex flex-col">
      <div className="h-auto w-full">
        <Image
          src={service.image_url}
          width={600}
          height={200}
          alt={service.title}
          className="w-full h-[600px] object-center object-cover  rounded-xl"
        />
      </div>

      <p className="text-lg  py-2 mt-10 text-darkish-color ">
        <span className="float-left mr-2 text-link-color-hover text-7xl ">
          {service.description[0]}
        </span>
        {service.description.slice(1)}
      </p>
    </div>
  );
}
