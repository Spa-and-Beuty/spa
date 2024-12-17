import localFont from "next/font/local";
import "./globals.css";
import { Mulish } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import TopBar from "@/components/TopBar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Spaville",
  description: "Helps you to reach the best of version of yourself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={"scroll-smooth"}>
      <body className={`${mulish.className}`}>
        <TopBar />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
