"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Cloud, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function CloudPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Modern Cloud <span className="text-orange-600">Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Migrate, modernize, and manage your applications on AWS, Azure, or Google Cloud with our certified DevOps engineers.
          </p>
          <div className="flex justify-center gap-4">
             <Link href="/contact"><Button className="bg-black text-white hover:bg-orange-600">Get a Cloud Audit</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Cloud Migration", icon: <Cloud className="h-8 w-8"/>, desc: "Move from on-premise to the cloud with zero downtime." },
             { title: "Security & Compliance", icon: <Shield className="h-8 w-8"/>, desc: "Implementation of firewalls, IAM, and automated compliance checks." },
             { title: "High Availability", icon: <Zap className="h-8 w-8"/>, desc: "Load balancing and auto-scaling to handle millions of users." },
           ].map((item, i) => (
             <div key={i} className="p-8 border rounded-xl hover:border-orange-600 transition-colors group">
               <div className="text-orange-600 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
               <h3 className="text-xl font-bold mb-3">{item.title}</h3>
               <p className="text-gray-600">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}