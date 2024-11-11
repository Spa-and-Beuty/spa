import Image from "next/image";
import Link from "next/link";
import { bitter } from "../../constants";

export const PortfolioCard = ({ service }) => {
  return (
    <div className={" rounded-3xl bg-white group relative"}>
      <Image
        src={service.image_url}
        alt={service.title}
        width={500}
        height={500}
        className={
          "w-full hover:scale-[0.99] transition-transform duration-300 rounded-3xl h-full"
        }
      />
      <Link
        href={service.tag}
        className={
          "w-4/5 m-10 transtion-all duration-700 group-hover:translate-y-0 rounded-3xl translate-y-96  px-5 py-10 items-center absolute bottom-0 bg-white px justify-between"
        }
      >
        <span className="text-sm uppercase text-link-color-hover">
          {service.tag}
        </span>
        <h1 className={`text-2xl font-semibold ${bitter.className}`}>
          {service.title}
        </h1>
      </Link>
    </div>
  );
};
