"use client";
import NewsItem from "@/components/NewsItem";
import React, { useEffect, useState } from "react";
import { getManyBlog } from "@/data/blogs";

export const Blog = () => {
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
  );
};
