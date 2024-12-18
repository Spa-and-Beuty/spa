"use client";
import React, { useState } from "react";
import { bitter } from "../../../constants";
import { CheckCircle, Key, X } from "phosphor-react";
import { AvatarIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { RxAvatar } from "react-icons/rx";
import { updateUser } from "@/data/updatAdmin";
import { GoEyeClosed } from "react-icons/go";
import { redirect } from "next/dist/server/api-utils";

export default function ChangePassword({ id, role, prevEmail }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const res = await updateUser(id, { email: email, password: password });
      console.log("response data", res.data);
      if (!res.error) {
        setShowModal(true);
      }
      if (res.error) {
        setError(res.error);
      }
      console.log(res);
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
      //   setShowModal(true); //
    }
  }

  return (
    <div className="px-10 relative max-sm:px-4">
      <div className="flex items-center justify-between">
        <h1
          className={`${bitter.className} text-4xl max-sm:text-lg font-bold flex items-center gap-2 mb-10`}
        >
          <span>
            <Key size={40} className="max-sm text-lg" />
          </span>
          Change Password
        </h1>

        <div className="flex max-sm:mb-4 flex-col items-center">
          <RxAvatar size={40} className="text-link-color-hover" />
          <span className={`${bitter.className} `}>{role}</span>
          <p className={`${bitter.className} `}>{prevEmail}</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <form className="w-1/2 max-sm:w-2/3 space-y-3" onSubmit={onSubmit}>
          <div>
            <div className="flex flex-col ">
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Email"
                className="border px-4 py-2 rounded focus:outline-none "
              />
            </div>
          </div>
          <div className="flex  flex-col ">
            <label>New Password</label>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter new password"
                className="border px-4 w-full py-2 rounded focus:outline-none "
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className={"absolute right-4 top-1/2 -translate-y-1/2"}
              >
                {!showPassword ? (
                  <GoEyeClosed size={30} />
                ) : (
                  <EyeOpenIcon scale={3} className={"text-[30px]"} />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <label>Confirm Password</label>
            <div className="relative">
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder=" Confirm password"
                required
                className="border w-full px-4 py-2 rounded focus:outline-none "
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className={"absolute right-4 top-1/2 -translate-y-1/2"}
              >
                {!showPassword ? (
                  <GoEyeClosed size={30} />
                ) : (
                  <EyeOpenIcon scale={3} className={"text-[30px]"} />
                )}
              </div>
            </div>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type={"submit"}
            className="px-8 mt-5 py-2 bg-link-color-hover text-white rounded-md hover:bg-black transition-all duration-200 ease-in-out"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      {showModal && (
        <div className="fixed z-40 flex items-center justify-center flex-col bg-white shadow-md p-10 rounded-sm border border-gray-300 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CheckCircle color="green" fill="green" size={200} />
          <p className={`text-2xl font-bold ${bitter.className}`}>
            Password successfully changed!
          </p>
          <button
            onClick={() => setShowModal(!showModal)}
            className="absolute  z-50 top-4 right-4"
          >
            <X size={50} />
          </button>
        </div>
      )}
    </div>
  );
}
