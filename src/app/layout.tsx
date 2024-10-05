import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { interSans } from "../styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hardy Lino . Frontend Developper",
  description: "Frontend developper, React, Next.js, TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(interSans.className, "antialiased h-full")}
      >
        {children}
      </body>
    </html>
  );
}
