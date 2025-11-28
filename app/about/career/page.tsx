"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Laptop, Heart, Zap, Globe } from "lucide-react";

const jobs = [
  { title: "Senior Full Stack Engineer", dept: "Solutions", type: "Full-time", location: "Remote / Hybrid" },
  { title: "Python Curriculum Developer", dept: "Academy", type: "Contract", location: "On-site" },
  { title: "Enterprise Sales Manager", dept: "Business", type: "Full-time", location: "Remote" },
  { title: "DevOps Instructor", dept: "Academy", type: "Part-time", location: "On-site" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gray-50 py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-black">
              Build the <span className="text-orange-600">Future</span> With Us.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We are always looking for passionate problem solvers to join our mission of transforming the tech landscape.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-orange-600">
              View Open Roles
            </Button>
          </div>
        </div>
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-100/50 -skew-x-12 translate-x-20"></div>
      </section>

      {/* Perks Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Jenga Tech?</h2>
            <p className="text-gray-600">More than just a job, it&apos;s a movement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { icon: <Laptop className="h-6 w-6"/>, title: "Top-Tier Tech", desc: "Work with the latest stack and state-of-the-art hardware." },
               { icon: <Heart className="h-6 w-6"/>, title: "Health & Wellness", desc: "Comprehensive medical cover and mental health support." },
               { icon: <Zap className="h-6 w-6"/>, title: "Continuous Learning", desc: "Free access to all Jenga Academy courses for you and family." },
               { icon: <Globe className="h-6 w-6"/>, title: "Remote Friendly", desc: "Flexible work hours and remote options for most roles." },
             ].map((perk, i) => (
               <div key={i} className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                    {perk.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{perk.title}</h3>
                  <p className="text-sm text-gray-500">{perk.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold">Open Positions</h2>
            <Button variant="link" className="text-orange-500">View all on LinkedIn</Button>
          </div>
          
          <div className="grid gap-4">
            {jobs.map((job, i) => (
              <div key={i} className="group flex flex-col md:flex-row items-center justify-between bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-600 transition-all">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                  <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-3 mt-2 justify-center md:justify-start">
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">{job.dept}</Badge>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-400 text-sm">{job.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-gray-500 hidden md:block">{job.location}</span>
                  <Button className="bg-white text-black hover:bg-orange-600 hover:text-white">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}