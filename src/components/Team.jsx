"use client";
import TestimonialCard from "./TestimonialCard";
import { getManyEmployees } from "@/data/employee";
import { useEffect, useState } from "react";
export const Team = ({ mt = true }) => {
  const [experts, setExperts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
    getEmployees();
  }, []);
  return (
    <section
      className={`container max-sm:grid-cols-1 max-sm:grid-rows-1 max-lg:grid-cols-2 max-lg:grid-rows-4  grid grid-rows-2 gap-10 grid-cols-4 ${mt && " mt-32"} max-lg:mt-20 max-sm:mt-10 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]`}
    >
      {experts.map(
        (expert) =>
          expert.employment_status === "Active" && (
            <TestimonialCard
              white={false}
              key={expert.id}
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
          )
      )}
    </section>
  );
};
