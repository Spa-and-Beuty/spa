import { SocialLinks } from "@/components/SocialLinks";
import { MapPin } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { bitter } from "../../constants";

export default function TopBar() {
  return (
    <div
      className={`flex ${bitter.className} h-full max-sm:hidden  bg-secondary-color px-6 font-medium py-1  justify-between`}
    >
      <div className={"flex items-center gap-4"}>
        <h1 className={"flex items-center gap-2"}>
          <span>
            <MapPin className={"text-link-color-hover"} />{" "}
          </span>{" "}
          6900 Wisconsin Ave, Bethesda MD 2081.5
        </h1>
        <h1 className={"flex items-center gap-2"}>
          <span>
            <MdEmail className={"text-link-color-hover"} />{" "}
          </span>{" "}
          jullian.murray0687@gmail.com
        </h1>
      </div>
      <SocialLinks className={"mt-0"} outline={false} size={15} />
    </div>
  );
}
