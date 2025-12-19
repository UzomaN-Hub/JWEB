"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authstore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Lock, User, Eye, EyeOff, Code2 } from "lucide-react";
import Link from "next/link";
import { AxiosError } from "axios";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      alert("All fields are required");
      return;
    }

    setIsLoading(true);

    try {
      await login(formData);
      toast.success("Login successful!", {
        description: "Welcome back to your dashboard",
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      const axiosError = error as AxiosError<{ detail: string }>;
      toast.error("Login failed", {
        description: axiosError.response?.data.detail || "Invalid credentials. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
      };
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo/Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-2xl mb-4 shadow-lg shadow-orange-600/50">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Jenga<span className="text-orange-600">Tech</span>
          </h1>
          <p className="text-gray-400">Admin Portal</p>
        </div>

        <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-xl shadow-2xl shadow-orange-600/10">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-center text-white">Welcome Back</CardTitle>
            <CardDescription className="text-center text-base text-gray-400">
              Sign in to access the dashboard
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-gray-300">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="pl-11 h-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-600 focus:ring-orange-600"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  disabled={isLoading}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-300">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-11 pr-11 h-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-600 focus:ring-orange-600"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  disabled={isLoading}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end cursor-pointer">
              <Link 
                href="/forgot-password" 
                className="text-sm text-orange-600 hover:text-orange-500 font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pt-2">
            <Button 
              onClick={handleSubmit}
              className="w-full h-12 cursor-pointer bg-orange-600 hover:bg-orange-700 text-white font-medium shadow-lg shadow-orange-600/50 hover:shadow-xl hover:shadow-orange-600/60 transition-all" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </CardFooter>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-6">
          Protected by industry-standard encryption
        </p>
      </div>
    </div>
  );
}