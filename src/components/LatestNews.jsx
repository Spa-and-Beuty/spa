import Image from "next/image";
import { bitter } from "../../constants";
import Link from "next/link";
import { BsArrowUpLeft } from "react-icons/bs";
import NewsItem from "./NewsItem";

import { getManyBlog } from "@/data/blogs";

export const LatestNews = async () => {
  const data = await getManyBlog();
  const posts = data.blogs;
  posts.length = 4; // Limit to 4 posts for demo purposes. You can remove this line in production.

  return (
    <section
      className={
        "flex lg:mx-20  max-lg:px-10 mt-20 flex-col items-center  container mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]"
      }
    >
      <span
        className={
          "px-8 uppercase text-sm  py-4 rounded-full bg-secondary-color"
        }
      >
        latest news
      </span>
      <h1
        className={`text-blackish-color my-3 mb-10 max-lg:text-4xl max-sm:text-4xl text-6xl font-semibold ${bitter.className}`}
      >
        Our Most Recent Posts
      </h1>
      <div
        className={
          "grid max-sm:grid-cols-1  max-sm:grid-rows-1 grid-cols-2  gap-x-20 gap-y-5"
        }
      >
        {" "}
        {posts.map((post) => (
          <NewsItem
            id={post.id}
            key={post.id}
            image={post.image}
            title={post.title}
            createdAt={post.createdAt}
            tag={post.tag}
            author={post.author}
          />
        ))}
      </div>
    </section>
  );
};
