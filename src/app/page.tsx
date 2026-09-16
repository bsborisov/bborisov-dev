import { AboutSection } from "@/components/sections/AboutSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <TechStackSection />

        <ProjectsSection />

        <ExperienceSection />

        <ApproachSection />

        <AboutSection />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}