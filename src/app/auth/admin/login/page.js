import Login from "@/components/admin/Login";
import { cookies } from "next/headers";
export default async function Home() {
  const data = await cookies();
  const token = data.get("token");

  console.log(token);

  return (
    <>
      <Login />
    </>
  );
}
