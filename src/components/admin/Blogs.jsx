"use client";
import Pagination from "@/components/admin/Pagination";
import Link from "next/link";
import { ChevronDown, DeleteIcon, Edit, EyeIcon } from "lucide-react";
import React, { Suspense, useEffect, useState, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { deleteBlog, getManyBlog } from "@/data/blogs";
import Image from "next/image";
import dynamic from "next/dynamic";
import AddBlog from "@/components/admin/AddBlog";
import { useRouter } from "next/navigation";
import { deleteProduct } from "@/data/products";
import EditBlog from "./EditBlog";
// const AddBlog = dynamic(() => import("@/components/admin/AddBlog"), {
//   ssr: false,
// });
export default function Blogs({ blogs }) {
  // const [blogs, setBlogs] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  //
  // useEffect(() => {
  //   setIsLoading(true);
  //   async function getBlogs() {
  //     try {
  //       const alldata = await getManyBlog();
  //       setBlogs(alldata.blogs);
  //     } catch (e) {
  //       console.log(e.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getBlogs();
  // }, []);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  async function handleDelete(id) {
    setIsFetching(true);
    // Mutate external data source
    await deleteBlog(id);
    setIsFetching(false);

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }
  return (
    <div className="col w-full my-8">
      <div className="card">
        <div className="flex flex-col lg:flex-row dark:bg-[#1E1E1E] px-2 py-4 items-center justify-between mb-4">
          <h4 className="card-title text-center  lg:text-left text-lg lg:text-xl font-semibold">
            Recent Blogs
          </h4>
          <div className="flex items-center gap-2 mt-4 lg:mt-0">
            <Dialog>
              <DialogTrigger
                className={
                  " text-sm p-2 text-white rounded bg-link-color-hover transition-all duration-200 ease-in-out hover:bg-blackish-color"
                }
              >
                + Add Blog
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Blog</DialogTitle>
                  <DialogDescription className={"w-full"}>
                    <AddBlog />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/*<Link*/}
            {/*  href="/admin/blogs/addBlog"*/}
            {/*  className="text-sm p-2 text-white rounded bg-link-color-hover transition-all duration-200 ease-in-out hover:bg-blackish-color"*/}
            {/*>*/}
            {/*  <button>+ Add Blog</button>*/}
            {/*</Link>*/}

            <div className="relative">
              <button className="p-2 rounded bg-gray-200 flex items-center gap-1 text-sm">
                File <ChevronDown size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Enable horizontal scrolling */}
        <div className="overflow-x-auto w-full">
          <table className="table text-sm w-full min-w-[1000px] mb-0">
            <thead className="bg-light dark:bg-[#1E1E1E] text-[#5d7186] text-sm ">
              <tr className="p-2 w-full">
                <th className="p-2 text-left">ID</th>
                <th className="p-2 text-left">Image</th>
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Tag</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Author</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Updated At</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="text-[#8686a7]">
              {blogs
                ? blogs.map((blog) => (
                    <tr
                      key={blog.id}
                      className="border-b border-inherit bg-white dark:bg-[#1E1E1E]"
                    >
                      <td className="px-2 py-3.5">
                        <Link href={`/admin/blogs/${blog.id}`}>{blog.id}</Link>
                      </td>
                      <td className="px-2 py-3.5">
                        <Image
                          height={16}
                          width={16}
                          src={blog.image}
                          alt={blog.title}
                          className="w-16 h-16 "
                        />
                      </td>
                      <td className="px-2 py-3.5">
                        <Suspense
                          fallback={<div className={"w-60 h-10"}></div>}
                        >
                          {blog.title}
                        </Suspense>
                      </td>
                      <td className="px-2 py-3.5">
                        <Suspense
                          fallback={<div className={"w-60 h-10"}></div>}
                        >
                          {blog.tag}
                        </Suspense>
                      </td>
                      <td className="px-2 py-3.5">
                        {new Date(blog.date).toLocaleDateString()}
                      </td>
                      <td className="px-2 py-3.5">
                        <Suspense
                          fallback={<div className={"w-60 h-10"}></div>}
                        >
                          {blog.author}
                        </Suspense>
                      </td>
                      <td className="px-2 py-3.5">
                        <Suspense
                          fallback={<div className={"w-60 h-10"}></div>}
                        >
                          {blog.status}
                        </Suspense>
                      </td>
                      <td className="px-2 py-3.5">
                        <Suspense
                          fallback={<div className={"w-60 h-10"}></div>}
                        >
                          {new Date(blog.updated_at).toLocaleDateString()}
                        </Suspense>
                      </td>
                      <td>
                        <div className="flex items-center gap-3">
                          <Link href={"#"} className="p-1 bg-[#8686a7] rounded">
                            <EyeIcon color="white" />
                          </Link>
                          <Dialog>
                            <DialogTrigger className="p-1 rounded group hover:bg-[#ff6c2f] transition-colors duration-200 bg-[#ff3d5430]">
                              <Edit className="text-[#ff6c2f] group-hover:text-white" />
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Edit Service</DialogTitle>
                                <DialogDescription className={"w-full"}>
                                  <EditBlog id={blog.id} blog={blog} />
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>

                          <button
                            type="submit"
                            onClick={() => handleDelete(blog.id)}
                            className="p-1 rounded group hover:bg-hero transition-colors duration-200 bg-[#ff3d5430]"
                          >
                            <DeleteIcon className="text-hero group-hover:text-white" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                : "No Blogs"}
            </tbody>
          </table>
        </div>

        <Pagination amount={blogs.length} />
      </div>
    </div>
  );
}
