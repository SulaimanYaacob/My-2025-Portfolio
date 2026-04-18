import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import MyTechSection from "@/components/landing/MyTechSection";
import ProjectSection from "@/components/landing/ProjectSection";
import EducationSection from "@/components/landing/EducationSection";
import ContactSection from "@/components/landing/ContactSection";

export default function Home() {
  return (
    <main className="relative">
      {/* Space-to-ocean narrative gradient — fixed, bleeds through semi-transparent sections */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #030614 0%, #080f2a 15%, #071a35 30%, #061a2f 45%, #051423 60%, #040e1a 75%, #020810 100%)",
        }}
      />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <MyTechSection />
      <ProjectSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
