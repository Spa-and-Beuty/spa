"use client";
import { ChevronDown, DeleteIcon, Edit, EyeIcon } from "lucide-react";
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
import AddPricing from "@/components/admin/AddPricing";
import { deletePrice, getManyPriceing } from "@/data/pricing";
import EditPricing from "./EditPricing";

export default function Pricing() {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    // Simulate fetching pricing data
    async function fetchPricing() {
      const res = await getManyPriceing();
      setPricing(res);
    }
    fetchPricing();
  }, []);

  async function deletePriceing(id) {
    try {
      const res = await deletePrice(id);
      if (res.data) {
        const res = await getManyPriceing();
        setPricing(res);
      }
    } catch (e) {
      return e;
    }
  }

  return (
    <div className="p-4 lg:p-6 mb-3 w-full rounded bg-white dark:bg-[#1E1E1E]">
      <div className="flex flex-col lg:flex-row dark:bg-[#1E1E1E] px-2 py-4 items-center justify-between mb-4">
        <h4 className="card-title text-center lg:text-left text-lg lg:text-xl font-semibold">
          Recent Pricing Plans
        </h4>
        <div className="flex items-center gap-2 mt-4 lg:mt-0">
          <Dialog>
            <DialogTrigger
              className={
                "text-sm p-2 text-white rounded bg-link-color-hover transition-all duration-200 ease-in-out hover:bg-blackish-color"
              }
            >
              + Add Pricing
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Pricing</DialogTitle>
                <DialogDescription className={"w-full"}>
                  <AddPricing />
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
              <th className="p-4 text-left">Plan</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((plan) => (
              <tr
                key={plan.id}
                className="border-b bg-white dark:bg-inherit dark:bg-opacity-5"
              >
                <td className="flex items-center gap-2 p-4">
                  <Image
                    src={plan.image}
                    width={50}
                    height={50}
                    className="w-10 h-10 object-cover rounded shadow"
                    alt={plan.title}
                  />
                  <span>
                    <h1 className="font-medium">{plan.title}</h1>
                  </span>
                </td>
                <td className="text-[#8686a7] p-4">${plan.price}</td>
                <td className="p-4">{plan.description}</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <botton className="p-1 bg-[#8686a7] rounded">
                      <EyeIcon color="white" />
                    </botton>
                    <Dialog>
                      <DialogTrigger className="p-1 rounded group hover:bg-[#ff6c2f] transition-colors duration-200 bg-[#ff3d5430]">
                        <Edit className="text-[#ff6c2f] group-hover:text-white" />
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Service</DialogTitle>
                          <DialogDescription className={"w-full"}>
                            <EditPricing id={plan.id} plan={plan} />
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    <button
                      onClick={() => deletePriceing(plan.id)}
                      className="p-1 rounded group hover:bg-hero transition-colors duration-200 bg-[#ff3d5430]"
                    >
                      <DeleteIcon className="text-hero group-hover:text-white" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}
