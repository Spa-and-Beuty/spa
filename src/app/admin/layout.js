import AdminHeader from "@/components/admin/AdminHeader";
import Dashboard from "@/components/admin/Dashboard";
import SideBar from "@/components/admin/SideBar";
import Logo from "@/components/Logo";
// import ThemeToggle from "@/components/ThemeToggle";
import { Search, Settings, TimerIcon } from "lucide-react";
import { Play } from "next/font/google";
import Link from "next/link";
import React from "react";
import { BsBoxArrowDownRight, BsBoxArrowRight } from "react-icons/bs";
import { RiNotification2Fill } from "react-icons/ri";
const play = Play({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Admin | Abrelo HD",
  description: "Admin Page",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ overflow: "hidden" }} className={play.className}>
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  );
}
