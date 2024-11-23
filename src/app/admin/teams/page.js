import { Team } from "@/components/Team";
import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function page() {
  return (
    <div className="container mx-auto p-10">
      <div className="flex mb-10 items-center justify-between">
        <h4 className="card-title">Employees</h4>
        <div className="flex item gap-2">
          <Link
            href="/admin/addEmployee"
            className="text-sm p-2 hover:bg-blackish-color    text-white rounded  bg-link-color-hover transition-all duration-200 ease-in-out"
          >
            <button>+ Add Employee</button>
          </Link>
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
