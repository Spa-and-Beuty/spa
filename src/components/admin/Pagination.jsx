import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

export default function Pagination() {
  return (
    <div className="p-4 bg-white rounded border-t">
      <div className="flex items-center justify-between">
        <div className="">
          <div className="flex gap-2">
            Showing
            <span className="fw-semibold">5</span>
            of
            <span className="fw-semibold">90,521</span>
            orders
          </div>
        </div>

        <div className="px-4">
          <div className="flex text-sm border rounded-3xl">
            <button className="w-8  hover:text-white  rounded-l-full flex items-center border-inherit hover:bg-[#ff3d5430] transition-all duration-200 justify-center h-9">
              <ArrowLeft size={15} />
            </button>
            <button className="w-8  hover:text-white flex items-center   bg-[#ff3d5430] justify-center border-l h-9">
              1
            </button>
            <button className="w-8  hover:text-white flex items-center hover:bg-[#ff3d5430] transition-all duration-200 justify-center border-l h-9">
              2
            </button>
            <button className="w-8 hover:text-white  flex items-center hover:bg-[#ff3d5430] transition-all duration-200 justify-center border-l h-9">
              3
            </button>
            <button className="w-8 flex hover:text-white  rounded-r-full items-center hover:bg-[#ff3d5430] transition-all duration-200 justify-center border-l h-9">
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
