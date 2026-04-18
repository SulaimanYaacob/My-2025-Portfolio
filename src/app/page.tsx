import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import MyTechSection from "@/components/landing/MyTechSection";
import ProjectSection from "@/components/landing/ProjectSection";
import EducationSection from "@/components/landing/EducationSection";
import ContactSection from "@/components/landing/ContactSection";

export default function Home() {
  return (
    <main className="[&>*]:border-b-4 [&>*]:border-slate-900 dark:[&>*]:border-violet-900">
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
