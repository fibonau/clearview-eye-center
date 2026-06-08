import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import About from "@/components/About";
import Doctors from "@/components/Doctors";
import AppointmentForm from "@/components/AppointmentForm";
import VisitSteps from "@/components/VisitSteps";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Doctors />
        <AppointmentForm />
        <VisitSteps />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </>
  );
}
