import MainLayout from "@/components/app_layout/MainLayout";
import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";

const cabin = Cabin({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sulaimanyaacob-portfolio.vercel.app"),
  title: {
    default: "Sulaiman Yaacob | Full-Stack Developer",
    template: "%s | Sulaiman Yaacob",
  },
  description:
    "Portfolio of Sulaiman Yaacob, a full-stack developer building production web apps, campaign systems, automation workflows, APIs, dashboards, and practical AI integrations.",
  keywords: [
    "Sulaiman Yaacob",
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "React Developer",
    "Node.js Developer",
    "PostgreSQL",
    "Prisma",
    "n8n automation",
    "AI integrations",
    "Malaysia software developer",
  ],
  authors: [{ name: "Sulaiman Yaacob" }],
  creator: "Sulaiman Yaacob",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Sulaiman Yaacob | Full-Stack Developer",
    description:
      "Production-ready full-stack work across web apps, campaign systems, automation, dashboards, APIs, and AI integrations.",
    siteName: "Sulaiman Yaacob Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sulaiman Yaacob portfolio brand card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sulaiman Yaacob | Full-Stack Developer",
    description:
      "Full-stack developer shipping production web apps, dashboards, automations, APIs, and AI integrations.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
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
