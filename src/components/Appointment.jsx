import Image from "next/image";
import { bitter } from "../../constants";
import { SelectServiceList } from "@/components/SelectServiceList";
import { BsArrowBarRight, BsBox } from "react-icons/bs";

export const Appointment = () => {
  return (
    <section className={"px-16 max-lg:px-4 mt-10"}>
      <div className={"flex max-lg:flex-col pt-20 gap-10"}>
        <Image
          src={"/assets/images/contact-col-bg.jpg"}
          alt={"contact image"}
          width={400}
          height={400}
          className={"flex-1 max-lg:w-full object-cover rounded-3xl"}
        />
        <div
          className={
            "p-20 max-sm:px-5 max-lg:py-10 bg-contact bg-no-repeat relative flex-1 rounded-3xl bg-link-color-hover"
          }
        >
          <span
            className={
              "text-blackish-color bg-white px-5 py-1 rounded-full uppercase"
            }
          >
            Appointment
          </span>
          <h1
            className={`${bitter.className} max-lg:w-full w-4/5 my-5 max-lg:text-4xl max-sm:text-2xl text-white text-6xl font-semibold `}
          >
            {"We're"} a Spa & Wellness Center Since 2000
          </h1>
          <form>
            <div className={"flex max-sm:flex-col gap-10"}>
              <input
                type="text"
                required={true}
                placeholder={"Full Name *"}
                className={
                  "rounded-lg  focus:outline-none max-lg:w-full w-1/2 py-5 px-10"
                }
              />
              <input
                type="email"
                required={true}
                placeholder={"Email Address*"}
                className={
                  "rounded-lg max-sm:w-full w-1/2 px-10 focus:outline-none py-5"
                }
              />
            </div>
            <div className={"flex max-sm:flex-col my-10  gap-10"}>
              <SelectServiceList />
              <input
                type={"date"}
                placeholder={"Email Address*"}
                className={
                  "rounded-lg max-lg:w-full max-lg:py-5  w-1/2 px-10 focus:outline-none"
                }
              />
            </div>
            <textarea
              required={true}
              className={"rounded-lg focus:outline-none w-full p-10"}
              placeholder={"Write a massage"}
            />
            <button
              type="submit"
              className={
                "px-10 py-5 text-white rounded-full mt-6 hover:bg-white hover:text-black transition-colors duration-200 flex gap-3 items-center bg-blackish-color "
              }
            >
              Send Massage <BsArrowBarRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
