"use client";
import React, { useState } from "react";
import { bitter } from "../../constants";
import {
  BsArrowBarRight,
  BsFacebook,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import Link from "next/link";
import { FacebookLogo } from "phosphor-react";
import { AiFillFacebook } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { createContactMessage } from "@/data/contactMessage";

export default function ContactGrid() {
  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    if (!message || !fullName || !email || subject) {
      setError("All fields are required");
    }

    // const formData = new FormData();
    // formData.append("fullname", fullName);
    // formData.append("subject", subject);
    // formData.append("email", email);
    // formData.append("message", message);
    // formData.append("phoneNo", phone);
    const formData = {
      fullname: fullName,
      subject,
      message,
      phoneNo: phone,
      email,
    };

    try {
      const message = await createContactMessage(formData);
      if (message.error) {
        setError(message.error);
        setStatusMessage("Failed to create contact. Please try again.");
      }
      if (!message.error) {
        setStatusMessage("Message successfully sent");
      }
    } catch (e) {
      setError(e.message);
      setStatusMessage("Failed to create contact. Please try again.");
    } finally {
      setIsLoading(false);
      setError("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
    }

    // formData.append("fullName", fullName)
  }

  return (
    <section className="bg-testimonial max-lg:mx-10 bg-left-bottom bg-no-repeat">
      <section className="max-lg:flex-col  container mt-40 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px] flex  gap-10">
        <div className="flex-1">
          <span className="px-8 scale-75 py-4 rounded-full bg-secondary-color uppercase">
            Contact Us
          </span>
          <h1
            className={`${bitter.className} mt-10 max-lg:text-4xl max-sm:text-4xl text-6xl font-semibold mb-7 my-5 `}
          >
            Happy to answer all your questions
          </h1>
          <p className="text-darkish-color text-balance my-10">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labo et dolo cupidatat non proident, sunt in culpa qui officia
            deserunt anim id est laborum.
          </p>

          <div className="h-[1px] w-full bg-gray-200 my-10" />
          <div>
            <h3 className={`${bitter.className} text-2xl font-bold mb-3`}>
              Follow us:
            </h3>
            <div className="flex items-center gap-3">
              <Link
                href={"#"}
                className="p-4 border border-link-color-hover rounded-full hover:bg-link-color-hover transition-colors duration-200 group"
              >
                <BiLogoFacebook
                  size={30}
                  className="text-link-color-hover group-hover:text-white"
                />
              </Link>
              <Link
                href={"#"}
                className="p-4 border border-link-color-hover rounded-full hover:bg-link-color-hover transition-colors duration-200 group"
              >
                <BsTwitterX
                  size={25}
                  className="text-link-color-hover group-hover:text-white"
                />
              </Link>
              <Link
                href={"#"}
                className="p-4 border border-link-color-hover rounded-full hover:bg-link-color-hover transition-colors duration-200 group"
              >
                <BiLogoLinkedin
                  size={30}
                  className="text-link-color-hover group-hover:text-white"
                />
              </Link>
              <Link
                href={"#"}
                className="p-4 border border-link-color-hover rounded-full hover:bg-link-color-hover transition-colors duration-200 group"
              >
                <BiLogoInstagram
                  size={30}
                  className="text-link-color-hover group-hover:text-white"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-secondary-color p-10 rounded-3xl flex-1">
          <form onSubmit={onSubmit}>
            <h1
              className={`${bitter.className} max-lg:text-2xl max-sm:text-3xl text-4xl font-semibold mb-7 my-5 `}
            >
              Send Message
            </h1>
            <input
              value={message}
              required={true}
              className={"rounded-lg mb-5 focus:outline-none w-full p-10 pb-20"}
              placeholder={"Write a massage"}
              onChange={(e) => {
                setStatusMessage("");
                setMessage(e.target.value);
              }}
            />
            <div className={"flex max-sm:flex-col gap-10"}>
              <input
                type="text"
                required={true}
                placeholder={"Your Name *"}
                className={
                  "rounded-lg  focus:outline-none max-lg:w-full w-1/2 py-5 px-10"
                }
                value={fullName}
                onChange={(e) => {
                  setStatusMessage("");
                  setFullName(e.target.value);
                }}
              />
              <input
                type="email"
                required={true}
                placeholder={"Your Email*"}
                className={
                  "rounded-lg max-sm:w-full w-1/2 px-10 focus:outline-none py-5"
                }
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatusMessage("");
                }}
              />
            </div>
            <div className={"flex max-sm:flex-col my-5  gap-10"}>
              <input
                value={phone}
                type={"text"}
                placeholder={"Your Phone*"}
                className={
                  "rounded-lg max-lg:w-full py-5  w-1/2 px-10 focus:outline-none"
                }
                onChange={(e) => {
                  setPhone(e.target.value);
                  setStatusMessage("");
                }}
              />
              <input
                type={"text"}
                placeholder={"Subject"}
                className={
                  "rounded-" +
                  "lg max-lg:w-full py-5  w-1/2 px-10 focus:outline-none"
                }
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  setStatusMessage("");
                }}
              />
            </div>
            <div className="flex gap-2 my-10 items-center">
              <input
                id="save"
                className="outline-none active:outline-none focus:border focus:border-link-color-hover"
                type="checkbox"
              />
              <label className="text-sm text-darkish-color" htmlFor="save">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <p className={"mt-10 text-sm text-link-color-hover"}>
              {statusMessage}
            </p>

            <button
              type="submit"
              className={
                "px-10 py-5 text-white rounded-full mt-6 hover:bg-white hover:text-black transition-colors duration-200 flex gap-3 items-center bg-link-color-hover "
              }
            >
              {isLoading ? "Sending Message..." : "Send Message"}{" "}
              <BsArrowBarRight />
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}
