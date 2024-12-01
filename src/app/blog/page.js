"use client";
import Categories from "@/components/Categories";
import NewsItem from "@/components/NewsItem";
import { PagesHero } from "@/components/PagesHero";
import React, { useEffect, useState } from "react";
import { getManyBlog } from "@/data/blogs";

export default function Page() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getBlogs() {
      try {
        const data = await getManyBlog();
        setBlogs(data.blogs);
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getBlogs();
  }, []);
  return (
    <main>
      <PagesHero title={"Blogs"} />
      <div className="flex max-md:flex-col mx-20 mt-20 items-start gap-10">
        <Categories />
        <section
          className={
            "grid   max-md:grid-cols-2 min-md:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-1 grid-cols-3 grid-rows-2 gap-x-20 gap-y-5"
          }
        >
          {" "}
          {blogs.map((post) => (
            <NewsItem
              flex={false}
              key={post.id}
              id={post.id}
              image={post.image}
              title={post.title}
              createdAt={post.createdAt}
              tag={post.tag}
              author={post.author}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
