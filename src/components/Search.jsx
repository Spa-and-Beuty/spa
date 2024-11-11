import { Flower } from "lucide-react";
import React from "react";
import { bitter } from "../../constants";
import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="rounded-2xl bg-link-color-hover p-6 text-white">
      <h1
        className={`${bitter.className} font-semibold flex items-center gap-2 mb-6 text-2xl`}
      >
        <Flower size={40} />
        Search
      </h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-full w-full px-6 py-3 outline-none active:outline-none"
        />
        <label className="absolute right-0 top-1/2 -translate-y-1/2">
          <SearchIcon />
        </label>
      </div>
    </div>
  );
}
