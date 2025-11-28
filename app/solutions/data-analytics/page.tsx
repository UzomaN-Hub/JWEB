"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { BarChart3, Database, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function DataPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Data-Driven <span className="text-orange-600">Decisions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            Stop guessing. We build pipelines that collect, clean, and visualize your data to uncover actionable insights.
          </p>
          <Link href="/contact"><Button className="bg-orange-600 hover:bg-orange-700">Explore Data Solutions</Button></Link>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
         <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="mt-1 bg-orange-100 p-3 rounded-lg text-orange-600 h-fit"><Database /></div>
                    <div>
                        <h3 className="text-xl font-bold">Data Warehousing</h3>
                        <p className="text-gray-600">Centralize your data from multiple sources into a single source of truth (Snowflake, BigQuery).</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="mt-1 bg-orange-100 p-3 rounded-lg text-orange-600 h-fit"><BarChart3 /></div>
                    <div>
                        <h3 className="text-xl font-bold">Business Intelligence</h3>
                        <p className="text-gray-600">Interactive dashboards using PowerBI and Tableau to track KPIs in real-time.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="mt-1 bg-orange-100 p-3 rounded-lg text-orange-600 h-fit"><BrainCircuit /></div>
                    <div>
                        <h3 className="text-xl font-bold">Predictive AI</h3>
                        <p className="text-gray-600">Machine learning models to forecast sales, churn, and market trends.</p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 rounded-2xl flex items-center justify-center min-h-[300px]">
                <p className="text-gray-400 font-medium">Interactive Dashboard Preview Image</p>
            </div>
         </div>
      </section>
      <Footer />
    </div>
  );
}