import React from "react";

export function StatsSection() {
  return (
    <section className="py-20 bg-black text-white border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "50+", label: "Corporate Partners" },
            { num: "120+", label: "Projects Delivered" },
            { num: "2.5k+", label: "Students Trained" },
            { num: "95%", label: "Hiring Rate" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-orange-600">
                {stat.num}
              </span>
              <span className="text-sm md:text-base text-gray-400 mt-2 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}