import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Jenga<span className="text-orange-600">Tech</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The intersection of elite tech services and next-gen education.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-orange-500">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/solutions/custom-software" className="hover:text-white">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="/solutions/consulting" className="hover:text-white">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/solutions/corporate-training" className="hover:text-white">
                  Corporate Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-orange-500">Academy</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/academy" className="hover:text-white">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/academy/tuition" className="hover:text-white">
                  Tuition & Financing
                </Link>
              </li>
              <li>
                <Link href="/student-portal" className="hover:text-white">
                  Student Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-orange-500">Institute</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="bg-gray-800 mb-8" />
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Jenga Tech Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;