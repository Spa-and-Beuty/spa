// import Categories from "@/components/Categories";

import { Blog } from "@/components/Blog";
import Categories from "@/components/Categories";
import { PagesHero } from "@/components/PagesHero";
// import { Blog } from "@/components/Blog";
import { Suspense } from "react";
// import dynamic from "next/dynamic";

export const metadata = {
  title: "Blogs",
  openGraph: {
    title: "Blogs",
  },
};

// const Blog = dynamic(() => import("@/components/Blog"), {
//   ssr: false,
//   loading: () => <p>Loading Blogs...</p>,
// });
// const Categories = dynamic(() => import("@/components/Categories"), {
//   ssr: false,
//   loading: () => <p>Loading Categories...</p>,
// });

export const dynamic = "force-dynamic";
export default function Page() {
  return (
    <main>
      <PagesHero title={"Blogs"} />
      <div className="flex max-md:flex-col mx-20 mt-20 items-start gap-10">
        <Suspense fallback={<p>Loading...</p>}>
          <Categories />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <Blog />
        </Suspense>
      </div>
    </main>
  );
}
