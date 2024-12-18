"use client";
import {
  AlignVerticalDistributeCenter,
  BoxesIcon,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs";
import {
  RiAlignItemVerticalCenterFill,
  RiBox1Line,
  RiCloseLine,
  RiDashboard2Fill,
  RiGroup2Fill,
  RiOrderPlayFill,
  RiProductHuntFill,
  RiSecurePaymentFill,
  RiSettings2Fill,
} from "react-icons/ri";
// import Logo from "../Logo";
import { usePathname, useRouter } from "next/navigation";
import { FaBlog, FaBook, FaServicestack } from "react-icons/fa";
import { Logo } from "@/components/Logo";
import { FaMessage, FaPerson } from "react-icons/fa6";
import { BiMoney } from "react-icons/bi";
import { SidebarBody, SidebarLink, Sidebar } from "@/components/ui/sidebar";
import {
  IconLogout,
  IconDashboard,
  IconCategory,
  IconNews,
  IconMan,
  IconMessage,
  IconServicemark,
  IconMoneybag,
  IconSettings,
} from "@tabler/icons-react";
import Image from "next/image";
import { logout } from "@/data/logout";

export default function SideBar({ show, setShow }) {
  const [shrink, setShrink] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  // New state for hover
  const pathname = usePathname();
  async function handleLogout() {
    try {
      const res = await logout();
      if (!res.error) {
        router.push("/");
      }
    } catch (e) {
      return { error: e };
    }
  }

  const sideBarLinks = [
    {
      icon: (
        <IconDashboard className="text-neutral-200 h-7 w-7 flex-shrink-0" />
      ),
      label: "Dashboard",
      href: "/admin",
    },
    {
      icon: <IconCategory className="text-neutral-200 h-7 w-7 flex-shrink-0" />,
      label: "Products",
      href: "/products",
    },
    {
      icon: <IconNews className="text-neutral-200 h-7 w-7 flex-shrink-0" />,
      label: "Blogs",
      href: "/admin/blogs",
    },
    {
      icon: <IconMan className="text-neutral-200 h-7 w-7 flex-shrink-0" />,
      label: "Teams",
      href: "/admin/teams",
    },
    {
      icon: <IconMessage className="text-neutral-200 h-7 w-7 flex-shrink-0" />,
      label: "Messages",
      href: "/admin/messages",
    },
    {
      icon: (
        <IconServicemark className="text-neutral-200 h-7 w-7 flex-shrink-0" />
      ),
      label: "Services",
      href: "/admin/services",
    },

    {
      icon: <IconMoneybag className="text-neutral-200 h-7 w-7 flex-shrink-0" />,
      label: "Pricing",
      href: "/admin/pricing",
    },
    {
      icon: <IconSettings className="text-neutral-200 h-7 w-7 flex-shrink-0" />,
      label: "Settings",
      href: "#",
    },
  ];

  return (
    <Sidebar open={open} setOpen={setOpen} animate={true}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <>
            <Logo open={open} />
          </>
          <div className="mt-8 flex flex-col gap-2">
            {sideBarLinks.map((link, idx) => (
              <SidebarLink
                className={`${pathname.split("/").includes(link.label.toLowerCase()) && open ? "bg-link-color-hover p-4 text-blackish-color rounded-full" : "text-white"}`}
                key={idx}
                link={link}
              />
            ))}
            <form onSubmit={handleLogout}>
              <button type={"submit"}>
                <SidebarLink
                  link={{
                    label: "Logout",
                    href: "#",
                    icon: (
                      <IconLogout className="text-neutral-200 h-7 w-7 flex-shrink-0" />
                    ),
                  }}
                />
              </button>
            </form>
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Spaville",
              href: "#",
              icon: (
                <Image
                  src={"/assets/images/new_logo.jpg"}
                  className="h-7 w-7 flex-shrink-0 rounded-full"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
