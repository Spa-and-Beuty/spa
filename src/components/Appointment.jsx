"use client";
import Image from "next/image";
import { bitter } from "../../constants";
import { BsArrowBarRight, BsBox } from "react-icons/bs";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getManyServices } from "@/data/services";
import { createAppointment } from "@/data/appointment";

export const Appointment = () => {
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function getService() {
      setIsLoading(true);
      try {
        const data = await getManyServices();
        setServices(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getService();
  }, []);

  async function onSubmit(e) {
    e.preventDefault();

    if (!date || !service || !message || !fullName || !email) {
      setError("All fields are required");
      setStatus("All fields are required");
    }

    setIsLoading(true);
    // const formData = new FormData();
    // formData.append("full_name", fullName);
    // formData.append("date", date);
    // formData.append("email", email);
    // formData.append("service", service);
    // formData.append("message", message);

    const formData = { full_name: fullName, service, message, date, email };
    try {
      const res = await createAppointment(formData);
      if (res.error) {
        setError(res.error.message);
        setStatus("Failed to create appointment. Please try again.");
      }
      if (!res.error) {
        setStatus("Appointment successfully booked. Please come visit us");
      }

      console.log(res);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
      setEmail("");
      setMessage("");
      setDate(null);
      setService("");
      setFullName("");
    }
  }

  return (
    <section id={"appointment"} className={"px-16 max-lg:px-4 mt-10"}>
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
          <form onSubmit={onSubmit}>
            <div className={"flex max-sm:flex-col gap-10"}>
              <input
                type="text"
                required={true}
                placeholder={"Full Name *"}
                value={fullName}
                className={
                  "rounded-lg  focus:outline-none max-lg:w-full w-1/2 py-5 px-10"
                }
                onChange={(e) => {
                  setStatus("");
                  setFullName(e.target.value);
                }}
              />
              <input
                type="email"
                required={true}
                value={email}
                placeholder={"Email Address*"}
                className={
                  "rounded-lg max-sm:w-full w-1/2 px-10 focus:outline-none py-5"
                }
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("");
                }}
              />
            </div>
            <div className={"flex max-sm:flex-col my-10  gap-10"}>
              <Select
                onValueChange={(value) => {
                  setStatus("");
                  setService(value);
                }}
              >
                <SelectTrigger className="w-1/2 max-sm:w-full outline-none px-10 py-8 border-none bg-white">
                  <SelectValue
                    className={"text-darkish-color"}
                    placeholder="Available Service"
                  />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.title}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input
                type={"date"}
                value={date}
                placeholder={"Email Address*"}
                className={
                  "rounded-lg max-lg:w-full max-lg:py-5  w-1/2 px-10 focus:outline-none"
                }
                onChange={(e) => {
                  setStatus("");
                  setDate(e.target.value);
                }}
              />
            </div>
            <textarea
              value={message}
              required={true}
              className={"rounded-lg focus:outline-none w-full p-10"}
              placeholder={"Write a massage"}
              onChange={(e) => {
                setStatus("");
                setMessage(e.target.value);
              }}
            />
            <p
              className={`text-sm font-bold mt-10 ${error ? "text-red-500" : "text-blackish-color "}`}
            >
              {status}
            </p>
            <button
              type="submit"
              className={
                "px-10 py-5 text-white rounded-full mt-6 hover:bg-white hover:text-black transition-colors duration-200 flex gap-3 items-center bg-blackish-color "
              }
            >
              {isLoading ? "Sending message" : "Send Massage"}{" "}
              <BsArrowBarRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
