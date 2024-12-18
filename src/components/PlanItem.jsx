import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export const PlanItem = ({
  title,
  id,
  hideDot = false,
  description,
  image_url,
  price,
}) => {
  return (
    <div className={`flex max-sm:flex-col max-lg:item-start  gap-4 `}>
      <Image
        src={image_url}
        alt={title}
        width={100}
        className={"rounded-lg"}
        height={100}
      />
      <div className={""}>
        <div
          className={`flex max-sm:flex-col   max-sm:order-1  justify-between `}
        >
          <h1 className={`text-2xl mb-3 font-bold`}>{title}</h1>
        </div>
        <Link
          href={`/pricing/${id}`}
          className={
            "flex justify-start mt-4  text-black group hover:text-link-color-hover transition-colors duration-200 items-center gap-4 underline "
          }
        >
          Read More{" "}
          <BsArrowUpRight className="group-hover:rotate-45  group-hover:-translate-x-2 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};
