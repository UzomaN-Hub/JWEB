import React from "react";
import Image from "next/image"; // If you have images, otherwise remove and use divs
import { Users, Target, Lightbulb, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-black py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">Our Story</Badge>
          <h1 className="text-4xl font-extrabold sm:text-6xl">
            Architecting the <span className="text-orange-600">Future</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Jenga Tech was founded on a simple premise: To bridge the gap between complex technology needs and the talent required to solve them.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower individuals and organizations by providing world-class technical education and innovative software solutions. We believe technology is the ultimate equalizer.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                 {[
                    { icon: <Target className="h-6 w-6 text-orange-600"/>, title: "Precision", desc: "Delivering exact solutions." },
                    { icon: <Lightbulb className="h-6 w-6 text-orange-600"/>, title: "Innovation", desc: "Always staying ahead." },
                    { icon: <Users className="h-6 w-6 text-orange-600"/>, title: "Community", desc: "Growing together." },
                    { icon: <Trophy className="h-6 w-6 text-orange-600"/>, title: "Excellence", desc: "Best in class standards." },
                 ].map((val, i) => (
                    <div key={i} className="flex flex-col p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="mb-2">{val.icon}</div>
                        <h4 className="font-bold">{val.title}</h4>
                        <p className="text-sm text-gray-500">{val.desc}</p>
                    </div>
                 ))}
              </div>
            </div>
            <div className="h-[400px] rounded-2xl bg-gray-200 relative overflow-hidden">
                {/* Replace with <Image /> */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-black/40 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">[Team Image Placeholder]</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Meet the Builders</h2>
            <p className="mt-2 text-gray-600">The minds behind the code.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((member) => (
              <Card key={member} className="overflow-hidden border-none shadow-md">
                <div className="h-64 bg-gray-300 w-full object-cover"></div>
                <CardContent className="pt-4 text-center">
                  <h3 className="font-bold text-lg">Team Member {member}</h3>
                  <p className="text-sm text-orange-600">Senior Engineer</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}