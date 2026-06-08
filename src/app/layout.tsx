import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClearView Eye Center | Eye Clinic in Cebu City",
  description:
    "ClearView Eye Center offers comprehensive eye exams, prescription glasses, contact lens fitting, and pediatric eye care at Ayala Center Cebu. Book your appointment today.",
  openGraph: {
    title: "ClearView Eye Center — Clear Vision Starts Here",
    description:
      "Trusted eye care in Cebu City. Licensed optometrists, modern equipment, and major HMO acceptance at Ayala Center Cebu.",
    type: "website",
    locale: "en_PH",
    siteName: "ClearView Eye Center",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
