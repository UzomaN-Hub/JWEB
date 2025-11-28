"use client";

import React from "react";
import Navbar from "@/components/layout/navbar"; 
import Footer from "@/components/layout/footer"; 
import Link from "next/link";
import { 
  Code2, 
  BarChart3, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  Cloud, 
  Cpu, 
  Smartphone, 
  PenTool, 
  Database 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// 1. Updated Interface: Added 'slug'
interface Course {
  title: string;
  slug: string; // Used for the URL (e.g., /academy/full-stack-engineering)
  cat: "development" | "data" | "security" | "cloud" | "engineering" | "design";
  duration: string;
  level: string;
  icon: React.ReactNode; 
}

export default function AcademyPage() {
  // 2. Updated Course List with Slugs
  // These slugs must match the keys in your [slug]/page.tsx 'coursesData' object
  const courses: Course[] = [
    // Development
    { 
      title: "Full Stack Engineering", 
      slug: "full-stack-engineering", 
      cat: "development", 
      duration: "6 Months", 
      level: "Beginner", 
      icon: <Code2 className="h-6 w-6" /> 
    },
    { 
      title: "Frontend with React", 
      slug: "frontend-react", 
      cat: "development", 
      duration: "3 Months", 
      level: "Intermediate", 
      icon: <Code2 className="h-6 w-6" /> 
    },
    { 
      title: "Mobile Dev with Flutter", 
      slug: "mobile-dev-flutter", 
      cat: "development", 
      duration: "4 Months", 
      level: "Beginner", 
      icon: <Smartphone className="h-6 w-6" /> 
    },
    
    // Data
    { 
      title: "Data Science Bootcamp", 
      slug: "data-science", 
      cat: "data", 
      duration: "4 Months", 
      level: "All Levels", 
      icon: <BarChart3 className="h-6 w-6" /> 
    },
    { 
      title: "Data Analytics & PowerBI", 
      slug: "data-analytics", 
      cat: "data", 
      duration: "3 Months", 
      level: "Beginner", 
      icon: <Database className="h-6 w-6" /> 
    },
    
    // Security
    { 
      title: "Cybersecurity Ops", 
      slug: "cybersecurity-ops", 
      cat: "security", 
      duration: "5 Months", 
      level: "Advanced", 
      icon: <ShieldCheck className="h-6 w-6" /> 
    },
    
    // Cloud & DevOps
    { 
      title: "Cloud Computing (AWS)", 
      slug: "cloud-computing", 
      cat: "cloud", 
      duration: "4 Months", 
      level: "Intermediate", 
      icon: <Cloud className="h-6 w-6" /> 
    },
    { 
      title: "DevOps Engineering", 
      slug: "devops-engineering", 
      cat: "cloud", 
      duration: "5 Months", 
      level: "Advanced", 
      icon: <Cloud className="h-6 w-6" /> 
    },
    
    // Engineering/Hardware
    { 
      title: "Robotics & IoT", 
      slug: "robotics-iot", 
      cat: "engineering", 
      duration: "6 Months", 
      level: "Intermediate", 
      icon: <Cpu className="h-6 w-6" /> 
    },
    
    // Design
    { 
      title: "UI/UX Design Mastery", 
      slug: "ui-ux-design", 
      cat: "design", 
      duration: "3 Months", 
      level: "Beginner", 
      icon: <PenTool className="h-6 w-6" /> 
    },
  ];

  // Helper to filter courses
  const filterCourses = (category: string) => {
    return courses.filter((c) => c.cat === category);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans">
      <Navbar />

      {/* Header */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-orange-600/20 text-orange-400 border-orange-600/50">Upskill Today</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Jenga <span className="text-orange-600">Academy</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Industry-relevant skills. Project-based learning. Job placement support. 
            Choose from our range of world-class programs.
          </p>
        </div>
      </div>

      {/* Course Filter & List */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-black">Available Courses</h2>
            {/* Scrollable Tabs for mobile */}
            <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <TabsList className="bg-gray-200">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="development">Dev</TabsTrigger>
                <TabsTrigger value="data">Data</TabsTrigger>
                <TabsTrigger value="cloud">Cloud</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="engineering">Robotics</TabsTrigger>
                </TabsList>
            </div>
          </div>

          {/* All Courses Tab */}
          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, idx) => (
                <Link href={`/academy/${course.slug}`} key={idx} className="block h-full">
                  <CourseCard course={course} />
                </Link>
              ))}
            </div>
          </TabsContent>
          
          {/* Individual Categories */}
          {["development", "data", "cloud", "security", "engineering"].map((cat) => (
            <TabsContent key={cat} value={cat} className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filterCourses(cat).length > 0 ? (
                    filterCourses(cat).map((course, idx) => (
                    <Link href={`/academy/${course.slug}`} key={idx} className="block h-full">
                       <CourseCard course={course} />
                    </Link>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-gray-500">
                        No courses currently available in this category.
                    </div>
                )}
                </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Why Join Us */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
             <h2 className="text-3xl font-bold text-center mb-12">The Jenga Advantage</h2>
             <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-orange-50/50 border border-orange-100 rounded-xl hover:bg-orange-50 transition-colors">
                    <h3 className="font-bold text-lg mb-2 text-orange-800">1. Portfolio Ready</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">You don&apos;t just watch videos; you build real apps that you can show potential employers to prove your worth.</p>
                </div>
                <div className="p-6 bg-orange-50/50 border border-orange-100 rounded-xl hover:bg-orange-50 transition-colors">
                    <h3 className="font-bold text-lg mb-2 text-orange-800">2. Expert Mentorship</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Get code reviews, pair programming sessions, and career advice from senior engineers working in the industry.</p>
                </div>
                <div className="p-6 bg-orange-50/50 border border-orange-100 rounded-xl hover:bg-orange-50 transition-colors">
                    <h3 className="font-bold text-lg mb-2 text-orange-800">3. Career Services</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">We help with resume building, mock interviews, and directly connect you with our network of hiring partners.</p>
                </div>
             </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// 3. Reusable Course Card Component
function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="flex flex-col h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-600 bg-white group">
      <CardHeader>
        <div className="flex justify-between items-start">
            <Badge variant="secondary" className="mb-2 bg-gray-100 text-gray-700 hover:bg-gray-200">{course.level}</Badge>
            <div className="text-orange-600 bg-orange-50 p-2 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-colors">
                {course.icon}
            </div>
        </div>
        <CardTitle className="mt-2">{course.title}</CardTitle>
        <CardDescription className="line-clamp-2">Master the tools and technologies required to excel in {course.title}.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center"><Clock className="mr-2 h-4 w-4 text-orange-600/70"/> {course.duration}</div>
            <div className="flex items-center"><Calendar className="mr-2 h-4 w-4 text-orange-600/70"/> Next Cohort: Jan 15</div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full bg-black group-hover:bg-orange-600 text-white transition-all">View Syllabus</Button>
      </CardFooter>
    </Card>
  )
}