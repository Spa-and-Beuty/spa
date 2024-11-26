import AddBlog from "@/components/admin/AddBlog";
// import { getManyBlogCategories } from "@/data/blogCategories";
// import { getManyCategories } from "@/data/blogCategories";
import React from "react";
import { Blogs } from "@/components/admin/Blogs";

export default async function page() {
  // const category = getManyBlogCategories();
  const categories = [];
  console.log(categories);
  return (
    <div>
      {/*<AddBlog categories={categories} />*/}
      <Blogs />
    </div>
  );
}
