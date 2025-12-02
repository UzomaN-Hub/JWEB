"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Code2, Server, Layers } from "lucide-react";
import Link from "next/link";

export default function CustomSoftwarePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Scalable <span className="text-orange-600">Corporate Training  Solutions</span> Built for Your Business
            </h1>
            <p className="text-xl text-gray-400 mb-8">
             We deliver personalized learning experiences that empower your workforce. Our corporate training solutions are designed to be engaging, effective, and fully aligned with your organization’s goals.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">Start Your Project</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Corporate Training</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
             Generic training programs rarely address your team’s unique skill gaps. Our tailored corporate learning solutions ensure your workforce grows in alignment with your organization’s goals—not the other way around.
              </p>
              <ul className="space-y-4">
                {[
                  "Targeted Skill Development",
                  "Seamless Integration with Your Existing Workflows",
                  "Measurable Learning Outcomes & Analytics",
                  "Scalable Training Without Additional Licensing Costs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-lg">
                    <CheckCircle2 className="text-orange-600 mr-3 h-6 w-6" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 grid grid-cols-2 gap-4">
               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Code2 className="h-8 w-8 text-orange-600 mb-3"/>
                  <h3 className="font-bold">Web Apps</h3>
                  <p className="text-sm text-gray-500">React & Next.js</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Server className="h-8 w-8 text-orange-600 mb-3"/>
                  <h3 className="font-bold">Backend</h3>
                  <p className="text-sm text-gray-500">Node & Python</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm col-span-2">
                  <Layers className="h-8 w-8 text-orange-600 mb-3"/>
                  <h3 className="font-bold">SaaS Products</h3>
                  <p className="text-sm text-gray-500">Multi-tenant architecture design</p>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}