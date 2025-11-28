"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Smartphone, Tablet, Zap } from "lucide-react";
import Link from "next/link";

export default function MobilePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      
      <section className="py-24 bg-white text-center">
         <div className="container mx-auto px-4">
             <span className="text-orange-600 font-bold tracking-wider uppercase">Mobile First</span>
             <h1 className="text-5xl font-extrabold mt-4 mb-6">Apps People Love to Use</h1>
             <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                 We build high-performance mobile applications for iOS and Android using Flutter and React Native.
             </p>
             <Link href="/contact"><Button className="bg-black text-white hover:bg-orange-600">Get a Quote</Button></Link>
         </div>
      </section>

      <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <Smartphone className="h-12 w-12 mx-auto text-orange-600 mb-4"/>
                  <h3 className="text-xl font-bold mb-2">iOS Development</h3>
                  <p className="text-gray-600">Native Swift development for the Apple ecosystem.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <Tablet className="h-12 w-12 mx-auto text-orange-600 mb-4"/>
                  <h3 className="text-xl font-bold mb-2">Android Development</h3>
                  <p className="text-gray-600">Modern Kotlin apps for the widest reach.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <Zap className="h-12 w-12 mx-auto text-orange-600 mb-4"/>
                  <h3 className="text-xl font-bold mb-2">Cross-Platform</h3>
                  <p className="text-gray-600">React Native & Flutter for a single codebase solution.</p>
              </div>
          </div>
      </section>
      <Footer />
    </div>
  );
}