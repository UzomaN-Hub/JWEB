"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { notFound } from "next/navigation";
import { 
  Clock, Calendar, CheckCircle2, MapPin, 
  Download, Laptop, Users, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// --- 1. TYPES ---
interface SyllabusItem {
  week: string;
  topic: string;
}

interface Course {
  title: string;
  category: string;
  duration: string;
  mode: string;
  level: string;
  description: string;
  price: string;
  syllabus: SyllabusItem[];
  outcomes: string[];
}

// --- 2. COMPLETE DATA "DATABASE" ---
// This keys MUST match the 'slugs' in your academy/page.tsx
const coursesData: Record<string, Course> = {
  // 1. Full Stack
  "full-stack-engineering": {
    title: "Full Stack Engineering",
    category: "Development",
    duration: "6 Months",
    mode: "Part-time / Hybrid",
    level: "Beginner",
    description: "Become a complete software engineer. You will master the MERN stack (MongoDB, Express, React, Node.js) and learn how to deploy scalable applications to the cloud.",
    price: "$1,200",
    syllabus: [
      { week: "Month 1", topic: "Web Foundations (HTML, CSS, Git)" },
      { week: "Month 2", topic: "JavaScript Deep Dive & Algorithms" },
      { week: "Month 3", topic: "Frontend Development with React" },
      { week: "Month 4", topic: "Backend APIs with Node.js & Express" },
      { week: "Month 5", topic: "Databases (SQL & NoSQL) & Auth" },
      { week: "Month 6", topic: "DevOps, CI/CD & Capstone Project" },
    ],
    outcomes: ["Build full-scale web apps", "Understand API Architecture", "Deploy to AWS/Vercel"]
  },

  // 2. Frontend
  "frontend-react": {
    title: "Frontend with React",
    category: "Development",
    duration: "3 Months",
    mode: "Online",
    level: "Intermediate",
    description: "Deep dive into the React ecosystem. Master hooks, state management (Redux/Zustand), and Next.js for server-side rendering.",
    price: "$800",
    syllabus: [
      { week: "Month 1", topic: "Modern JavaScript (ES6+) & React Basics" },
      { week: "Month 2", topic: "Advanced Hooks & State Management" },
      { week: "Month 3", topic: "Next.js, Performance & Testing" },
    ],
    outcomes: ["Master React.js", "Build High Performance UIs", "Server Side Rendering"]
  },

  // 3. Mobile
  "mobile-dev-flutter": {
    title: "Mobile Dev with Flutter",
    category: "Development",
    duration: "4 Months",
    mode: "Hybrid",
    level: "Beginner",
    description: "Build beautiful native apps for iOS and Android using a single codebase with Google's Flutter framework and Dart.",
    price: "$950",
    syllabus: [
      { week: "Month 1", topic: "Dart Programming Basics" },
      { week: "Month 2", topic: "Flutter Widgets & UI Design" },
      { week: "Month 3", topic: "State Management & API Integration" },
      { week: "Month 4", topic: "Device Features & App Store Deployment" },
    ],
    outcomes: ["Publish to App Store & Play Store", "Cross-platform development", "Native device features"]
  },

  // 4. Data Science
  "data-science": {
    title: "Data Science Bootcamp",
    category: "Data",
    duration: "4 Months",
    mode: "Part-time",
    level: "All Levels",
    description: "Learn to analyze complex data sets, build machine learning models, and create compelling data visualizations using Python.",
    price: "$1,100",
    syllabus: [
      { week: "Month 1", topic: "Python for Data Analysis (Pandas/NumPy)" },
      { week: "Month 2", topic: "Data Visualization & EDA" },
      { week: "Month 3", topic: "Machine Learning Algorithms" },
      { week: "Month 4", topic: "Deep Learning & AI Ethics" },
    ],
    outcomes: ["Python Mastery", "Machine Learning Models", "Data Storytelling"]
  },

  // 5. Data Analytics (NEW)
  "data-analytics": {
    title: "Data Analytics & PowerBI",
    category: "Data",
    duration: "3 Months",
    mode: "Online",
    level: "Beginner",
    description: "Turn raw data into actionable business insights. Master SQL for querying databases and PowerBI for creating executive dashboards.",
    price: "$750",
    syllabus: [
      { week: "Month 1", topic: "Excel Advanced & Statistics" },
      { week: "Month 2", topic: "SQL for Data Analysis" },
      { week: "Month 3", topic: "PowerBI & Tableau Visualization" },
    ],
    outcomes: ["Business Intelligence", "SQL Queries", "Dashboard Creation"]
  },

  // 6. Cybersecurity
  "cybersecurity-ops": {
    title: "Cybersecurity Ops",
    category: "Security",
    duration: "5 Months",
    mode: "On-site",
    level: "Advanced",
    description: "Prepare for the frontlines of digital defense. Learn ethical hacking, network security, and incident response strategies.",
    price: "$1,400",
    syllabus: [
      { week: "Month 1", topic: "Networking Fundamentals & Linux" },
      { week: "Month 2", topic: "Network Defense & Security Ops" },
      { week: "Month 3", topic: "Ethical Hacking & Penetration Testing" },
      { week: "Month 4", topic: "Incident Response & Forensics" },
      { week: "Month 5", topic: "Security Compliance & Capstone" },
    ],
    outcomes: ["Ethical Hacking", "Network Defense", "CompTIA Security+ Prep"]
  },

  // 7. Cloud AWS
  "cloud-computing": {
    title: "Cloud Computing (AWS)",
    category: "Cloud",
    duration: "4 Months",
    mode: "Online",
    level: "Intermediate",
    description: "Master the AWS ecosystem. Learn to architect, deploy, and manage robust cloud applications.",
    price: "$1,000",
    syllabus: [
      { week: "Month 1", topic: "Cloud Concepts & AWS Basics" },
      { week: "Month 2", topic: "EC2, S3, & Storage Solutions" },
      { week: "Month 3", topic: "Networking (VPC) & Security" },
      { week: "Month 4", topic: "Serverless & Containerization" },
    ],
    outcomes: ["AWS Certified Practitioner Prep", "Cloud Architecture", "Serverless Deployment"]
  },

  // 8. DevOps (NEW)
  "devops-engineering": {
    title: "DevOps Engineering",
    category: "Cloud",
    duration: "5 Months",
    mode: "Online",
    level: "Advanced",
    description: "Bridge the gap between development and operations. Learn Docker, Kubernetes, Jenkins, and Terraform.",
    price: "$1,300",
    syllabus: [
      { week: "Month 1", topic: "Linux Administration & Scripting" },
      { week: "Month 2", topic: "Docker & Containerization" },
      { week: "Month 3", topic: "Kubernetes Orchestration" },
      { week: "Month 4", topic: "CI/CD Pipelines (Jenkins/GitHub Actions)" },
      { week: "Month 5", topic: "IaC (Terraform) & Monitoring" },
    ],
    outcomes: ["Automated Pipelines", "Kubernetes Management", "Infrastructure as Code"]
  },

  // 9. Robotics
  "robotics-iot": {
    title: "Robotics & IoT",
    category: "Engineering",
    duration: "6 Months",
    mode: "On-site",
    level: "Intermediate",
    description: "Bridge the physical and digital worlds. Learn Arduino, Raspberry Pi, and circuit design.",
    price: "$1,300",
    syllabus: [
      { week: "Month 1", topic: "Electronics Fundamentals" },
      { week: "Month 2", topic: "C++ for Arduino" },
      { week: "Month 3", topic: "Sensors & Actuators" },
      { week: "Month 4", topic: "Python for Raspberry Pi" },
      { week: "Month 5", topic: "IoT Networking (MQTT)" },
      { week: "Month 6", topic: "Final Hardware Project" },
    ],
    outcomes: ["Circuit Design", "Embedded Systems", "IoT Protocols"]
  },

  // 10. UI/UX (NEW)
  "ui-ux-design": {
    title: "UI/UX Design Mastery",
    category: "Design",
    duration: "3 Months",
    mode: "Part-time",
    level: "Beginner",
    description: "Learn to design digital products that people love. Master Figma, user research, and prototyping.",
    price: "$850",
    syllabus: [
      { week: "Month 1", topic: "Design Principles & Typography" },
      { week: "Month 2", topic: "User Research & Wireframing" },
      { week: "Month 3", topic: "High Fidelity UI in Figma & Prototyping" },
    ],
    outcomes: ["Figma Mastery", "User Research", "Portfolio Creation"]
  },
};


// --- 3. THE COMPONENT ---

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
  // Get the slug from the URL
  const slug = params.slug;
  const course = coursesData[slug];

  // If the slug doesn't exist in our data, show 404
  if (!course) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-black text-white pt-24 pb-16 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex gap-3 mb-6">
                <Badge className="bg-orange-600 hover:bg-orange-700 text-white border-none px-3 py-1">
                    {course.category}
                </Badge>
                <Badge variant="outline" className="text-gray-300 border-gray-600">
                    {course.level}
                </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {course.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              {course.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
               <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="h-5 w-5 text-orange-500" />
                  <span>{course.duration}</span>
               </div>
               <div className="hidden sm:block text-gray-700">|</div>
               <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span>{course.mode}</span>
               </div>
               <div className="hidden sm:block text-gray-700">|</div>
               <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  <span>Next Cohort: Jan 15</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details & Syllabus */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What you'll learn */}
            <div>
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                 <Laptop className="h-6 w-6 text-orange-600"/> What you will learn
               </h3>
               <div className="grid md:grid-cols-2 gap-4">
                 {course.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                       <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                       <span className="font-medium text-gray-700">{outcome}</span>
                    </div>
                 ))}
                 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                    <span className="font-medium text-gray-700">Real-world Project Portfolio</span>
                 </div>
                 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                    <span className="font-medium text-gray-700">Job Interview Preparation</span>
                 </div>
               </div>
            </div>

            <Separator />

            {/* Curriculum */}
            <div>
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                 <Users className="h-6 w-6 text-orange-600"/> Curriculum
               </h3>
               <div className="space-y-4">
                 {course.syllabus.map((item, i) => (
                   <Card key={i} className="border hover:border-orange-200 transition-colors">
                     <CardHeader className="py-4">
                       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <h4 className="font-bold text-lg text-gray-900">
                             <span className="text-orange-600 mr-2">{item.week}:</span> 
                             {item.topic}
                          </h4>
                          <Badge variant="secondary">Module {i + 1}</Badge>
                       </div>
                     </CardHeader>
                   </Card>
                 ))}
               </div>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
             <Card className="sticky top-24 shadow-xl border-orange-100 overflow-hidden">
                <div className="h-2 bg-orange-600 w-full"></div>
                <CardHeader>
                   <CardTitle className="text-2xl">Tuition & Fees</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div>
                      <span className="text-4xl font-extrabold text-black">{course.price}</span>
                      <span className="text-gray-500 ml-2">/ total</span>
                   </div>
                   
                   <div className="space-y-3">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 h-12 text-lg">
                         Apply Now
                      </Button>
                      <Button variant="outline" className="w-full h-12">
                         <Download className="mr-2 h-4 w-4" /> Download Syllabus
                      </Button>
                   </div>

                   <Separator />

                   <div className="space-y-4 text-sm text-gray-600">
                      <div className="flex justify-between">
                         <span>Start Date:</span>
                         <span className="font-bold text-black">Jan 15, 2025</span>
                      </div>
                      <div className="flex justify-between">
                         <span>Duration:</span>
                         <span className="font-bold text-black">{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                         <span>Class Size:</span>
                         <span className="font-bold text-black">Max 25</span>
                      </div>
                   </div>

                   <div className="bg-blue-50 p-4 rounded-lg flex gap-3 items-start">
                      <Shield className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-800 leading-relaxed">
                         <strong>Money Back Guarantee:</strong> If you are not satisfied within the first 14 days, you get a full refund. No questions asked.
                      </p>
                   </div>
                </CardContent>
             </Card>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}