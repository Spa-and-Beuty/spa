import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { bitter } from "../../../constants";
import { PagesHero } from "@/components/PagesHero";
import Faq from "@/components/Faq";

export default function page() {
  const questions = [
    {
      id: 1,
      question: "Do you offer spa treatments for men?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
    },
    {
      id: 2,
      question: "Treatment & Spa Retail Specials",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
    },
    {
      id: 3,
      question: "Do you offer spa treatments for men?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
    },
    {
      id: 4,
      question: "Treatment & Spa Retail Specials",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
    },
    {
      id: 5,
      question: "Do you offer spa treatments for men?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
    },
    {
      id: 6,
      question: "Treatment & Spa Retail Specials",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
    },
    {
      id: 7,
      question: "Do you offer spa treatments for men?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
    },
    {
      id: 8,
      question: "Treatment & Spa Retail Specials",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
    },
  ];
  const informations = questions;
  informations.length = 4;
  return (
    <main>
      <PagesHero title={"Faq"} />
      <Faq
        questions={questions}
        title={"General Questions"}
        description={
          "You will find answers to about our var construction work and constructor's service and more. Please feel free to contact us if you don't get your question's answer in below."
        }
        about={"about"}
      />
      <Faq
        questions={informations}
        title={"Frequently Asked Questions"}
        description={
          "You will find answers to about our various construction work and constructor's service and more. Please feel free to contact us if you don't get your question's answer in below."
        }
        about={"information"}
        grid={false}
      />
    </main>
  );
}
