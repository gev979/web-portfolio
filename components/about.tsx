"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Programming</span>, I decided to pursue my
        passion for web development. I have since acquired a strong foundation{" "}
        <span className="font-medium">in full-stack web development</span>, with
        a particular enthusiasm for problem-solving. I derive immense
        satisfaction from overcoming challenges and finding innovative
        solutions. My core technology stack includes{" "}
        <span className="font-medium">React, Next.js, Node.js, </span>
        and I am also familiar with TypeScript and Prisma. I am committed to
        continuous learning and staying updated with emerging technologies.
        Currently, I am actively seeking{" "}
        <span className="font-medium">part-time or hourly</span> opportunities
        as a software developer.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I enjoy playing video
        games and watching movies.
      </p>
    </motion.section>
  );
}
