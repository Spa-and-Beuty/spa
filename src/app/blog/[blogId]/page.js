import Categories from "@/components/Categories";
import React from "react";
import { bitter, posts } from "../../../../constants";
import Image from "next/image";
import { QuoteIcon } from "@radix-ui/react-icons";
import { PagesHero } from "@/components/PagesHero";
import { BsArrowUpRight, BsQuote, BsTelephone } from "react-icons/bs";
import { LatestNews } from "@/components/LatestNews";
import RecentPost from "@/components/RecentPost";
import Link from "next/link";
import { FlowerIcon } from "lucide-react";
import { getOneBlog } from "@/data/blogs";
import { Remarkable } from "remarkable";
import { notFound } from "next/navigation";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = (await params).blogId;
  const singleBlog = await getOneBlog(id);

  // fetch data

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: singleBlog.title,
    openGraph: {
      images: [singleBlog.image, ...previousImages],
    },
  };
}

export default async function page({ params }) {
  const id = (await params).blogId;
  // const singleBlogs = posts.find((post) => post.id == params.blogId);
  const singleBlog = await getOneBlog(id);
  if (!singleBlog) {
    notFound();
  }

  const tags = [
    "Beauty",
    "fitness",
    "massage",
    "Peace",
    "Relax",
    "Spa",
    "Treatments",
    "Wellness",
  ];

  return (
    <main>
      <PagesHero title={singleBlog.title} />
      <main className="max-lg:mx-10 mt-20 ">
        <section
          className={
            "container gap-10 flex max-lg:flex-col justify-between mt-10 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]"
          }
        >
          <div className="w-2/3 max-lg:w-full">
            <Image
              src={singleBlog.image}
              width={600}
              height={400}
              alt={singleBlog.title}
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <div className="mt-10 flex items-center gap-4">
              <span className="px-4 py-2 rounded-full uppercase text-sm bg-secondary-color">
                {singleBlog.tag}
              </span>
              <span>|</span>
              <span className="  text-darkish-color uppercase ">
                {singleBlog.createdAt}
              </span>
              <span>|</span>
              <span className=" text-darkish-color uppercase ">
                {singleBlog.author}
              </span>
            </div>
            <div className="text-lg  py-2 mt-10 text-darkish-color ">
              <span
                dangerouslySetInnerHTML={{
                  __html: singleBlog.description,
                }}
              ></span>
            </div>
            <div className="p-10  my-10 rounded-3xl border flex items-start gap-10">
              <div className="p-4 text-3xl rounded-full bg-link-color-hover">
                <BsQuote size={50} className="text-white" />
              </div>
              <div>
                <p className="text-2xl max-sm:text-base max-lg:text-xl font-semibold mb-4">{`“A massage is just like a movie, really relaxing and a total escape, except in a massage you’re the star. And you don’t miss anything by falling asleep!”`}</p>
                <span className="uppercase mt-5  text-link-color-hover">
                  - satisfied client
                </span>
              </div>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: singleBlog.description.split(".")[1],
              }}
            ></p>
          </div>

          <div className="w-1/3 max-lg:w-full">
            <RecentPost />
            <div className="bg-serviceAd bg-blackish-color  bg-no-repeat bg-cover bg-center  rounded-2xl p-10 py-20 flex items-center justify-center gap-10 flex-col ">
              <span className="border rounded-full font-semibold px-8 py-4 text-white uppercase">
                our best offer{" "}
              </span>
              <span className="flex items-center gap-2 text-lg text-white">
                <BsTelephone className="text-link-color-hover" />
                +240-380-4294
              </span>
              <h1
                className={`${bitter.className} text-6xl font-semibold text-white text-center`}
              >
                Book your Spa Session
              </h1>
              <Link
                href={"#"}
                className={`text-2xl font-semibold flex items-center gap-2 px-8 py-4 rounded-full bg-link-color-hover text-white hover:bg-blackish-color transition-colors duration-200 ${bitter.className}`}
              >
                Register Now <BsArrowUpRight />
              </Link>
            </div>
            <div className=" p-10 border mt-10 rounded-3xl  ">
              <h1
                className={`${bitter.className} mb-4 flex items-center gap-2  text-2xl font-semibold `}
              >
                <FlowerIcon size={40} className="text-link-color-hover" /> Tags
              </h1>
              <div className="flex gap-4 flex-wrap">
                {tags.map((tag, index) => (
                  <span
                    className="px-4 py-2 bg-secondary-color rounded-full"
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}
