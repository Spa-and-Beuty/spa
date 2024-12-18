import ChangePassword from "@/components/admin/ChangePassword";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import React from "react";

export default async function Home() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("token")?.value;
  const authUser = accessToken ? jwtDecode(accessToken) : null;

  return (
    <ChangePassword
      id={authUser.userId}
      role={authUser.role}
      prevEmail={authUser.email}
    />
  );
}
