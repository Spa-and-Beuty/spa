import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export default function NewsItem({
  flex = true,
  title,
  id,
  createdAt,
  author,
  image,
  tag,
}) {
  return (
    <div
      className={`${flex ? "flex" : "flex-col"} max-lg:flex-col gap-4 items-center justify-center`}
    >
      <div className={"relative flex-1  group"}>
        <Image
          src={image}
          alt={title}
          width={500}
          className={
            "rounded-3xl h-[300px] object-fit w-[500px] transition-transform duration-700 ease-in-out group-hover:scale-[1.0101]"
          }
          height={500}
        />
        <span
          className={
            "absolute group-hover:bg-blackish-color group-hover:text-white  top-0 px-4 py-1 mt-4 ml-2 bg-white transition-colors duration-700 ease-in-out rounded-full text-link-color-hover text-sm"
          }
        >
          {tag}
        </span>
      </div>
      <div className={"p-5"}>
        <p className={`text-lg uppercase text-darkish-color mb-3 font-bold`}>
          {createdAt} | {author}
        </p>
        <Link
          href={`/blog/${id}`}
          className={
            "text-2xl font-bold  hover:text-link-color-hover transition-colors duration-200"
          }
        >
          {title}
        </Link>

        <Link href={"#"} className={"flex mt-4 items-center gap-4 underline "}>
          Read More <BsArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
