import Image from "next/image";
import { bitter } from "../../constants";

export const Logo = ({ open }) => {
  return (
    <div className={"flex items-center justify-center gap-4"}>
      <h1
        className={`${bitter.className} text-center text-lg font-bold uppercase text-white`}
      >
        {!open ? (
          <Image
            src={"/assets/images/butt_log.png"}
            alt={"logo"}
            width={200}
            height={200}
            priority={100}
          />
        ) : (
          "Admin"
        )}
      </h1>
    </div>
  );
};
