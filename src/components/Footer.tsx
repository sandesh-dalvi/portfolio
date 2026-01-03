"use client";

import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();
  return (
    <footer
      className={`border-t ${
        darkMode
          ? "border-white/5 text-gray-500"
          : "border-gray-200 text-gray-600"
      } py-8 px-6 text-center`}
    >
      <p>
        &copy; {new Date().getFullYear()} Sandesh Dalvi. Crafted with passion
        and code.
      </p>
    </footer>
  );
};

export default Footer;
