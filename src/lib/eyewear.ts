import { IMAGES } from "./images";

export type EyewearCategory = "eyeglasses" | "sunglasses" | "kids" | "designer";

export type EyewearFilter = "all" | EyewearCategory;

export type TryOnShape =
  | "round"
  | "rectangle"
  | "aviator"
  | "wayfarer"
  | "cat-eye"
  | "pilot"
  | "square"
  | "rimless"
  | "oversized"
  | "kids-round"
  | "kids-sport";

export type TryOnStyle = {
  shape: TryOnShape;
  frameColor: string;
  lensColor?: string;
};

export type EyewearFrame = {
  id: string;
  name: string;
  style: string;
  price: number;
  categories: EyewearCategory[];
  description: string;
  image: string;
  tryOn: TryOnStyle;
};

export const EYEWEAR_FILTERS: { id: EyewearFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "eyeglasses", label: "Eyeglasses" },
  { id: "sunglasses", label: "Sunglasses" },
  { id: "kids", label: "Kids" },
  { id: "designer", label: "Designer" },
];

export const EYEWEAR_FRAMES: EyewearFrame[] = [
  {
    id: "aria-gold",
    name: "Aria Gold",
    style: "Round acetate · Warm tortoise",
    price: 3490,
    categories: ["eyeglasses", "designer"],
    description:
      "A soft round silhouette in layered acetate with gold-tone hardware. Lightweight, flattering, and ideal for everyday wear in Cebu’s bright light.",
    image: IMAGES.eyewear1,
    tryOn: { shape: "round", frameColor: "#8B5E3C" },
  },
  {
    id: "cebu-classic",
    name: "Cebu Classic",
    style: "Rectangle metal · Matte gunmetal",
    price: 2890,
    categories: ["eyeglasses"],
    description:
      "A timeless rectangle frame with adjustable nose pads and spring hinges. Clean lines that suit both office and casual settings.",
    image: IMAGES.eyewear2,
    tryOn: { shape: "rectangle", frameColor: "#4A4F57" },
  },
  {
    id: "solstice-aviator",
    name: "Solstice Aviator",
    style: "Aviator · Gradient lens",
    price: 4290,
    categories: ["sunglasses", "designer"],
    description:
      "Classic aviator proportions with UV400 polarized lenses. A refined sun companion for driving along Osmeña Boulevard or weekend trips.",
    image: IMAGES.eyewear3,
    tryOn: { shape: "aviator", frameColor: "#B8860B", lensColor: "rgba(60,40,20,0.55)" },
  },
  {
    id: "little-luna",
    name: "Little Luna",
    style: "Kids flexible · Soft lavender",
    price: 1990,
    categories: ["kids", "eyeglasses"],
    description:
      "Flexible TR90 material built for active children. Rounded edges, impact-resistant, and available with blue-light filter lenses on request.",
    image: IMAGES.eyewear4,
    tryOn: { shape: "kids-round", frameColor: "#9B8EC4" },
  },
  {
    id: "harbor-wayfarer",
    name: "Harbor Wayfarer",
    style: "Wayfarer · Deep espresso",
    price: 3190,
    categories: ["sunglasses"],
    description:
      "Bold wayfarer styling in a deep espresso finish with polarized lenses. Pairs effortlessly with the warm tones of our clinic aesthetic.",
    image: IMAGES.eyewear5,
    tryOn: { shape: "wayfarer", frameColor: "#3E2F26", lensColor: "rgba(30,25,20,0.6)" },
  },
  {
    id: "visayas-cat",
    name: "Visayas Cat-Eye",
    style: "Cat-eye · Champagne acetate",
    price: 3790,
    categories: ["eyeglasses", "designer"],
    description:
      "An elevated cat-eye with a subtle upsweep and champagne acetate. Hand-finished details for patients who want a touch of glamour.",
    image: IMAGES.eyewear6,
    tryOn: { shape: "cat-eye", frameColor: "#C9B896" },
  },
  {
    id: "pacific-pilot",
    name: "Pacific Pilot",
    style: "Pilot sunglasses · Brushed bronze",
    price: 4590,
    categories: ["sunglasses", "designer"],
    description:
      "Premium pilot frames with bronze metal and gradient brown lenses. Full UV protection with a slim profile that sits comfortably all day.",
    image: IMAGES.eyewear7,
    tryOn: { shape: "pilot", frameColor: "#A67B5B", lensColor: "rgba(80,50,30,0.5)" },
  },
  {
    id: "junior-jax",
    name: "Junior Jax",
    style: "Kids sport · Navy blue",
    price: 2190,
    categories: ["kids", "eyeglasses"],
    description:
      "Wraparound-inspired kids frame with non-slip temple tips. Perfect for school, sports, and growing faces — includes a free adjustment visit.",
    image: IMAGES.eyewear8,
    tryOn: { shape: "kids-sport", frameColor: "#1E3A5F" },
  },
  {
    id: "linen-square",
    name: "Linen Square",
    style: "Square acetate · Sand linen",
    price: 2990,
    categories: ["eyeglasses"],
    description:
      "Modern square lines in a sand linen acetate that complements warm skin tones. A versatile everyday frame for men and women.",
    image: IMAGES.eyewear9,
    tryOn: { shape: "square", frameColor: "#C4B59A" },
  },
  {
    id: "atelier-titan",
    name: "Atelier Titan",
    style: "Designer rimless · Titanium",
    price: 5890,
    categories: ["eyeglasses", "designer"],
    description:
      "Featherweight titanium with minimalist rimless design. Precision-engineered for comfort and a barely-there look — our most refined optical frame.",
    image: IMAGES.eyewear10,
    tryOn: { shape: "rimless", frameColor: "#8A8A8A" },
  },
  {
    id: "island-shade",
    name: "Island Shade",
    style: "Oversized sun · Cream acetate",
    price: 3990,
    categories: ["sunglasses"],
    description:
      "Generous oversized lenses in cream acetate for maximum sun coverage. Polarized and perfect for beach days on Mactan or city strolls.",
    image: IMAGES.eyewear11,
    tryOn: { shape: "oversized", frameColor: "#E8DFD0", lensColor: "rgba(50,45,40,0.45)" },
  },
  {
    id: "mini-milo",
    name: "Mini Milo",
    style: "Kids round · Matte teal",
    price: 1890,
    categories: ["kids", "eyeglasses"],
    description:
      "A cheerful round frame sized for toddlers and young children. Durable, hypoallergenic, and designed to make first glasses feel fun.",
    image: IMAGES.eyewear12,
    tryOn: { shape: "kids-round", frameColor: "#2A9D8F" },
  },
];

export function formatPeso(price: number) {
  return `₱${price.toLocaleString("en-PH")}`;
}

export function filterFrames(filter: EyewearFilter): EyewearFrame[] {
  if (filter === "all") return EYEWEAR_FRAMES;
  return EYEWEAR_FRAMES.filter((frame) => frame.categories.includes(filter));
}
