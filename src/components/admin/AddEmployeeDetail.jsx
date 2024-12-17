"use client";

import React, { useEffect, useState } from "react";
import { CloudUpload, Delete } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
import TestimonialCard from "@/components/TestimonialCard";
import { createEmployee } from "@/data/employee";
import { X } from "lucide-react";
import { bitter } from "../../../constants";
import { CheckCircle } from "phosphor-react";
export default function AddEmployeeDetail() {
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [position, setPosition] = useState("");
  const [experienceYears, setExperienceYears] = useState(0);
  const [personalInfo, setPersonalInfo] = useState("");
  const [skills, setSkills] = useState([]);
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("");

  const employmentStatuses = ["Active", "OnLeave", "Terminated"];
  const roles = ["Admin", "Stylist", "Manager", "Receptionist", "ordinary"];

  const handleImageUpload = (e) => {
  setError("");
  const file = e.target.files[0];
  if (file) {
    if (!["image/png", "image/jpg", "image/jpeg", "image/gif"].includes(file.type)) {
      setError("Only PNG, JPG, and GIF files are allowed.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError("File size exceeds 5MB.");
      return;
    }
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  } else {
    setError("Please upload a valid image file.");
  }
};


  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    if (!image || !fullName || !email || !employmentStatus || !role) {
      setError("All required fields must be filled.");
      setStatus("All required fields must be filled.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("full_name", fullName);
    formData.append("email", email);
    formData.append("phone_no", phoneNo);
    formData.append("position", position);
    formData.append("experience_years", experienceYears);
    formData.append("personal_info", personalInfo);
    formData.append("skills", JSON.stringify(skills));
    formData.append("employment_status", employmentStatus);
    formData.append("role", role);
    formData.append("image", image);

    try {
      const employee = await createEmployee(formData);
      if (employee.error) {
        setStatus("Unable to create an employee. Please try again");
      }
      if (!employee.error) {
        setStatus("Employee successfully created!");
        setShowModal(true);
      }
    } catch (err) {
      setError("An error occurred while saving employee details.");
      console.log(err);
    } finally {
      setIsLoading(false);
      setError("");
      setRole("");
      setEmail("");
      setStatus("");
      setEmploymentStatus("");
      setExperienceYears("");
      setFullName("");
      setImage("");
      setImagePreview("");
      setPersonalInfo("");

      setPhoneNo("");

      setSkills("");
    }
  }

  const isSubmitDisabled =
    !image || !fullName || !email || !employmentStatus || !role || isLoading;



  return (
    <section className="flex lg:flex-row flex-col items-start p-10 w-full gap-10">
      <div className="lg:w-1/2 w-full bg-white dark:bg-[#1e1e1e] lg:sticky top-20 p-10 rounded">
        <TestimonialCard
          white={false}
          key={fullName}
          socialMedia={{
            instagram: "#",
            twitterX: "#",
            linkedIn: "#",
            facebook: "#",
          }}
          role={role}
          full_name={fullName}
          image_url={imagePreview}
        />
      </div>

      <div className="w-full">
        <div className="flex-1 dark:bg-[#1e1e1e] bg-white relative border-dashed border-2 rounded flex flex-col w-full items-center justify-center p-24 border-[#d8dfe7">
          <CloudUpload size={50} className="text-hero" />
          <h1 className="text-xl mt-3 font-semibold">
            Drop Profile Image Here or,{" "}
            <span className="text-hero">Click to browse</span>
          </h1>
          <input
            required
            onChange={handleImageUpload}
            name="image"
            type="file"
            className="w-full opacity-0 absolute inset-0 text-sm py-3 px-7 h-full border-color-light text-color-body rounded-md border"
          />
        </div>

        <form
          onSubmit={onSubmit}
          className="w-full text-[#5d7186] dark:text-white"
        >
          <div className="bg-white dark:bg-[#1e1e1e] p-4 mt-4 rounded ">
            <div className="flex gap-10 items-center">
              <div className="flex flex-col w-1/2">
                <label>Full Name</label>
                <input
                  required
                  type="text"
                  onChange={(e) => setFullName(e.target.value)}
                  className="px-4 py-2 border"
                  placeholder="Employee Name"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label>Email</label>
                <input
                  required
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 border"
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div className="flex gap-10 items-center mt-4">
              <div className="flex flex-col w-1/2">
                <label>Phone Number</label>
                <input
                  value={phoneNo}
                  required
                  type="text"
                  onChange={(e) => setPhoneNo(e.target.value)}
                  className="px-4 py-2 border"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label>Position</label>
                <input
                  value={position}
                  required
                  type="text"
                  onChange={(e) => setPosition(e.target.value)}
                  className="px-4 py-2 border"
                  placeholder="Job Title or Role"
                />
              </div>
            </div>

            <div className="flex gap-10 items-center mt-4">
              <div className="flex flex-col w-1/2">
                <label>Experience (Years)</label>
                <input
                  value={experienceYears}
                  type="number"
                  onChange={(e) => setExperienceYears(e.target.value)}
                  className="px-4 py-2 border"
                  placeholder="Years of Experience"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label>Employment Status</label>
                <select
                  required
                  value={employmentStatus}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                  className="px-4 py-2 border"
                >
                  <option value="" disabled selected>
                    Select Status
                  </option>
                  {employmentStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-10 items-center mt-4">
              <div className="flex flex-col w-1/2">
                <label>Role</label>
                <select
                  value={role}
                  required
                  onChange={(e) => setRole(e.target.value)}
                  className="px-4 py-2 border"
                >
                  <option value="" disabled selected>
                    Select Role
                  </option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-1/2">
                <label>Skills (Comma Separated)</label>
                <input
                  value={skills}
                  type="text"
                  onChange={(e) =>
                    setSkills(e.target.value.split(",").map((s) => s.trim()))
                  }
                  className="px-4 py-2 border"
                  placeholder="e.g., JavaScript, React, CSS"
                />
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <label>Personal Info</label>
              <textarea
                value={personalInfo}
                onChange={(e) => setPersonalInfo(e.target.value)}
                className="border mt-2 p-10 rounded outline-none"
                placeholder="Short bio or description"
              ></textarea>
            </div>
          </div>

          {status && (
            <div>
              <p className={"my-10 text-sm font-bold text-link-color-hover"}>
                {status}
              </p>
            </div>
          )}

          <div className="flex gap-10 p-4 items-center">
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className="bg-link-color-hover transition-colors duration-200 ease-in-out hover:bg-blackish-color disabled:opacity-50 w-1/2 text-white p-2 rounded-lg"
            >
              {isLoading ? "Saving Employee..." : "Save Employee"}
            </button>
            <Link
              href="/admin/teams"
              className="bg-[#e4e4e4] w-1/2 text-black dark:text-white p-2 rounded-lg text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="fixed z-40 flex items-center justify-center flex-col bg-white shadow-md p-10 rounded-sm border border-gray-300 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CheckCircle color="green" fill="green" size={200} />
          <p className={`text-2xl font-bold ${bitter.className}`}>
            Employee successfully added!
          </p>
          <button
            onClick={() => setShowModal(!showModal)}
            className="absolute  z-50 top-4 right-4"
          >
            <X size={50} />
          </button>
        </div>
      )}
    </section>
  );
}
