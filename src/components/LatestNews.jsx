"use client";
import Image from "next/image";
import { bitter } from "../../constants";
import Link from "next/link";
import { BsArrowUpLeft } from "react-icons/bs";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import { getManyBlog } from "@/data/blogs";

export const LatestNews = () => {
  const [posts, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      const getBlog = async () => {
        const res = await getManyBlog();
        // console.log("Fetched Data", data);

        setData(res.blogs);
      };
      getBlog();
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }, []);
  // console.log("blogsss", posts);
  // const posts = [
  //   {
  //     id: 1,
  //     image: "/assets/images/blog-01.jpg",
  //     title: "Effects Of Australia Head Massage and Benefits",
  //     description: "",
  //     author: "admin",
  //     tag: "Body & Bath",
  //     createdAt: "13th june, 2024",
  //   },
  //   {
  //     id: 2,
  //     image: "/assets/images/blog-02.jpg",
  //     title: "Get The Health Benefits of Turkish Bathroom?",
  //     description: "",
  //     author: "admin",
  //     tag: "Make Up",
  //     createdAt: "13th june, 2024",
  //   },
  //   {
  //     id: 3,
  //     image: "/assets/images/blog-03.jpg",
  //     title: "How to Stop a Thumb Injury Before it Starts",
  //     description: "",
  //     author: "admin",
  //     tag: "Natural",
  //     createdAt: "13th june, 2024",
  //   },
  //   {
  //     id: 4,
  //     image: "/assets/images/blog-04.jpg",
  //     title: "How To Become A Spa Facialist And Duty In The UK.",
  //     description: "",
  //     author: "admin",
  //     tag: "Resort",
  //     createdAt: "13th june, 2024",
  //   },
  // ];
  return (
    <section
      className={
        "flex  max-lg:px-10 mt-20 flex-col items-center  container mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]"
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
          "grid max-sm:grid-cols-1 max-sm:grid-rows-1 grid-cols-2 grid-rows-2 gap-x-20 gap-y-5"
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
