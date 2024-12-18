"use server";
import { cookies } from "next/headers";

export async function logout() {
  const cookieStore = await cookies();
  const authUser = cookieStore.get("token");
  try {
    cookieStore.delete("token");

    return { message: "Logout successful" };
  } catch (error) {
    return { error: "Failed to logout", error };
  }
}
