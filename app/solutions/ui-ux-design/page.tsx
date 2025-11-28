"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { PenTool, Layout, Users } from "lucide-react";
import Link from "next/link";

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      
      <section className="py-24 bg-white text-center">
         <div className="container mx-auto px-4">
             <h1 className="text-5xl font-extrabold mb-6">Design That <span className="text-orange-600">Converts</span></h1>
             <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                 We create digital experiences that are not only beautiful but intuitive and results-driven.
             </p>
             <Link href="/contact"><Button variant="outline" className="border-black hover:bg-black hover:text-white">View Portfolio</Button></Link>
         </div>
      </section>

      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
                <Users className="h-10 w-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">User Research</h3>
                <p className="text-gray-600">Understanding your audience through interviews, personas, and journey mapping.</p>
            </div>
             <div className="p-6 bg-white rounded-xl shadow-sm">
                <Layout className="h-10 w-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Wireframing</h3>
                <p className="text-gray-600">Low-fidelity blueprints to establish structure and user flow early on.</p>
            </div>
             <div className="p-6 bg-white rounded-xl shadow-sm">
                <PenTool className="h-10 w-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">UI Design</h3>
                <p className="text-gray-600">Pixel-perfect interfaces using Figma, tailored to your brand identity.</p>
            </div>
         </div>
      </section>
      <Footer />
    </div>
  );
}