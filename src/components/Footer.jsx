"use client";
import Link from "next/link";
import Image from "next/image";
import {
  BsArrowUp,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { bitter } from "../../constants";
import { usePathname } from "next/navigation";
import { SocialLinks } from "@/components/SocialLinks";

export const Footer = () => {
  const pathname = usePathname();
  const hide = pathname.split("/").includes("admin");
  return (
    <footer
      className={`${hide && "hidden"} bg-footer  mt-20 bg-secondary-color`}
    >
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-3  max-lg:grid-cols-2 max-sm:grid-cols-1  gap-12 lg:gap-0">
          {/* Useful Links Section */}
          <div className="pt-16">
            <h1 className={`font-bold mb-5 text-lg ${bitter.className}`}>
              Useful Links
            </h1>
            <div className="flex gap-10">
              <ul>
                <li className="pb-4">
                  <Link href="#">Homepage</Link>
                </li>
                <li className="pb-4">
                  <Link href="/shop">Shop</Link>
                </li>
                <li className="pb-4">
                  <Link href="/services">Massage</Link>
                </li>
                <li className="pb-4">
                  <Link href="/services">Oil Therapy</Link>
                </li>
              </ul>
              <ul>
                <li className="pb-4">
                  <Link href="/services">Treatments</Link>
                </li>
                <li className="pb-4">
                  <Link href="/blog">Blogs</Link>
                </li>
                <li className="pb-4">
                  <Link href="/faq">FAQ</Link>
                </li>
                <li className="pb-4">
                  <Link href="/services">Stone Spa</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo and About Section */}
          <div className="flex flex-col gap-5  items-center max-sm:items-center max-lg:items-start pt-10 justify-center  ">
            <Image
              src="/assets/images/butt_log.png"
              alt="logo"
              width={200}
              height={100}
            />
            <p className="mt-3 w-2/3">
              Peerly is the best Spa therapy for achieving relaxation and
              balance.
            </p>
            <SocialLinks />
          </div>

          {/* Working Hours Section */}
          <div className="pt-16 max-sm:place-self-center  place-self-end self-start text-left max-lg:text-left">
            <h1 className={`font-bold mb-5 text-lg ${bitter.className}`}>
              Working Hours
            </h1>
            <div className="flex  flex-col gap-10">
              <h1>Monday to Sunday by schedule</h1>
              <div>
                <Image
                  src={"/assets/images/expert.jpg"}
                  width={400}
                  height={400}
                  alt={"expert"}
                  className="w-[300px] h-[200px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "flex max-sm:flex-col max-sm:gap-4 max-sm:px-10 items-center mt-10 justify-between p-4 px-8 max-sm:rounded-lg rounded-full bg-white shadow-md"
          }
        >
          <p className={"text-center max-sm:order-1"}>
            &copy;Copyright 2024 Rejuva Glow Beauty All Rights Reserved
          </p>
          <Link
            href={"#"}
            className={
              "bg-link-color-hover  max-sm:order-1 text-white p-4 rounded-full hover:bg-blackish-color transition-all duration-200"
            }
          >
            <BsArrowUp size={30} />
          </Link>
          <div
            className={"flex max-sm:gap-2 max-sm:flex-col items-center gap-5"}
          >
            <Link href={"#"}>Terms and conditions</Link>
            <span className={"max-sm:hidden"}>|</span>
            <Link href={"#"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
