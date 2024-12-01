"use client";
import Pagination from "@/components/admin/Pagination";
// import { appointments } from "../../../constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getManyAppointments } from "@/data/appointment";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    async function getAllAppointments() {
      try {
        const data = await getManyAppointments();
        setAppointments(data);
      } catch (e) {
        console.error(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getAllAppointments();
  }, []);

  return (
    <div className="col w-full  my-8">
      <div className="card">
        <div className="p-6 mb-3 rounded bg-white dark:bg-[#1E1E1E]">
          <div className="flex items-center justify-between">
            <h4 className="card-title">Recent Appointments</h4>
          </div>
        </div>

        {/* Enable horizontal scrolling */}
        <div className="overflow-x-auto w-full">
          <table className="table text-sm w-full min-w-[1000px] mb-0">
            <thead className="bg-light dark:bg-[#1E1E1E] text-[#5d7186] text-sm ">
              <tr className="p-2 w-full">
                <th className="p-2  text-left">ID.</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Service</th>
                <th className="p-2 text-left">Full Name</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Message</th>

                <th className="p-2 text-left">Payment Status</th>
                <th className="p-2 text-left">Appointment Status</th>
              </tr>
            </thead>

            <tbody className="text-[#8686a7]">
              {appointments
                ? appointments.map((appointment) => (
                    <tr
                      key={appointment.id}
                      className="border-b border-inherit bg-white dark:bg-[#1E1E1E]"
                    >
                      <td className="px-2 py-3.5">
                        <Link href={`/admin/appointments/${appointment.id}`}>
                          {appointment.id}
                        </Link>
                      </td>
                      <td className="px-2 py-3.5">
                        {new Date(appointment.created_at).getFullYear()}{" "}
                        {new Date(appointment.created_at).toLocaleString(
                          "default",
                          {
                            month: "long",
                          },
                        )}{" "}
                        {new Date(appointment.created_at).getDate()}{" "}
                      </td>
                      <td className="px-2 py-3.5">{appointment.service}</td>
                      <td className="px-2 py-3.5">{appointment.full_name}</td>

                      <td className="px-2 py-3.5">{appointment.email}</td>
                      <td className="px-2 py-3.5">{appointment.message}</td>
                      <td className="px-2 py-3.5">
                        {appointment.payment_status}
                      </td>
                      <td className="px-2 py-3.5">
                        {appointment.appointment_status}
                      </td>
                    </tr>
                  ))
                : "No Appointments"}
            </tbody>
          </table>
        </div>

        <Pagination amount={appointments.length} />
      </div>
    </div>
  );
}
