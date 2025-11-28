"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Sarah M. Kani",
    role: "Founder & CEO",
    bio: "Former Engineering Lead at Google. Passionate about bridging the gap between industry demand and education.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "David Ochieng",
    role: "Chief Technology Officer",
    bio: "20 years of experience building scalable systems. Leads our enterprise solutions division.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Academy",
    bio: "Education strategist with a focus on immersive bootcamps. Ensuring our curriculum stays 2 years ahead of the market.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Director of Partnerships",
    bio: "Connecting our graduates with top-tier tech companies and securing corporate training contracts.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      
      {/* Header */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-orange-600/20 text-orange-400 border-orange-600/50">Our Team</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Meet the Visionaries</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A diverse team of engineers, educators, and innovators dedicated to building the future of African technology.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <Card key={i} className="group border-none shadow-lg overflow-hidden bg-gray-50 hover:bg-white transition-all duration-300">
                <div className="aspect-[4/5] w-full overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                     <Button size="icon" variant="ghost" className="text-white hover:text-orange-500 hover:bg-white/10"><Linkedin className="h-5 w-5"/></Button>
                     <Button size="icon" variant="ghost" className="text-white hover:text-orange-500 hover:bg-white/10"><Twitter className="h-5 w-5"/></Button>
                     <Button size="icon" variant="ghost" className="text-white hover:text-orange-500 hover:bg-white/10"><Mail className="h-5 w-5"/></Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-orange-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}