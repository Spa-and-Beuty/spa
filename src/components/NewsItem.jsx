import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Suspense } from "react";
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
    <section>
      <article className={`${flex ? "flex" : "flex-col"}  max-lg:flex-col r`}>
        <div className={"relative   group"}>
          <div className={"mr-6"}>
            {" "}
            <Image
              src={image}
              alt={title}
              width={500}
              layout="full"
              priority
              className={
                " h-[220px] rounded-[30px] max-w-[270px]   transition-transform duration-700 ease-in-out group-hover:scale-[1.0101]"
              }
              height={500}
              quality={100}
            />
          </div>

          <span
            className={
              "absolute group-hover:bg-blackish-color group-hover:text-white  top-0 px-4 py-1 mt-4 ml-2 bg-white transition-colors duration-700 ease-in-out rounded-full text-link-color-hover text-sm"
            }
          >
            {tag}
          </span>
        </div>
        <div className={"p-5 flex-1"}>
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

          <Link
            href={`/blog/${id}`}
            className={
              "flex justify-start mt-4 group hover:text-link-color-hover transition-colors duration-200 items-center gap-4 underline "
            }
          >
            Read More{" "}
            <BsArrowUpRight className="group-hover:rotate-45  group-hover:-translate-x-2 transition-transform duration-200" />
          </Link>
        </div>
      </article>
    </section>
  );
}
