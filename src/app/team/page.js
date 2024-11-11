import { PagesHero } from "@/components/PagesHero";
import { Team } from "@/components/Team";
import React from "react";

export default function page() {
  return (
    <div>
      <PagesHero title={"Team"} />
      <Team />
    </div>
  );
}
