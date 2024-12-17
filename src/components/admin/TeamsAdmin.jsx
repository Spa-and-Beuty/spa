"use client";
import { getManyEmployees, updateEmployee } from "@/data/employee";
import { IconTrash } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard";
import { useRouter } from "next/navigation";

export const TeamsAdmin = () => {
  const [experts, setExperts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();
  async function getEmployees() {
    try {
      const data = await getManyEmployees();
      setExperts(data.employees);
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    setIsLoading(true);

    getEmployees();
  }, []);
  async function terminateUser(id, data) {
    setDeleting(true);
    try {
      const status = await updateEmployee(id, data);
      if (!status.error) {
        await getEmployees();
      }
    } catch (e) {
      return e.message;
    } finally {
      setDeleting(false);
    }
  }
  return (
    <section
      className={`container max-sm:grid-cols-1 max-sm:grid-rows-1 max-lg:grid-cols-2 max-lg:grid-rows-4  grid grid-rows-2 gap-10 grid-cols-4  max-lg:mt-20 max-sm:mt-10 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]`}
    >
      {experts.map((expert) => (
        <div  key={expert.id} className={` relative`}>
          <TestimonialCard
            white={false}
            
            socialMedia={{
              instagram: "#",
              twitterX: "#",
              linkedIn: "#",
              facebook: "#",
            }}
            role={expert.role}
            full_name={expert.full_name}
            image_url={expert.image_url}
          />
          {expert.employment_status === "Terminated" ? (
            <button
              className="absolute right-4 top-4 text-sm rounded-full bg-red-500 text-white px-2 py-1"
              onClick={() =>
                terminateUser(expert.id, {
                  employment_status: "Active",
                })
              }
            >
              Hire
            </button>
          ) : (
            <button
              onClick={() =>
                terminateUser(expert.id, {
                  employment_status: "Terminated",
                })
              }
              disabled={deleting}
              title="Delete Employee"
              className={` ${deleting && "cursor-progress"} absolute right-4 top-4 `}
            >
              {deleting ? "..." : <IconTrash />}
            </button>
          )}
        </div>
      ))}
    </section>
  );
};
