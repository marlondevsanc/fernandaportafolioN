import Hero from "./Layout/Hero";
import About from "./Layout/About";
import Projects from "./Layout/Projects";
import ReelsProjects from "./Layout/ReelsProjects";
import BrandsSection from "./Layout/BrandsSections";
import ContactSection from "./Layout/Contact";

export default function Home() {
  return (
    <div className="w-full sm:p-5">
      <Hero />
      <About />
      <Projects />
      <ReelsProjects />
      <BrandsSection />
      <ContactSection />
    </div>
  );
}
