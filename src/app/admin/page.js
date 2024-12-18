import React from "react";

import Loading from "@/app/loading";

import Services from "@/components/admin/Services";
import Appointments from "@/components/admin/Appointments";
import Chart from "@/components/admin/Chart";
export const dynamic = "force-dynamic";
export default function Page() {
  // const router = useRouter();

  return (
    <div className="p-10 w-full">
      <Chart />

      <Services />

      <Appointments />
    </div>
  );
}
