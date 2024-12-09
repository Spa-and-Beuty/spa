import BackButton from "@/components/admin/BackButton";
import { getOneMessage } from "@/data/contactMessage";

import React from "react";

import { RxAvatar } from "react-icons/rx";

export default async function Page({ params }) {
  const id = (await params).id;
  const message = await getOneMessage(id);
  const getMinutesAgo = (dateString) => {
    const messageDate = new Date(dateString);
    const now = new Date();
    const diffInMs = now - messageDate;

    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    if (diffInMinutes <= 60) {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours <= 24) {
      return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  };

  const formatTime = (dateString) => {
    const messageDate = new Date(dateString);
    const hours = messageDate.getHours();
    const minutes = messageDate.getMinutes();
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const amPm = hours >= 12 ? "PM" : "AM";
    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${amPm}`;
  };

  return (
    <section className="px-10">
      <div className="flex items-center mb-10 gap-4">
        <BackButton />
        <h1 className="text-2xl  ml-10 ">{message.subject}</h1>
      </div>
      <nav className="w-full flex  justify-between">
        <div>
          <div className="flex gap-3  items-center">
            <RxAvatar size={70} />
            <div>
              <h2 className="flex font-bold gap-6 items-center">
                {message.fullname}{" "}
                <span className="text-sm text-gray-500">
                  {"<"}
                  {message.email}
                  {">"}
                </span>
              </h2>
              <span>to me</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>{formatTime(message.createdAt)}</span>
          <span>({getMinutesAgo(message.createdAt)})</span>
        </div>
      </nav>
      <main className=" container m-auto w-2/3 lg:mt-20 flex item-center justify-center">
        <p>{message.message}</p>
      </main>
    </section>
  );
}
