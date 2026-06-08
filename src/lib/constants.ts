import { IMAGES } from "./images";

export const CLINIC = {
  name: "ClearView Eye Center",
  tagline: "Clear vision starts here",
  phone: "+63 32 234 5678",
  phoneHref: "tel:+63322345678",
  email: "hello@clearvieweyecenter.ph",
  facebook: "https://facebook.com/clearvieweyecenter",
  address: {
    line1: "Unit 5, 2nd Floor, Ayala Center Cebu",
    line2: "Cardinal Rosales Avenue, Cebu Business Park",
    city: "Cebu City, 6000 Philippines",
    full: "Unit 5, 2nd Floor, Ayala Center Cebu, Cardinal Rosales Avenue, Cebu Business Park, Cebu City, 6000 Philippines",
  },
  hours: [
    { day: "Monday", hours: "9:00 AM – 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 6:00 PM" },
    { day: "Friday", hours: "9:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  mapEmbed:
    "https://maps.google.com/maps?q=Ayala+Center+Cebu+Cebu+City+Philippines&output=embed",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Doctors", href: "/#doctors" },
  { label: "Contact", href: "/#contact" },
] as const;

export const TRUST_POINTS = [
  {
    icon: "shield",
    label: "Licensed Optometrists",
  },
  {
    icon: "card",
    label: "Major HMOs Accepted",
  },
  {
    icon: "clock",
    label: "15+ Years of Care",
  },
  {
    icon: "eye",
    label: "Modern Equipment",
  },
] as const;

export const SERVICES = [
  {
    icon: "exam",
    image: IMAGES.serviceExam,
    title: "Comprehensive Eye Exam",
    description:
      "Thorough vision testing and ocular health assessment for all ages.",
    detail:
      "Our comprehensive eye exam includes visual acuity testing, refraction, intraocular pressure screening, and a detailed assessment of ocular health. We take time to explain your results and recommend next steps — whether that means new lenses, a follow-up, or a specialist referral.",
  },
  {
    icon: "glasses",
    image: IMAGES.serviceGlasses,
    title: "Prescription Glasses",
    description:
      "Curated frames and precision lenses tailored to your lifestyle.",
    detail:
      "Browse our curated frame collection and use the virtual try-on to see how styles look on you. Our opticians help you choose lenses and coatings suited to your prescription, daily habits, and budget.",
  },
  {
    icon: "lens",
    image: IMAGES.serviceLens,
    title: "Contact Lens Fitting",
    description:
      "Safe fitting and follow-up care for daily, monthly, and specialty lenses.",
    detail:
      "We fit daily, monthly, toric, and multifocal contact lenses with careful corneal measurement and trial lenses. Follow-up visits ensure comfort, clarity, and healthy long-term wear.",
  },
  {
    icon: "child",
    image: IMAGES.servicePediatric,
    title: "Pediatric Eye Care",
    description:
      "Gentle, child-friendly exams to support healthy vision development.",
    detail:
      "Children's eye exams are unhurried and age-appropriate. We screen for refractive errors, lazy eye, and alignment issues — helping Cebu families catch vision problems early when they matter most.",
  },
  {
    icon: "referral",
    image: IMAGES.serviceReferral,
    title: "Cataract & LASIK Referral",
    description:
      "Trusted referrals to leading ophthalmologists when surgery is needed.",
    detail:
      "When surgery is the right path, we coordinate referrals to trusted ophthalmologists in Cebu and beyond. You'll receive clear guidance on preparation, recovery, and post-operative care.",
  },
  {
    icon: "screening",
    image: IMAGES.serviceScreening,
    title: "Eye Health Screening",
    description:
      "Early detection for glaucoma, diabetic retinopathy, and more.",
    detail:
      "Advanced screening helps detect glaucoma, diabetic retinopathy, macular changes, and other conditions before symptoms appear — especially important for patients with diabetes or a family history of eye disease.",
  },
] as const;

export const DOCTORS = [
  {
    name: "Dr. Maria Elena Santos",
    credentials: "Doctor of Optometry",
    specialty: "Primary care optometry & contact lens specialist",
    image: IMAGES.doctorMaria,
  },
  {
    name: "Dr. James Patrick Reyes",
    credentials: "Doctor of Optometry",
    specialty: "Pediatric vision & low vision rehabilitation",
    image: IMAGES.doctorJames,
  },
] as const;

export const HMO_PARTNERS = [
  "Maxicare",
  "Medicard",
  "Intellicare",
  "PhilCare",
  "Avega",
  "ValuCare",
] as const;

export const TESTIMONIALS = [
  {
    name: "Grace Villanueva",
    rating: 5,
    text: "Dr. Santos explained everything clearly during my exam. The staff was warm and efficient — I got my new glasses within a week. Highly recommend for anyone in Cebu.",
  },
  {
    name: "Michael Tan",
    rating: 5,
    text: "Brought my daughter here for her first eye check. Dr. Reyes was patient and made her feel at ease. The clinic is clean, modern, and easy to find at Ayala Center.",
  },
  {
    name: "Rosa Dela Cruz",
    rating: 5,
    text: "They processed my Maxicare smoothly with no hassle. Professional service from start to finish. ClearView is now our family's go-to eye clinic.",
  },
] as const;

export const SERVICE_OPTIONS = [
  "Comprehensive Eye Exam",
  "Prescription Glasses",
  "Contact Lens Fitting",
  "Pediatric Eye Care",
  "Cataract & LASIK Referral",
  "Eye Health Screening",
  "General Inquiry",
] as const;
