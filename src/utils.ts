import jobTrackerApp from "./assets/job-tracker-app.png";
import aiChatApp from "./assets/ai-chat-app.png";

import {
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { MdCss } from "react-icons/md";

export const projects = [
  {
    image: jobTrackerApp,
    title: "Job Application Tracker",
    desc: "A MERN stack Job Application Tracker that allows users to create, manage, and track job applications with real-time status updates through a clean and responsive interface.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "TailwindCSS",
      "Redux Toolkit",
    ],
    link: "https://jobtrackerapps.netlify.app",
  },
  {
    image: aiChatApp,
    title: "AI Chat App",
    desc: "An AI-powered chat application built with Vue.js and a Node.js/Express backend, using PostgreSQL for persistence and streaming AI responses in real time with OpenAI, all implemented in TypeScript.",
    tags: [
      "Vue.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Stream",
      "TailwindCSS",
      "OpenAI",
    ],
    link: "https://ai-chat-app-ui.vercel.app/",
  },
];

export const skills = [
  {
    name: "HTML",
    level: 98,
    icon: FaHtml5,
    textColor: "text-orange-500",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "CSS",
    level: 95,
    icon: MdCss,
    textColor: "text-purple-600",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "JavaScript",
    level: 90,
    icon: SiJavascript,
    textColor: "text-yellow-400",
    color: "from-yellow-400 to-amber-500",
  },
  {
    name: "React",
    level: 85,
    icon: FaReact,
    textColor: "text-cyan-400",
    color: "from-cyan-400 to-blue-600",
  },
  {
    name: "Next.js",
    level: 80,
    icon: RiNextjsLine,
    textColor: "text-white",
    color: "from-gray-800 to-black",
  },
  {
    name: "TailwindCSS",
    level: 95,
    icon: RiTailwindCssFill,
    textColor: "text-sky-400",
    color: "from-sky-400 to-teal-500",
  },

  {
    name: "Node.js",
    level: 80,
    icon: FaNodeJs,
    textColor: "text-green-500",
    color: "from-green-500 to-green-700",
  },
  {
    name: "Express.js",
    level: 80,
    icon: SiExpress,
    textColor: "text-gray-300",
    color: "from-gray-600 to-gray-900",
  },
  {
    name: "Python",
    level: 75,
    icon: FaPython,
    textColor: "text-yellow-500",
    color: "from-yellow-300 to-blue-500",
  },
  {
    name: "REST APIs",
    level: 80,
    icon: AiFillApi,
    textColor: "text-orange-500",
    color: "from-orange-400 to-red-500",
  },

  {
    name: "MySql",
    level: 80,
    icon: SiMysql,
    textColor: "text-orange-500",
    color: "from-blue-500 to-orange-300",
  },
  {
    name: "PostgreSQL",
    level: 80,
    icon: SiPostgresql,
    textColor: "text-blue-600",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "MongoDB",
    level: 75,
    icon: SiMongodb,
    textColor: "text-green-500",
    color: "from-green-500 to-green-700",
  },

  {
    name: "Git",
    level: 80,
    icon: FaGitAlt,
    textColor: "text-red-500",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Postman",
    level: 80,
    icon: SiPostman,
    textColor: "text-orange-500",
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "Figma",
    level: 80,
    icon: FaFigma,
    textColor: "text-pink-500",
    color: "from-purple-400 to-pink-500",
  },
];
