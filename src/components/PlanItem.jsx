"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PlanItem({ title, id, image_url }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[16/9] w-full relative">
        <Image
          src={image_url}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h2 className="text-3xl font-bold mb-4 text-white tracking-tight transform transition-transform duration-300 group-hover:translate-y-[-10px]">
          {title}
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={`/pricing/${id}`}
            className="inline-flex items-center text-lg font-semibold text-white hover:text-secondary-color transition-colors duration-200"
          >
            Read More
            <ArrowUpRight className="ml-2 h-5 w-5 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
