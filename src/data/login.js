"use server";
import axios from "axios";
import fetcher from "@/data/fetcher";
import { cookies } from "next/headers";

export async function login(formData) {
  const server_host = "http://localhost:8000";
  const cookieStore = await cookies();
  console.log(cookieStore);
  try {
    const res = await fetcher.post("/auth/login", formData);
    const data = res.data;
    if (data.user && data.token) {
      cookieStore.set({
        name: "token",
        value: data.token,
        secure: process.env.NODE_ENV === "production",
      });
    }
    console.log("data", data.user);
    return { user: data.user };
  } catch (error) {
    // console.log({ error });
    const data = error.response?.data;
    return { error: data || "Unknow error" };
  }
}
