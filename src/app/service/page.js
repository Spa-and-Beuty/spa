import { PagesHero } from "@/components/PagesHero";
import Service from "@/components/Service";

import ServiceCard from "@/components/ServiceCard";

import "react-loading-skeleton/dist/skeleton.css";
export default function Page() {
  return (
    <div>
      <PagesHero title={"Service"} />
      <Service />
    </div>
  );
}
