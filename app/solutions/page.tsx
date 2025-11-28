"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { 
  Laptop, Database, Globe, ArrowRight, 
  Smartphone, ShieldCheck, PenTool 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const solutions = [
  {
    title: "Custom Software",
    slug: "custom-software",
    icon: <Laptop className="h-10 w-10 text-orange-600" />,
    desc: "Full-cycle web development using React, Next.js, and Node.js. tailored to your specific business workflows."
  },
  {
    title: "Cloud Infrastructure",
    slug: "cloud-infrastructure",
    icon: <Globe className="h-10 w-10 text-orange-600" />,
    desc: "Secure cloud migration, DevOps automation, and server management using AWS, Azure, and Google Cloud."
  },
  {
    title: "Data Analytics & AI",
    slug: "data-analytics",
    icon: <Database className="h-10 w-10 text-orange-600" />,
    desc: "Turn your data into gold. We implement BI dashboards and predictive models to guide your strategic decisions."
  },
  {
    title: "Mobile Development",
    slug: "mobile-development",
    icon: <Smartphone className="h-10 w-10 text-orange-600" />,
    desc: "Native and Cross-platform mobile applications for iOS and Android using Flutter and React Native."
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    icon: <ShieldCheck className="h-10 w-10 text-orange-600" />,
    desc: "Protect your assets with penetration testing, security audits, and compliance implementation (GDPR/ISO)."
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: <PenTool className="h-10 w-10 text-orange-600" />,
    desc: "User-centric design that converts. We create wireframes, prototypes, and high-fidelity interfaces."
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            Enterprise <span className="text-orange-600">Solutions</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-8">
            We transform complex business requirements into scalable, high-performance software.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-black text-white hover:bg-orange-600 h-12 px-8">
                Book a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Separator />

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((service, i) => (
              <Card key={i} className="group border-t-4 border-t-orange-600 shadow-sm hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 bg-orange-50 w-fit p-3 rounded-xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </CardContent>
                <CardFooter>
                    <Link href={`/solutions/${service.slug}`} className="flex items-center text-sm font-bold text-black cursor-pointer hover:text-orange-600 transition-colors">
                        Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                    </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How We Work</h2>
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { step: "01", title: "Discovery", desc: "We analyze your needs and outline the roadmap." },
                    { step: "02", title: "Design", desc: "UI/UX wireframes and system architecture." },
                    { step: "03", title: "Develop", desc: "Agile sprints with regular updates." },
                    { step: "04", title: "Deploy", desc: "Launch, testing, and maintenance." },
                ].map((p, i) => (
                    <div key={i} className="relative p-6 border border-gray-800 rounded-xl hover:bg-gray-900 transition-colors group">
                        <span className="text-6xl font-black text-gray-800 absolute top-4 right-4 -z-10 group-hover:text-gray-700 transition-colors">{p.step}</span>
                        <h3 className="text-xl font-bold text-orange-500 mb-2">{p.title}</h3>
                        <p className="text-gray-400">{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}