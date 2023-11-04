import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bidonworkImg from "@/public/bidonwork.png";
import fitneksImg from "@/public/fitneks.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's Degree in Algorithmic Languages and Programming",
    location: "",
    description:
      'I studied at the "Institute of Information and Telecommunication Technologies and Electronics" in Armenia.',
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "",
    description:
      'I was employed at "Cretrix", where I specialized in developing web applications using technologies such as React, GraphQL, and Laravel.',
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "",
    description:
      'I am currently employed at "Novembit", where I specialize in web development, with a primary focus on React, Next.js, and Node.js',
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Bid On Work",
    description:
      'I worked as a full-stack developer on this project. "Bid on Work" is a platform that connects consumers with workers.',
    tags: ["React", "Next.js", "Graphql", "Fastify", "Prisma"],
    imageUrl: bidonworkImg,
    url: "https://bidonwork.com/",
  },
  {
    title: "Fitneks",
    description:
      "I worked as a full-stack developer on an online training platform. This platform includes features such as live streaming, donations, and more.",
    tags: ["React", "TypeScript", "Graphql", "Symfony"],
    imageUrl: fitneksImg,
    url: "https://fitneks.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "GraphQL",
  "Apollo",
  "React Query",
  "Express",
  "PostgreSQL",
  "PHP",
  "Symfony",
  "Laravel",
  "Framer Motion",
] as const;
