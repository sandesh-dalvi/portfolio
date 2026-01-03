import { ScrollProvider } from "@/contexts/ScrollContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <Header />
        <MainSection />
        <Footer />
      </ScrollProvider>
    </ThemeProvider>
  );
}
