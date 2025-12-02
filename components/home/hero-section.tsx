import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
        <Badge className="mb-6 bg-orange-600/20 text-orange-400 hover:bg-orange-600/30 border-orange-600/50 px-4 py-1 text-sm">
          Bridging Innovation & Education
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl mb-6">
          Build Solutions. <br className="hidden md:block" />
          <span className="text-orange-600">Transform Tomorrow.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
          At Jenga Worldwide, we empower businesses with cutting-edge software <br />

          <strong> We drive  secure, innovative growth for global corporate partners.</strong> 

        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/solutions">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white min-w-[180px] h-14 text-lg"
            >
              <Briefcase className="mr-2 h-5 w-5" /> Jenga Business 
            </Button>
          </Link>
          <Link href="/academy">
            <Button
              size="lg"
              variant="outline"
              className="text-black bg-white hover:bg-gray-200 border-none min-w-[180px] h-14 text-lg"
            >
              <GraduationCap className="mr-2 h-5 w-5" /> Join Jenga Academy
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}