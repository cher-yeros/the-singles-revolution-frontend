"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import FeaturesCard from "@/components/FeaturesCard";
import Hero from "@/components/Hero";
// import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import FAQs from "@/components/FAQs";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Mission from "@/components/Mission";
import BookReview from "@/components/BookReview";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Mission />

      <Features />

      {/* <FeaturesCard /> */}

      <Features2 />

      <BookReview />

      <CTA />

      <Testimonials />

      <Stats />

      {/* <Services /> */}

      <FAQs />

      <Contact />
    </>
  );
}
