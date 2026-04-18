import React from "react";
import Header from "./Header";
import CursorTrail from "@/components/ui/CursorTrail";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#030614]">
      <CursorTrail />
      <Header />
      <div className="mx-auto">{children}</div>
    </div>
  );
}
