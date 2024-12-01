import dynamic from "next/dynamic";
import Appointments from "@/components/admin/Appointments";
// import { Appointments } from "@/components/admin/Appointments";
const DynamicAppointments = dynamic(
  () => import("@/components/admin/Appointments"),
);
export default function Home() {
  return (
    <>
      <Appointments />
    </>
  );
}
