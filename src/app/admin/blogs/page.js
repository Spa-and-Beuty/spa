import Blogs from "@/components/admin/Blogs";
import { getManyBlog } from "@/data/blogs";

export const dynamic = "force-dynamic";
export default async function Home() {
  const data = await getManyBlog();
  const blogs = data.blogs;
  return <Blogs blogs={blogs} />;
}
