import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Projects } from "@/components/sections/Projects";
import { Navbar } from "@/components/sections/Navbar";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto w-full">
      <div className="sticky top-0 z-50">
        <Reveal delay={120}>
          <Navbar />
        </Reveal>
      </div>
      <div className="flex flex-col gap-10 p-5 md:p-10 pt-4">
        <Header />
        <About />
        <Projects />
        <Reveal delay={120}>
          <Footer />
        </Reveal>
      </div>
    </div>
  );
}
