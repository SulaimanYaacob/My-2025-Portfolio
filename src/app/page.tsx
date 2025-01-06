import HeroIcons from "@/components/landing/HeroSection";
import MyTechSection from "@/components/landing/MyTechSection";
import OfferSection from "@/components/landing/OfferSection";

export default function Home() {
  return (
    <main className="text-3xl">
      <HeroIcons />
      <OfferSection />
      <MyTechSection />
    </main>
  );
}
