"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Menu, Code2, Laptop, BarChart3, Briefcase, 
  Users, ShieldCheck, Cloud
} from "lucide-react";
import ListItem from "@/components/layout/nav-list-item";

// UI Components
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-black text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-50">
          <div className="h-8 w-8 rounded bg-orange-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">J</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-white cursor-pointer">
            Jenga<span className="text-orange-600">Tech</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center">
          <NavigationMenu>
            <NavigationMenuList>
              
              {/* About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer bg-black text-gray-300 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white data-[state=open]:bg-gray-900">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-900 to-black p-6 no-underline outline-none focus:shadow-md"
                          href="/about"
                        >
                          <div className="h-8 w-8 rounded bg-orange-600 flex items-center justify-center mb-4">
                            <span className="text-white font-bold">J</span>
                          </div>
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Our Mission
                          </div>
                          <p className="text-sm leading-tight text-gray-400">
                            Building the infrastructure of tomorrow through education and innovation.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/about/leadership" title="Leadership">
                      Meet the experts behind Jenga Tech.
                    </ListItem>
                    <ListItem href="/about/career" title="Career">
                      Join our growing team of innovators.
                    </ListItem>
                    <ListItem href="/about/campus" title="Our Campus">
                      Explore our state-of-the-art facilities.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Academy Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer bg-black text-gray-300 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white data-[state=open]:bg-gray-900">
                  Academy
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/academy" title="Software Engineering" icon={<Code2 className="h-4 w-4"/>}>
                      Full Stack Web & Mobile Development.
                    </ListItem>
                    <ListItem href="/academy" title="Data & AI" icon={<BarChart3 className="h-4 w-4"/>}>
                      Python, Machine Learning & Analytics.
                    </ListItem>
                    <ListItem href="/academy" title="Cyber Security" icon={<ShieldCheck className="h-4 w-4"/>}>
                      Ethical Hacking & Network Defense.
                    </ListItem>
                    <ListItem href="/academy" title="Cloud & DevOps" icon={<Cloud className="h-4 w-4"/>}>
                      AWS, Docker & CI/CD Pipelines.
                    </ListItem>
                    <li className="col-span-2 mt-2">
                       <Link href="/academy" className="block w-full bg-orange-50 p-3 text-center text-sm font-medium text-orange-700 hover:bg-orange-100 rounded-md transition-colors">
                          View All Courses &rarr;
                       </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer bg-black text-gray-300 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white data-[state=open]:bg-gray-900">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
                    <ListItem href="/solutions/custom-software" title="Custom Software" icon={<Laptop className="h-4 w-4"/>}>
                      Tailor-made applications for enterprise needs.
                    </ListItem>
                    <ListItem href="/solutions/consulting" title="IT Consulting" icon={<Briefcase className="h-4 w-4"/>}>
                      Digital transformation strategies.
                    </ListItem>
                    <ListItem href="/solutions/corporate-training" title="Corporate Training" icon={<Users className="h-4 w-4"/>}>
                      Upskill your team with private workshops.
                    </ListItem>
                     <li className="col-span-2 mt-2">
                       <Link href="/solutions" className="block w-full bg-orange-50 p-3 text-center text-sm font-medium text-orange-700 hover:bg-orange-100 rounded-md transition-colors">
                          View All Solutions &rarr;
                       </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Simple Links */}
              <NavigationMenuItem>
                <Link href="/blog">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer bg-black text-gray-300 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white")}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="ml-6">
             <Link href="/contact">
                <Button className="cursor-pointer bg-orange-600 text-white hover:bg-orange-700 border-none">
                    Contact Us
                </Button>
             </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-black border-l-gray-800 text-white overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left text-orange-600 font-bold">Menu</SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Section: Academy */}
                <div>
                   <h4 className="font-bold text-orange-500 mb-2 uppercase text-xs tracking-wider">Academy</h4>
                   <div className="flex flex-col space-y-3 pl-2">
                      <Link href="/academy/software-engineering" className="text-gray-300 hover:text-white">Software Engineering</Link>
                      <Link href="/academy/data-science" className="text-gray-300 hover:text-white">Data Science</Link>
                      <Link href="/academy/cyber-security" className="text-gray-300 hover:text-white">Cyber Security</Link>
                   </div>
                </div>

                {/* Mobile Section: Solutions */}
                <div>
                   <h4 className="font-bold text-orange-500 mb-2 uppercase text-xs tracking-wider">Solutions</h4>
                   <div className="flex flex-col space-y-3 pl-2">
                      <Link href="/solutions/custom-software" className="text-gray-300 hover:text-white">Custom Software</Link>
                      <Link href="/solutions/consulting" className="text-gray-300 hover:text-white">IT Consulting</Link>
                   </div>
                </div>

                {/* Mobile Section: General */}
                <div>
                   <h4 className="font-bold text-orange-500 mb-2 uppercase text-xs tracking-wider">Company</h4>
                   <div className="flex flex-col space-y-3 pl-2">
                      <Link href="/about" className="text-gray-300 hover:text-white">About Us</Link>
                      <Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link>
                    
                   </div>
                </div>

                <Separator className="bg-gray-800" />
                <Link href="/contact" className="w-full">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Contact Us
                    </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;