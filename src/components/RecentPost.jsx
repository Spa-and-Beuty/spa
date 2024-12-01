import React from "react";
import NewsItem from "./NewsItem";
import { posts } from "../../constants";
import Link from "next/link";
import Image from "next/image";
import { FlowerIcon } from "lucide-react";
import { getManyBlog } from "@/data/blogs";

export default async function RecentPost() {
  const data = await getManyBlog();
  const posts = data.blogs;
  posts.length = 4;
  return (
    <div className="border mb-10 f items-start p-4 rounded-3xl">
      <h1 className="flex text-xl font-semibold mb-3 gap-4">
        <FlowerIcon size={40} className="text-link-color-hover" />
        Recent Posts
      </h1>
      {posts.map((post) => (
        // eslint-disable-next-line react/jsx-key
        <div
          key={post.id}
          className={`w-full flex mb-4 p-2 border-b border-gray-200 gap-4 items-center `}
        >
          <div className={"relative w-[120px] h-[100px]  group"}>
            <Image
              src={post.image}
              alt={post.title}
              width={150}
              className={
                "rounded-3xl w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.0101]"
              }
              height={150}
            />
          </div>
          <div className={"p-5 flex-1"}>
            <Link
              href={`/blog/${post.id}`}
              className={
                " font-bold  hover:text-link-color-hover transition-colors duration-200"
              }
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
