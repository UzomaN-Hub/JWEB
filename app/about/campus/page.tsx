"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Wifi, Monitor, Coffee } from "lucide-react";

export default function CampusPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* Hero with Background Image */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center px-4">
           <Badge className="bg-orange-600 text-white border-none mb-4">Nairobi HQ</Badge>
           <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Our Campus</h1>
           <p className="text-xl md:text-2xl text-gray-200">Where innovation calls home.</p>
        </div>
      </section>

      {/* Facilities Grid (Bento Grid Style) */}
      <section className="py-24 container mx-auto px-4">
        <div className="mb-12">
            <h2 className="text-3xl font-bold">World-Class Facilities</h2>
            <p className="text-gray-600 mt-2">Designed to foster creativity and collaboration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Large Item */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Lab"/>
             <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold">The Collaboration Hub</h3>
                <p className="text-gray-300">Open space for hackathons and group projects.</p>
             </div>
          </div>

          {/* Small Item 1 */}
          <div className="relative group overflow-hidden rounded-2xl">
             <img src="https://images.unsplash.com/photo-1598556856423-45520f92d47e?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Computers"/>
             <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold">High-Performance Labs</h3>
             </div>
          </div>

          {/* Small Item 2 */}
          <div className="relative group overflow-hidden rounded-2xl">
             <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Lounge"/>
             <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold">Student Lounge</h3>
             </div>
          </div>
        </div>
      </section>

      {/* Location / Visit */}
      <section className="bg-gray-50 py-20 border-t">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">Visit Us</h2>
            <p className="text-gray-600">
               We are located in the heart of the tech district. Whether you are a prospective student, a client, or a partner, our doors are open.
            </p>
            
            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <MapPin className="text-orange-600 mt-1" />
                    <div>
                        <span className="font-bold block">Jenga Tech Tower, 4th Floor</span>
                        <span className="text-gray-500">Westlands Road, Nairobi, Kenya</span>
                    </div>
                </div>
                <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-2 text-sm font-medium"><Wifi className="h-4 w-4 text-orange-600"/> Free Wi-Fi</div>
                    <div className="flex items-center gap-2 text-sm font-medium"><Monitor className="h-4 w-4 text-orange-600"/> iMac Labs</div>
                    <div className="flex items-center gap-2 text-sm font-medium"><Coffee className="h-4 w-4 text-orange-600"/> Coffee Bar</div>
                </div>
            </div>

            <Button className="mt-6 bg-black text-white hover:bg-orange-600">Schedule a Tour</Button>
          </div>
          
          <div className="flex-1 w-full h-[300px] bg-gray-200 rounded-xl overflow-hidden shadow-inner flex items-center justify-center text-gray-400">
             {/* Map Placeholder */}
             <div className="text-center">
                <MapPin className="h-10 w-10 mx-auto mb-2 opacity-50"/>
                <span className="text-sm">Interactive Map Integration</span>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}