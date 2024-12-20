"use server";
import axios from "axios";
import fetcher from "@/data/fetcher";
import { cookies } from "next/headers";

const server_host =
  process.env.NODE_ENV === "production"
    ? "http://localhost:8000"
    : "http://localhost:8000";

export async function login(formData) {
  const cookieStore = await cookies();
  console.log(cookieStore);
  try {
    const res = await fetcher.post(`${server_host}/auth/login`, formData);
    const data = res.data;
    if (data.user && data.token) {
      // Set the token in the cookies
      cookieStore.set({
        name: "token",
        value: data.token,
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "strict",
        path: "/",
      });
    }
    console.log("data", data.user);
    return { user: data.user };
  } catch (error) {
    console.log({ error });
    const data = error.response?.data;
    return { error: data || "Unknown error" };
  }
}
