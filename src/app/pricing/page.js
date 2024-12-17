import { OurPlan } from "@/components/OurPlan";
import React from "react";
export const dynamic = "force-dynamic";
export default function Page() {
  return (
    <div>
      <OurPlan hideDot={true} />
    </div>
  );
}
