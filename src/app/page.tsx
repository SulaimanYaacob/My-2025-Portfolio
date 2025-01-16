import HeroIcons from "@/components/landing/HeroSection";
import MyTechSection from "@/components/landing/MyTechSection";
import OfferSection from "@/components/landing/OfferSection";
import ProjectSection from "@/components/landing/ProjectSection";

export default function Home() {
  return (
    <main className="text-3xl [&>*]:border-b-4 [&>*]:border-slate-900">
      <HeroIcons />
      <OfferSection />
      <MyTechSection />
      <ProjectSection />
    </main>
  );
}
