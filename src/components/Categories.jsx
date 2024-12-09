import React from "react";
import { bitter } from "../../constants";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import Search from "./Search";
import { getManyBlog } from "@/data/blogs";

export default async function Categories({ searchParam }) {
  const tag = await searchParam;
  console.log("tag", searchParam);
  const data = await getManyBlog();
  const posts = data.blogs;
  const filteredCategories = posts.map((post) => post.tag);
  const categories = new Set(filteredCategories);
  console.log("categories", categories);

  // const categories = [
  //   {
  //     id: 1,
  //     title: "Body & Bath",
  //     tags: ["body_bath"],
  //     products: [],
  //     slug: "#",
  //   },
  //   {
  //     id: 2,
  //     title: "Make Up",
  //     tag: ["make up"],
  //     products: [],
  //     slug: "#",
  //   },
  //   {
  //     id: 3,
  //     title: "Resort",
  //     tag: ["resort"],
  //     products: [],
  //     slug: "#",
  //   },
  //   {
  //     id: 4,
  //     title: "Stylist",
  //     tag: ["stylist"],
  //     products: [],
  //     slug: "#",
  //   },
  //   {
  //     id: 5,
  //     title: "Natural",
  //     tag: ["natural"],
  //     products: [],
  //     slug: "#",
  //   },
  //   {
  //     id: 6,
  //     title: "Technician",
  //     tag: ["technician"],
  //     products: [],
  //     slug: "#",
  //   },
  //   {
  //     id: 7,
  //     title: "Thermal Spring",
  //     tag: ["thermal spring"],
  //     products: [],
  //     slug: "#",
  //   },
  // ];

  return (
    <section className="w-1/4 ">
      <Search />
      <div className={`${bitter.className} p-6 mt-4  rounded-xl border`}>
        <h1 className={`font-semibold mb-4 text-3xl flex items-center gap-4`}>
          <BiCategory size={40} className="text-link-color-hover" />
          Categories
        </h1>
        <ul className="flex list-disc flex-col">
          {posts.map((category) => (
            <li
              key={category.id}
              className="flex uppercase text-blackish-color text-sm py-4 border-b border-gray-200 items-center justify-between"
            >
              <Link
                className="hover:text-link-color-hover hover:scale-[1.01] transition-all duration-300"
                href={`?tag=${category.tag}`}
              >
                {category.tag}
              </Link>
              <span className="text-sm text-darkish-color">{`(${posts.length})`}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
