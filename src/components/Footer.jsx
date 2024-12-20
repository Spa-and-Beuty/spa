"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { bitter } from "../../constants";
import { usePathname } from "next/navigation";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const usefulLinks = [
  { name: "Homepage", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Massage", href: "/services" },
  { name: "Oil Therapy", href: "/services" },
  { name: "Treatments", href: "/services" },
  { name: "Blogs", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Stone Spa", href: "/services" },
];

export const Footer = () => {
  const pathname = usePathname();
  const hide = pathname.split("/").includes("admin");
  const footerRef = useRef(null);

  useEffect(() => {
    // const ctx = gsap.context(() => {
    //   gsap.from(footerRef.current, {
    //     y: 100,
    //     opacity: 0,
    //     duration: 1,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: footerRef.current,
    //       start: "top bottom",
    //       end: "top 80%",
    //       scrub: 1,
    //     },
    //     repeat: false,
    //   });
    // }, footerRef);
    // return () => ctx.revert();
  }, []);

  if (hide) return null;

  return (
    <footer
      ref={footerRef}
      className="bg-secondary-color  lg:pl-10 text-blackish-color pt-16 pb-8 mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Useful Links Section */}
          <div>
            <h2 className={`${bitter.className} text-2xl font-bold mb-6`}>
              Useful Links
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {usefulLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-link-color-hover transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Logo and About Section */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/images/butt_log.png"
              alt="Rejuva Glow Beauty Logo"
              width={200}
              height={100}
              className="mb-4"
            />
            <p className="mt-3 max-w-md">
              Rejuva Glow Beauty is the best Spa therapy for achieving
              relaxation and balance.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          {/* Working Hours Section */}
          <div className="lg:text-right flex flex-col items-center">
            <h2 className={`${bitter.className} text-2xl font-bold mb-6`}>
              Working Hours
            </h2>
            <p className="mb-4">Monday to Sunday by schedule</p>
            <div className="relative w-60 border h-48 rounded-lg overflow-hidden">
              <Image
                src="/assets/images/expert.jpg"
                alt="Spa expert"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm  sm:text-left">
            &copy; {new Date().getFullYear()} Rejuva Glow Beauty. All Rights
            Reserved.
          </p>
          <div className="flex items-center justify-between gap-4">
            <Link
              href="#"
              className="text-sm hover:text-link-color-hover transition-colors duration-200"
            >
              Terms and Conditions
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link
              href="#"
              className="text-sm hover:text-link-color-hover transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
          <Button
            size="icon"
            variant="outline"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full hover:bg-link-color-hover hover:text-white transition-colors duration-200"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
