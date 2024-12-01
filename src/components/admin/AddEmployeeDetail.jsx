"use client";

import React, { useState } from "react";
import { CloudUpload, Delete } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
import TestimonialCard from "@/components/TestimonialCard";

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

  const handleImageUpload = (e) => {
    setError("");
    const file = e.target.files[0];

    if (
      !["image/jpeg", "image/png", "image/gif", "image/avif"].includes(
        file.type,
      )
    ) {
      setError("Only JPG, PNG, and GIF formats are allowed.");
      return;
    }

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setImage("");
    setImagePreview("");
  };

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    if (!image) {
      setError("Please upload a profile image.");
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

    // Simulate API submission
    try {
      // Replace with your API call
      // const response = await createEmployee(formData);
      console.log("Form submitted:", Object.fromEntries(formData.entries()));
    } catch (err) {
      setError("An error occurred while saving employee details.");
    } finally {
      setIsLoading(false);
    }
  }

  const isSubmitDisabled =
    !image || !fullName || !email || !employmentStatus || !role;

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
        {/*{imagePreview ? (*/}
        {/*  <Image*/}
        {/*    width={400}*/}
        {/*    height={400}*/}
        {/*    src={imagePreview}*/}
        {/*    alt="Employee Preview"*/}
        {/*    className="w-full h-[300px] rounded object-cover"*/}
        {/*  />*/}
        {/*) : (*/}
        {/*  <p className="my-4 text-hero text-sm text-color-body">*/}
        {/*    Please upload a profile image.*/}
        {/*  </p>*/}
        {/*)}*/}

        {/*{imagePreview && (*/}
        {/*  <button*/}
        {/*    type="button"*/}
        {/*    onClick={handleRemoveImage}*/}
        {/*    className="cursor-pointer text-red-500 mt-2"*/}
        {/*  >*/}
        {/*    Remove Image*/}
        {/*  </button>*/}
        {/*)}*/}

        <div>
          <h1 className="text-xl mt-4 text-[#313b5e]">{fullName}</h1>
          <p className="text-sm mt-3">{personalInfo}</p>
        </div>
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
          <div className="bg-white dark:bg-[#1e1e1e] p-4 mt-4 rounded shadow-md">
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
                onChange={(e) => setPersonalInfo(e.target.value)}
                className="border outline-none"
                placeholder="Short bio or description"
              ></textarea>
            </div>
          </div>

          {error && <div className="text-hero text-sm">{error}</div>}

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
    </section>
  );
}