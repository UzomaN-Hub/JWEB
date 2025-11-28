"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Eye } from "lucide-react";
import Link from "next/link";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      
      <section className="bg-slate-950 text-white py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
             <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Zero Trust <br/><span className="text-orange-600">Security</span>
             </h1>
             <p className="text-xl text-gray-400 mb-8">
                In a digital world, trust is a vulnerability. We secure your infrastructure, code, and data against evolving threats.
             </p>
             <Link href="/contact"><Button className="bg-orange-600 hover:bg-orange-700">Secure Your Business</Button></Link>
          </div>
          <div className="md:w-1/3 mt-12 md:mt-0 flex justify-center">
             <ShieldCheck className="h-64 w-64 text-gray-800" />
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
         <div className="grid gap-6 md:grid-cols-2">
            <div className="border p-6 rounded-lg flex gap-4 hover:bg-gray-50">
                <Lock className="text-orange-600 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg">Penetration Testing</h3>
                    <p className="text-gray-600 mt-2">We simulate real-world attacks to find vulnerabilities before hackers do.</p>
                </div>
            </div>
            <div className="border p-6 rounded-lg flex gap-4 hover:bg-gray-50">
                <Eye className="text-orange-600 shrink-0" />
                <div>
                    <h3 className="font-bold text-lg">24/7 Monitoring</h3>
                    <p className="text-gray-600 mt-2">Continuous surveillance of your network traffic to detect anomalies.</p>
                </div>
            </div>
         </div>
      </section>
      <Footer />
    </div>
  );
}