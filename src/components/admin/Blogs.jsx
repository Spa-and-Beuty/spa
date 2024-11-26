import Pagination from "@/components/admin/Pagination";
import { blogs } from "../../../constants";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddBlog from "@/components/admin/AddBlog";

export const Blogs = () => {
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
              </tr>
            </thead>

            <tbody className="text-[#8686a7]">
              {blogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-b border-inherit bg-white dark:bg-[#1E1E1E]"
                >
                  <td className="px-2 py-3.5">
                    <Link href={`/admin/blogs/${blog.id}`}>{blog.id}</Link>
                  </td>
                  <td className="px-2 py-3.5">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="px-2 py-3.5">{blog.title}</td>
                  <td className="px-2 py-3.5">{blog.tag}</td>
                  <td className="px-2 py-3.5">
                    {new Date(blog.date).toLocaleDateString()}
                  </td>
                  <td className="px-2 py-3.5">{blog.author}</td>
                  <td className="px-2 py-3.5">{blog.status}</td>
                  <td className="px-2 py-3.5">
                    {new Date(blog.updated_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination amount={blogs.length} />
      </div>
    </div>
  );
};
