"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { bitter } from "../../constants";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutExpert({ className = "" }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });

      gsap.from(contentRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div ref={imageRef} className="lg:w-1/2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/assets/images/expert.jpg"
                  alt="Adriene Murray, CEO and Founder of Rejuva Glow Beauty"
                  width={600}
                  height={400}
                  className="w-full  object-cover transition-transform duration-300 hover:scale-105"
                />
              </CardContent>
            </Card>
          </div>
          <div ref={contentRef} className="lg:w-1/2 space-y-6">
            <span className="inline-block px-4 py-2 bg-secondary-color text-blackish-color text-sm font-semibold rounded-full uppercase tracking-wider">
              About Us
            </span>
            <h2
              className={`${bitter.className} text-4xl font-bold text-blackish-color mb-4`}
            >
              Empowering Beauty Since 2009
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                As the CEO and Founder of Rejuva Glow Beauty, LLC, I, Adriene
                Murray, have been on a transformative journey in the world of
                beauty and skincare since 2009.
              </p>
              <p>
                My passion for skincare was born from personal struggles, which
                led me to dedicate my career to helping women regain their
                confidence through improved skin health.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span>Licensed cosmetologist since 2009</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span>Specializing in skincare and cosmetics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span>Committed to education and personalized care</span>
                </li>
              </ul>
            </div>
            <Button asChild className="mt-6">
              <Link href="/contact" className="inline-flex items-center">
                Contact Us
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
