import React from "react";
import { bitter } from "../../constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Faq({
  about,
  title,
  description,
  questions,
  grid = true,
}) {
  return (
    <div
      className={
        "container px-10 mt-20 max-lg:mt-14 max-sm:mt-10 mx-auto xl:max-w-[1428px] lg:max-w-[1200px] md:max-w-[850px] sm:max-w-[500px]"
      }
    >
      <div className="text-center ">
        <span className="text-sm uppercase rounded-full px-4 py-2 bg-secondary-color">
          {about}
        </span>
        <h1
          className={`${bitter.className} max-lg:text-4xl max-sm:text-4xl text-6xl font-semibold mb-7 my-5 `}
        >
          {title}
        </h1>
        <p className="mb-7 text-darkish-color">{description}</p>
      </div>
      <div
        className={` ${grid && "grid justify-start max-md:grid-cols-1  items-start  grid-cols-2 gap-10"}`}
      >
        {questions.map((question) => (
          <Accordion
            key={question.id}
            className={`${!grid && "mb-4"} self-start`}
            draggable
            type="multiple"
            collapsible={true}
          >
            <AccordionItem value={question.id}>
              <AccordionTrigger>{question.question}</AccordionTrigger>
              <AccordionContent>{question.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
