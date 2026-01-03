"use client";

import { useContext, createContext, useState, useEffect } from "react";

interface ScrollContextType {
  scrollY: number;
  visibleElements: Set<string>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("ScrollProvider is missing");
  }
  return context;
};

//provider
export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElments] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElments((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY, visibleElements }}>
      {children}
    </ScrollContext.Provider>
  );
};
