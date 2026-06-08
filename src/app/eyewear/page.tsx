import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EyewearShowroom from "@/components/EyewearShowroom";

export const metadata: Metadata = {
  title: "Eyewear Showroom | ClearView Eye Center",
  description:
    "Browse curated eyeglasses and sunglasses at ClearView Eye Center in Cebu City. Designer frames, kids styles, and polarized sunwear — book a fitting today.",
  openGraph: {
    title: "Eyewear Showroom — ClearView Eye Center",
    description:
      "Explore our collection of optical frames and sunglasses at Ayala Center Cebu.",
  },
};

export default function EyewearPage() {
  return (
    <>
      <Header />
      <main>
        <EyewearShowroom />
      </main>
      <Footer />
    </>
  );
}
