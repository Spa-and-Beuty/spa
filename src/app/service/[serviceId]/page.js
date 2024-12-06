import Image from "next/image";
import React from "react";
import { posts, services } from "../../../../constants";
import { BsQuote } from "react-icons/bs";
import { getOneService } from "@/data/services";

export default async function page({ params }) {
  const service = await getOneService(await params.serviceId);
  return (
    <div className="w-2/3 max-lg:w-full  max-lg:-order-1  flex flex-col">
      <div className="h-auto w-full">
        <Image
          quality={100}
          src={service.imageUrl}
          width={600}
          height={200}
          alt={service.title}
          className="w-full h-[600px] object-center object-cover  rounded-xl"
        />
      </div>

      <div
        className="text-lg  prose py-2 mt-10 text-darkish-color "
        dangerouslySetInnerHTML={{ __html: service.description }}
      />
    </div>
  );
}
