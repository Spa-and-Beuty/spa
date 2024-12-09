"use client";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <MoveLeft />
    </button>
  );
}
