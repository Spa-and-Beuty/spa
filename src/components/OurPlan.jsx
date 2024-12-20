"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { bitter } from "../../constants";
// import { PlanItem } from "./PlanItem";
import { getManyPriceing } from "@/data/pricing";
import PlanItem from "./PlanItem";

export default function OurPlan({ home = false, hideDot }) {
  const [data, setData] = useState([]);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    async function getPlan() {
      const res = await getManyPriceing();
      setData(res);
    }
    getPlan();
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const headingVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  if (home) {
    data.length = 6;
  }
  return (
    <section className="lg:w-2/3 m-auto px-4 py-20">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 rounded-full bg-secondary-color text-sm uppercase text-white">
          Best Plans
        </span>
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={headingVariants}
          className={`text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 ${bitter.className} text-blackish-color`}
        >
          Our Flexible Pricing Plan
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PlanItem
              id={plan.id}
              image_url={plan.image}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              hideDot={hideDot}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
