import NewsItem from "@/components/NewsItem";
import React from "react";
import { getManyBlog } from "@/data/blogs";

export const Blog = async () => {
  const blogs = await getManyBlog();
  const posts = blogs.blogs;
  return (
    <section
      className={
        "grid   max-md:grid-cols-2 min-md:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-1 grid-cols-3 grid-rows-2 gap-x-20 gap-y-5"
      }
    >
      {" "}
      {posts.map((post) => (
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
