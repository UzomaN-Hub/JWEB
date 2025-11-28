"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { EcosystemSection } from "@/components/home/ecosystem-section";
import { ServicesSection } from "@/components/home/services-section";
import { StatsSection } from "@/components/home/stats-section";
import { AcademySection } from "@/components/home/academy-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <HeroSection />
      <EcosystemSection />
      <ServicesSection />
      <StatsSection />
      <AcademySection />
      <Footer />
    </div>
  );
}