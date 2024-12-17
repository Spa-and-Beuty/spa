"use client";
import ApexChart from "@/components/admin/ApexChart";
import StatusCard from "@/components/admin/StatusCard";
import React, { Suspense, useEffect, useState } from "react";

import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import { getManyAppointments } from "@/data/appointment";
import { getManyMessages } from "@/data/contactMessage";
import { getManyServices } from "@/data/services";
import { getManyEmployees } from "@/data/employee";

import Services from "@/components/admin/Services";
import Appointments from "@/components/admin/Appointments";
export const dynamic = "force-dynamic";
export default function Page() {
  // const router = useRouter();

  const [appointments, setAppointments] = useState([]);
  const [messages, setMessage] = useState([]);
  const [services, setService] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getManyAppointments();
      setAppointments(data);
      const messages = await getManyMessages();
      setMessage(messages);
      const services = await getManyServices();
      setService(services);
      const employees = await getManyEmployees();
      setEmployees(employees.employees);
    }
    getData();
  }, []);

  return (
    <div className="p-10 w-full">
      <div className=" lg:flex lg:flex-row md:flex-row items-start flex md:flex flex-col gap-4">
        <div className="lg:w-1/2 w-full text-[#5d7186] max-sm:justify-center md:w-1/2 flex gap-2 flex-wrap items-start">
          <Suspense fallback={<Loading />}>
            {" "}
            <StatusCard
              amount={appointments.length}
              title={"Total Appointments"}
              link={"admin/appointments"}
            />
          </Suspense>
          <Suspense fallback={<Loading />}>
            {" "}
            <StatusCard
              amount={employees.length}
              title={"Total Employees"}
              link={"admin/teams"}
            />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <StatusCard
              amount={services.length}
              title={"Total Services"}
              link={"admin/services"}
            />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <StatusCard
              amount={messages.length}
              title={"Total Messages"}
              link={"#"}
            />
          </Suspense>
        </div>
        <Suspense fallback={<Loading />}>
          <ApexChart />
        </Suspense>
      </div>

      <Suspense fallback={<Loading />}>
        <Services />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Appointments />
      </Suspense>
    </div>
  );
}
