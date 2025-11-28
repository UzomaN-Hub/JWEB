import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Laptop, BarChart3, Users } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">
              Jenga Solutions
            </span>
            <h2 className="text-3xl font-bold text-black mt-2">
              Accelerate Your Digital Growth
            </h2>
          </div>
          <Link href="/solutions">
            <Button
              variant="ghost"
              className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-0 mt-4 md:mt-0"
            >
              View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Product Development",
              icon: <Laptop />,
              desc: "From MVP to enterprise-scale applications, we build robust software tailored to your needs.",
            },
            {
              title: "Data & Analytics",
              icon: <BarChart3 />,
              desc: "Turn raw data into actionable insights with our BI and AI integration services.",
            },
            {
              title: "Corporate Training",
              icon: <Users />,
              desc: "Upskill your existing workforce with private workshops on modern tech stacks.",
            },
          ].map((svc, i) => (
            <Card
              key={i}
              className="bg-white border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                  {svc.icon}
                </div>
                <CardTitle className="text-xl">{svc.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}