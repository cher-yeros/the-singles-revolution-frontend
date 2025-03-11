import Companies from "@/components/Companies";
import Contact from "@/components/Contact";
import FAQs from "@/components/FAQs";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />

      {/* <Companies /> */}

      <Services />

      {/* <Gallery /> */}

      <Portfolio />

      <Testimonials />

      {/* <FAQs /> */}

      <Contact />

      <Footer />

      <a href="#" className="shadow btn-primary rounded-circle back-to-top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  );
}
