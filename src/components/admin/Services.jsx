"use client";
import { ChevronDown, DeleteIcon, Edit, EyeIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddService from "@/components/AddService";
import { getManyServices, deleteService } from "@/data/services";
import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic";
export default function Services() {
  // const services = await getManyServices();
  const [services, setServices] = useState([]);
  const router = useRouter();
  // const [products, setProductList] = useState([]);
  useEffect(() => {
    async function getServices() {
      const data = await getManyServices();
      setServices(data);
    }
    getServices();
  }, []);

  async function handleDeleteService(id) {
    const confirm = window.confirm(
      "Are you sure you want to delete this service?",
    );
    if (confirm) {
      try {
        const data = await deleteService(id);
      } catch (err) {
        console.log(err);
      }
    }
    router.push("/admin/services");
  }

  return (
    <div className="p-4 lg:p-6 mb-3 w-full rounded bg-white dark:bg-[#1E1E1E]">
      <div className="flex flex-col lg:flex-row dark:bg-[#1E1E1E] px-2 py-4 items-center justify-between mb-4">
        <h4 className="card-title text-center  lg:text-left text-lg lg:text-xl font-semibold">
          Recent Services
        </h4>
        <div className="flex items-center gap-2 mt-4 lg:mt-0">
          <Dialog>
            <DialogTrigger
              className={
                " text-sm p-2 text-white rounded bg-link-color-hover transition-all duration-200 ease-in-out hover:bg-blackish-color"
              }
            >
              + Add Service
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Service</DialogTitle>
                <DialogDescription className={"w-full"}>
                  <AddService />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <div className="relative">
            <button className="p-2 rounded bg-gray-200 flex items-center gap-1 text-sm">
              File <ChevronDown size={15} />
            </button>
          </div>
        </div>
      </div>
      {/* Enable horizontal scrolling */}
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-[1000px] text-sm lg:text-base">
          <thead>
            <tr className="border-b bg-white dark:bg-inherit dark:text-white text-[#5d7186]">
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Description</th>
              {/*<th className="p-4 text-left">Category</th>*/}
              {/*<th className="p-4 text-left">Rating</th>*/}
              {/*<th className="p-4 text-left">Action</th>*/}
            </tr>
          </thead>
          <tbody>
            {services
              ? services.map((service, index) => (
                  <tr
                    key={service.id}
                    className="border-b bg-white dark:bg-inherit dark:bg-opacity-5"
                  >
                    <td className="flex items-center gap-2 p-4">
                      <Image
                        src={service?.imageUrl}
                        width={50}
                        height={50}
                        className="w-10 h-10 object-cover rounded shadow"
                        alt={service?.title}
                      />
                      <span>
                        <h1 className="font-medium">{service?.title}</h1>
                      </span>
                    </td>

                    <td className="text-[#8686a7] p-4">{service?.tag}</td>

                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Link href={"#"} className="p-1 bg-[#8686a7] rounded">
                          <EyeIcon color="white" />
                        </Link>
                        <Link
                          href={"#"}
                          className="p-1 rounded group hover:bg-[#ff6c2f] transition-colors duration-200 bg-[#ff3d5430]"
                        >
                          <Edit className="text-[#ff6c2f] group-hover:text-white" />
                        </Link>
                        <Link
                          href={"#"}
                          className="p-1 rounded group hover:bg-hero transition-colors duration-200
                          bg-[#ff3d5430]"
                        >
                          <DeleteIcon
                            onClick={() => handleDeleteService(service.id)}
                            className="text-hero group-hover:text-white"
                          />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              : "No Services"}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}
