import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROTON — Immigration & Study-Abroad Consultancy",
  description: "Visa eligibility, CRS calculator, consultation booking, document vault, staff management.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
