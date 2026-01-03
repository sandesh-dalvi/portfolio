"use client";

import { useScroll } from "@/contexts/ScrollContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const { darkMode, toggleTheme, mounted } = useTheme();
  const { scrollY } = useScroll();

  if (!mounted) {
    return (
      <header className={`text-gray-900 font-semibold`}>
        <nav
          className={` fixed top-0 w-full z-50 transition-all duration-300 `}
        >
          <div className=" max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className=" text-2xl font-bold bg-gradient-to-r from-purple-500  to-violet-600 bg-clip-text text-transparent">
              Sandesh
            </div>
            <div
              className=" flex items-center gap-8
        "
            >
              {links.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  className=" hover:text-indigo-500 transition-colors capitalize"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 cursor-pointer`}
              >
                <Moon size={20} />
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header
      className={`${darkMode ? "text-white" : "text-gray-900"} font-semibold`}
    >
      <nav
        className={` fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? darkMode
              ? " bg-gray-900/95 backdrop-blur-lg shadow-lg"
              : " bg-white/95 backdrop-blur-lg shadow-lg "
            : ""
        }`}
      >
        <div className=" max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className=" text-2xl font-bold bg-gradient-to-r from-purple-500  to-violet-600 bg-clip-text text-transparent">
            Sandesh
          </div>
          <div
            className=" flex items-center gap-8
        "
          >
            {links.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className=" hover:text-indigo-500 transition-colors capitalize"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
