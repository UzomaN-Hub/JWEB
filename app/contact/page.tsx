"use client";

import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600">Have a project in mind or want to join a course? We&apos;d love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Our Campus</h3>
                        <p className="text-gray-600">123 Tech Avenue, Innovation District,<br/>Nairobi, Kenya</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Email Us</h3>
                        <p className="text-gray-600">admissions@jengatech.com</p>
                        <p className="text-gray-600">business@jengatech.com</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                        <Phone className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Call Us</h3>
                        <p className="text-gray-600">+254 700 000 000</p>
                        <p className="text-gray-600">Mon-Fri from 8am to 5pm</p>
                    </div>
                </CardContent>
            </Card>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input placeholder="Doe" />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option>General Inquiry</option>
                        <option>Course Enrollment</option>
                        <option>Hire Jenga Solutions</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="How can we help you?" className="min-h-[120px]" />
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-12">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}