import { AboutSlider } from "@/components/AboutSlider";
import AbouUsGrid from "@/components/AbouUsGrid";
import { FullScreenTestimonials } from "@/components/FullScreenTestimonials";
import { OurExperts } from "@/components/OurExperts";
import { PagesHero } from "@/components/PagesHero";
import { Portfolio } from "@/components/Portfolio";
import { Status } from "@/components/Status";
import Head from "next/head";

export async function generateMetadata({ params, searchParams }) {
  return {
    title: "About Us",
  };
}

export default function Home() {
  return (
    <>
      <PagesHero title={"About Us"} />

      <div className="mt-10  container mx-auto px-4 max-sm:mx-0 max-sm:px-0 xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[800px] max-lg:mx-4 sm:max-w-[450px] overflow-x-hidden">
        <AboutSlider />
        <AbouUsGrid />
        <Status />
      </div>

      <OurExperts />
      <FullScreenTestimonials />
      <Portfolio />
    </>
  );
}
