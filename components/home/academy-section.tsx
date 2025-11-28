import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter
} from "@/components/ui/card";
import { Code2, BarChart3, Laptop } from "lucide-react";

export function AcademySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">
            Jenga Academy
          </span>
          <h2 className="text-3xl font-bold text-black mt-2">
            Start Your Tech Career
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="border border-gray-200 overflow-hidden hover:border-orange-500 transition-colors">
            <div className="h-2 bg-orange-600 w-full"></div>
            <CardHeader>
              <Badge
                variant="outline"
                className="w-fit mb-2 border-orange-200 bg-orange-50 text-orange-700"
              >
                Best Seller
              </Badge>
              <CardTitle className="text-xl">Full Stack Engineering</CardTitle>
              <CardDescription>
                Master React, Node.js, and Cloud Infrastructure.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <Code2 className="mr-2 h-4 w-4" /> 6 Months / Part-time
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-black text-white hover:bg-orange-600">
                Apply Now
              </Button>
            </CardFooter>
          </Card>

          {/* Card 2 */}
          <Card className="border border-gray-200 overflow-hidden hover:border-orange-500 transition-colors">
            <div className="h-2 bg-black w-full"></div>
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">
                Weekend Only
              </Badge>
              <CardTitle className="text-xl">Data Science & AI</CardTitle>
              <CardDescription>
                Python, Machine Learning, and Data Visualization.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <BarChart3 className="mr-2 h-4 w-4" /> 4 Months
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-black text-white hover:bg-orange-600">
                Apply Now
              </Button>
            </CardFooter>
          </Card>

          {/* Card 3 */}
          <Card className="border border-gray-200 overflow-hidden hover:border-orange-500 transition-colors">
            <div className="h-2 bg-gray-400 w-full"></div>
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">
                Advanced
              </Badge>
              <CardTitle className="text-xl">DevOps & Cloud</CardTitle>
              <CardDescription>
                AWS, Docker, Kubernetes, and CI/CD Pipelines.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <Laptop className="mr-2 h-4 w-4" /> 3 Months
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-black text-white hover:bg-orange-600">
                Apply Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}