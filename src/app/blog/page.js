import Categories from "@/components/Categories";
import NewsItem from "@/components/NewsItem";
import { PagesHero } from "@/components/PagesHero";
import React from "react";

export default function page() {
  const posts = [
    {
      id: 1,
      image: "/assets/images/blog-01.jpg",
      title: "Effects Of Australia Head Massage and Benefits",
      description: "",
      author: "admin",
      tag: "Body & Bath",
      createdAt: "13th june, 2024",
    },
    {
      id: 2,
      image: "/assets/images/blog-02.jpg",
      title: "Get The Health Benefits of Turkish Bathroom?",
      description: "",
      author: "admin",
      tag: "Make Up",
      createdAt: "13th june, 2024",
    },
    {
      id: 3,
      image: "/assets/images/blog-03.jpg",
      title: "How to Stop a Thumb Injury Before it Starts",
      description: "",
      author: "admin",
      tag: "Natural",
      createdAt: "13th june, 2024",
    },
    {
      id: 4,
      image: "/assets/images/blog-04.jpg",
      title: "How To Become A Spa Facialist And Duty In The UK.",
      description: "",
      author: "admin",
      tag: "Resort",
      createdAt: "13th june, 2024",
    },
    {
      id: 5,
      image: "/assets/images/blog-01.jpg",
      title: "Effects Of Australia Head Massage and Benefits",
      description: "",
      author: "admin",
      tag: "Body & Bath",
      createdAt: "13th june, 2024",
    },
    {
      id: 6,
      image: "/assets/images/blog-02.jpg",
      title: "Get The Health Benefits of Turkish Bathroom?",
      description: "",
      author: "admin",
      tag: "Make Up",
      createdAt: "13th june, 2024",
    },
    {
      id: 7,
      image: "/assets/images/blog-03.jpg",
      title: "How to Stop a Thumb Injury Before it Starts",
      description: "",
      author: "admin",
      tag: "Natural",
      createdAt: "13th june, 2024",
    },
    {
      id: 8,
      image: "/assets/images/blog-04.jpg",
      title: "How To Become A Spa Facialist And Duty In The UK.",
      description: "",
      author: "admin",
      tag: "Resort",
      createdAt: "13th june, 2024",
    },
  ];
  return (
    <main>
      <PagesHero title={"Blog"} />

      <div className="flex max-md:flex-col mx-20 mt-20 items-start gap-10">
        <Categories />
        <section
          className={
            "grid w-4/5  max-md:grid-cols-2 min-md:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-1 grid-cols-3 grid-rows-2 gap-x-20 gap-y-5"
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
      </div>
    </main>
  );
}
