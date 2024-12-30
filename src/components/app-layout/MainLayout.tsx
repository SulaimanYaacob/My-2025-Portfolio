import React from "react";
import Header from "./Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <div className="mx-auto">{children}</div>
    </>
  );
}
