import React from "react";
import { BsAsterisk } from "react-icons/bs";
import { bitter } from "../../constants"; // Assuming `bitter` is a Tailwind font style

export const BannerScroll = () => {
  const slides = [
    {
      type: "icon",
      content: (
        <BsAsterisk className="text-link-color-hover text-8xl max-lg:text-6xl max-sm:text-4xl font-extrabold" />
      ),
    },
    { type: "text", content: "relax" },
    {
      type: "icon",
      content: (
        <BsAsterisk className="text-link-color-hover text-8xl max-lg:text-6xl max-sm:text-4xl font-extrabold" />
      ),
    },
    { type: "text", content: "renew" },
    {
      type: "icon",
      content: (
        <BsAsterisk className="text-link-color-hover text-8xl  max-lg:text-6xl max-sm:text-4xl font-extrabold" />
      ),
    },
    { type: "text", content: "refresh" },
  ];

  return (
    <div className="overflow-hidden w-full p-10 ">
      <div className="flex gap-10 animate-horizontalScroll whitespace-nowrap">
        {slides.concat(slides).map((slide, index) => (
          <div
            key={index}
            className="flex-none text-9xl max-lg:text-6xl font-extrabold uppercase text-blackish-color"
          >
            {slide.type === "icon" ? (
              slide.content
            ) : (
              <h1 className={`${bitter.className} text-blackish-color`}>
                {slide.content}
              </h1>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerScroll;
