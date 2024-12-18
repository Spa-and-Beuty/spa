import { getManyAppointments } from "@/data/appointment";
import { getManyMessages } from "@/data/contactMessage";
import { getManyEmployees } from "@/data/employee";
import { getManyServices } from "@/data/services";
import React from "react";
import ApexChart from "./ApexChart";
import StatusCard from "./StatusCard";

export default async function Chart() {
  const data = await getManyAppointments();

  const messages = await getManyMessages();

  const services = await getManyServices();

  const employees = await getManyEmployees();

  return (
    <div className=" lg:flex lg:flex-row md:flex-row items-start flex md:flex flex-col gap-4">
      <div className="lg:w-1/2 w-full text-[#5d7186] max-sm:justify-center md:w-1/2 flex gap-2 flex-wrap items-start">
        {" "}
        <StatusCard
          amount={data.length}
          title={"Total Appointments"}
          link={"admin/appointments"}
        />{" "}
        <StatusCard
          amount={employees.employees.length}
          title={"Total Employees"}
          link={"admin/teams"}
        />
        <StatusCard
          amount={services.length}
          title={"Total Services"}
          link={"admin/services"}
        />
        <StatusCard
          amount={messages.length}
          title={"Total Messages"}
          link={"#"}
        />
      </div>

      <ApexChart />
    </div>
  );
}
