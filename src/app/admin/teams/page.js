import { Team } from "@/components/Team";
import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddService from "@/components/AddService";
import AddEmployeeDetail from "@/components/admin/AddEmployeeDetail";

export default function page() {
  return (
    <div className="container mx-auto p-10">
      <div className="flex mb-10 items-center justify-between">
        <h4 className="card-title">Employees</h4>
        <div className="flex item gap-2">
          <Dialog>
            <DialogTrigger
              className={
                " text-sm p-2 text-white rounded bg-link-color-hover transition-all duration-200 ease-in-out hover:bg-blackish-color"
              }
            >
              + Add Employee
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Employee</DialogTitle>
                <DialogDescription className={"w-full"}>
                  <AddEmployeeDetail />
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
      <Team mt={false} />
    </div>
  );
}
