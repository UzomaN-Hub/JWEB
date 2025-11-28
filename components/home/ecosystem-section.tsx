import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, GraduationCap, CheckCircle2 } from "lucide-react";

export function EcosystemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            One Institute, Two Pillars
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Whether you need a digital product built or want to build a career in
            tech, we have the infrastructure to support you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Business Side */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-12 hover:border-orange-200 transition-colors">
            <div className="absolute top-4 right-4 bg-black text-white p-3 rounded-full">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">For Business</h3>
            <p className="text-gray-600 mb-8 h-20">
              End-to-end software development, digital transformation, and
              corporate IT training to scale your operations.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Custom Software Dev",
                "IT Consultancy",
                "Staff Augmentation",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center text-sm font-medium text-gray-800"
                >
                  <CheckCircle2 className="mr-2 h-5 w-5 text-orange-600" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/solutions">
              <Button
                variant="outline"
                className="w-full border-black hover:bg-black hover:text-white group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:text-white transition-all"
              >
                Explore Enterprise Services
              </Button>
            </Link>
          </div>

          {/* Student Side */}
          <div className="group relative overflow-hidden rounded-3xl bg-black text-white p-8 md:p-12 border border-gray-800">
            <div className="absolute top-4 right-4 bg-orange-600 text-white p-3 rounded-full">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">For Learners</h3>
            <p className="text-gray-400 mb-8 h-20">
              Practical, project-based bootcamps designed to take you from
              novice to job-ready developer in months.
            </p>
            <ul className="space-y-3 mb-8">
              {["Full Stack Development", "Data Science", "Job Placement"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center text-sm font-medium text-gray-200"
                  >
                    <CheckCircle2 className="mr-2 h-5 w-5 text-orange-600" />{" "}
                    {item}
                  </li>
                )
              )}
            </ul>
            <Link href="/academy">
              <Button className="w-full bg-white text-black hover:bg-orange-600 hover:text-white transition-all">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}