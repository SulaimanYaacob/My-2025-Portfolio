import MainLayout from "@/components/app_layout/MainLayout";
import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";

const cabin = Cabin({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Sulaiman Yaacob — Full-Stack Developer",
  description: "Full-Stack Developer specialising in Next.js, TypeScript, and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cabin.className} lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
