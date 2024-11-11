import { PagesHero } from "@/components/PagesHero";
import Service from "@/components/Service";
import React from "react";

export default function page() {
  return (
    <div>
      <PagesHero title={"Service"} />
      <Service />
    </div>
  );
}
