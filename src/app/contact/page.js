import React from "react";
import {
  BsCalendar,
  BsMailbox,
  BsMap,
  BsMarkerTip,
  BsPhone,
  BsTelephone,
} from "react-icons/bs";
import { bitter } from "../../../constants";
import { PagesHero } from "@/components/PagesHero";
import ContactGrid from "@/components/ContactGrid";

export default function page() {
  const contact = {
    id: "1",
    emails: ["pbminfouser@infotech.com", "noreply@pbminfotech.com"],
    workingDays: "Mon to Fri - 09:00am To 06:00pm Saturday to Sunday - Closed",
    location:
      "8502 Preston Rd. Inglewood, Maine 9838086, Hoofddorp Noord- 2132",
    phoneNumber: {
      phone: "+001 236-895-4732",
      mobile: "+9123 895-4732-236",
    },
  };

  return (
    <main>
      <PagesHero title={"Contact Us"} />

      <section className="gap-10 max-sm:mx-10 mx-20 mt-20 grid grid-rows-1 grid-cols-4 max-sm:grid-cols-1 max-sm:grid-rows-4 max-lg:grid-cols-2 max-lg:grid-rows-2 ">
        <div className="p-8 group border rounded">
          <div className="flex gap-4 items-center">
            <div className="group-hover:bg-link-color-hover transtion-all duration-500 p-4 bg-secondary rounded-full ">
              <BsMailbox size={30} />
            </div>
            <h1 className={`text-2xl font-semibold ${bitter.className}`}>
              Mail US 24/7
            </h1>
          </div>
          <div className="h-[1px] relative w-full my-3 bg-gray-300">
            <div className=" h-full absolute group-hover:w-full transition-all duration-300 left-0 w-0 bg-blackish-color"></div>
          </div>
          {contact.emails.map((email, index) => (
            <p key={index} className="text-darkish-color text-sm">
              {email}
            </p>
          ))}
        </div>
        <div className="p-8 hover:-translate-y-5 transition-all duration-700 group border rounded">
          <div className="flex gap-4 items-center">
            <div className="group-hover:bg-link-color-hover transtion-all duration-500 p-4 bg-secondary rounded-full ">
              <BsMarkerTip size={30} />
            </div>
            <h1 className={`text-2xl font-semibold ${bitter.className}`}>
              Our Location
            </h1>
          </div>
          <div className="h-[1px] relative w-full my-3 bg-gray-300">
            <div className=" h-full absolute group-hover:w-full transition-all duration-300 left-0 w-0 bg-blackish-color"></div>
          </div>

          <p className="text-darkish-color text-sm">{contact.location}</p>
        </div>
        <div className="p-8 group border rounded">
          <div className="flex gap-4 items-center">
            <div className="group-hover:bg-link-color-hover transtion-all duration-500 p-4 bg-secondary rounded-full ">
              <BsTelephone size={30} />
            </div>
            <h1 className={`text-2xl font-semibold ${bitter.className}`}>
              Call US 24/7
            </h1>
          </div>
          <div className="h-[1px] relative w-full my-3 bg-gray-300">
            <div className=" h-full absolute group-hover:w-full transition-all duration-300 left-0 w-0 bg-blackish-color"></div>
          </div>

          <p className="text-darkish-color text-sm">
            Phone: {contact.phoneNumber.phone}
          </p>
          <p className="text-darkish-color text-sm">
            Mobile: {contact.phoneNumber.mobile}
          </p>
        </div>
        <div className="p-8 group border rounded">
          <div className="flex gap-4 items-center">
            <div className="group-hover:bg-link-color-hover transtion-all duration-500 p-4 bg-secondary rounded-full ">
              <BsCalendar size={30} />
            </div>
            <h1 className={`text-2xl font-semibold ${bitter.className}`}>
              Working Days
            </h1>
          </div>
          <div className="h-[1px] relative w-full my-3 bg-gray-300">
            <div className=" h-full absolute group-hover:w-full transition-all duration-300 left-0 w-0 bg-blackish-color"></div>
          </div>

          <p className="text-darkish-color text-sm">{contact.workingDays}</p>
        </div>
      </section>
      <ContactGrid />
      <div className="max-lg:mx-10 mx-40 my-40 max-lg:my-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63054.73327321747!2d38.79084490907616!3d8.979432716335829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b33a3569139%3A0xb505349b8c87fdd2!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1730810058454!5m2!1sen!2set"
          height="450"
          className="border-0 w-full  rounded-3xl "
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
