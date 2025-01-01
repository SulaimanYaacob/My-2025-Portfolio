import HeroIcons from "@/components/app-layout/HeroIcons";

export default function Home() {
  return (
    <div className="text-3xl">
      <HeroIcons />
      <div className="m-auto flex h-screen w-full flex-col justify-center gap-2 bg-violet-200 text-center text-violet-600">
        Hello world
      </div>
    </div>
  );
}
