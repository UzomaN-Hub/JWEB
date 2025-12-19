"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authstore";
import { useIdleTimer } from "@/hooks/idleTimer";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Eye,
  FilePlus,
  TrendingUp,
  Clock,
  ArrowRight,
  Loader2,
  Code2,
  LayoutDashboard,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  List
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

// Types
interface Article {
  id: number;
  title: string;
  created_at: string;
  published: boolean;
}


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuthenticated, checkAuth, isLoading, logout } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [articlesExpanded, setArticlesExpanded] = useState(true);

  // Auto-logout after 2 minutes of inactivity
  useIdleTimer(() => {
    toast.warning("You've been logged out due to inactivity");
    logout();
    router.push("/login");
  }, 120000);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 text-orange-600 animate-spin" />
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col border-r border-gray-800 bg-gray-900/50 backdrop-blur-xl">
        <div className="flex flex-col flex-1 min-h-0">
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-800">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">
              Jenga<span className="text-orange-600">Tech</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            <Link href="/dashboard">
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 h-12 text-gray-300 hover:bg-orange-600/10 hover:text-orange-400"
              >
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </Button>
            </Link>
            
            {/* Articles Dropdown */}
            <div>
              <button
                onClick={() => setArticlesExpanded(!articlesExpanded)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-gray-300 hover:bg-orange-600/10 hover:text-orange-400"
              >
                <FileText className="w-5 h-5 flex-shrink-0" />
                <span className="flex-1 text-left">Articles</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    articlesExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Items */}
              {articlesExpanded && (
                <div className="mt-1 ml-4 pl-4 border-l border-gray-800 space-y-1">
                  <Link href="/articles">
                    <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-gray-400 hover:bg-orange-600/10 hover:text-orange-400 w-full text-left">
                      <List className="w-4 h-4" />
                      <span>All Articles</span>
                    </button>
                  </Link>
                  <Link href="/articles/new">
                    <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-gray-400 hover:bg-orange-600/10 hover:text-orange-400 w-full text-left">
                      <FilePlus className="w-4 h-4" />
                      <span>Create New</span>
                    </button>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/settings">
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 h-12 text-gray-300 hover:bg-orange-600/10 hover:text-orange-400"
              >
                <Settings className="w-5 h-5" />
                Settings
              </Button>
            </Link>
          </nav>

          {/* User Section */}
          <div className="px-4 py-6 border-t border-gray-800">
            {/* User Info */}
            <div className="px-3 py-2 mb-2">
              <p className="text-sm font-medium text-white truncate">
                {useAuthStore.getState().user?.username || "Admin"}
              </p>
              <p className="text-xs text-gray-400 truncate">
                {useAuthStore.getState().user?.email || "admin@jengatech.com"}
              </p>
              {useAuthStore.getState().user?.is_super_admin && (
                <span className="inline-block mt-1 px-2 py-0.5 bg-amber-500/20 text-amber-500 text-xs rounded-full">
                  Super Admin
                </span>
              )}
            </div>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full justify-start gap-3 h-12 text-gray-300 hover:bg-red-600/10 hover:text-red-400"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 w-72 bg-gray-900 border-r border-gray-800 z-50 lg:hidden">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-6 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-xl font-bold text-white">
                    Jenga<span className="text-orange-600">Tech</span>
                  </h1>
                </div>
                <button onClick={() => setSidebarOpen(false)}>
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <nav className="flex-1 px-4 py-6 space-y-2">
                <Link href="/dashboard" onClick={() => setSidebarOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 h-12 text-gray-300 hover:bg-orange-600/10 hover:text-orange-400"
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    Dashboard
                  </Button>
                </Link>
                
                {/* Articles Dropdown */}
                <div>
                  <button
                    onClick={() => setArticlesExpanded(!articlesExpanded)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-gray-300 hover:bg-orange-600/10 hover:text-orange-400"
                  >
                    <FileText className="w-5 h-5 flex-shrink-0" />
                    <span className="flex-1 text-left">Articles</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        articlesExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Items */}
                  {articlesExpanded && (
                    <div className="mt-1 ml-4 pl-4 border-l border-gray-800 space-y-1">
                      <Link href="/Adminarticles" onClick={() => setSidebarOpen(false)}>
                        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-gray-400 hover:bg-orange-600/10 hover:text-orange-400 w-full text-left">
                          <List className="w-4 h-4" />
                          <span>All Articles</span>
                        </button>
                      </Link>
                      <Link href="/Adminarticles/newpage" onClick={() => setSidebarOpen(false)}>
                        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-gray-400 hover:bg-orange-600/10 hover:text-orange-400 w-full text-left">
                          <FilePlus className="w-4 h-4" />
                          <span>Create New</span>
                        </button>
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/settings" onClick={() => setSidebarOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 h-12 text-gray-300 hover:bg-orange-600/10 hover:text-orange-400"
                  >
                    <Settings className="w-5 h-5" />
                    Settings
                  </Button>
                </Link>
              </nav>

              <div className="px-4 py-6 border-t border-gray-800">
                {/* User Info */}
                <div className="px-3 py-2 mb-2">
                  <p className="text-sm font-medium text-white truncate">
                    {useAuthStore.getState().user?.username || "Admin"}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {useAuthStore.getState().user?.email || "admin@jengatech.com"}
                  </p>
                  {useAuthStore.getState().user?.is_super_admin && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-amber-500/20 text-amber-500 text-xs rounded-full">
                      Super Admin
                    </span>
                  )}
                </div>
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="w-full justify-start gap-3 h-12 text-gray-300 hover:bg-red-600/10 hover:text-red-400"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </Button>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="lg:hidden flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg font-bold text-white">
                Jenga<span className="text-orange-600">Tech</span>
              </h1>
            </div>
            <div className="hidden lg:block">
              <h2 className="text-lg font-semibold text-white">Dashboard</h2>
            </div>
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">A</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

