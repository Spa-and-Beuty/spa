import Image from "next/image";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { OurServices } from "@/components/OurServices";
import { BannerScroll } from "@/components/BannerScroll";
// import { OurPlan } from "@/components/OurPlan";
import { Appointment } from "@/components/Appointment";
import { Testimonials } from "@/components/Testimonials";
import { Status } from "@/components/Status";
import { TryOurOil } from "@/components/TryOurOil";
import { LatestNews } from "@/components/LatestNews";
import { Footer } from "@/components/Footer";
import TopBar from "@/components/TopBar";
import OurPlan from "@/components/OurPlan";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);
export const dynamic = "force-dynamic";
export default function home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <BannerScroll />
      <OurPlan home={true} />
      <Appointment />
      <Testimonials />
      <Status />
      <TryOurOil />
      <LatestNews />
    </>
  );
}
