
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
  BarChart,
  Upload,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: BarChart },
  { name: "Uploads", href: "/admin/uploads", icon: Upload },
  { name: "Clients", href: "/admin/clients", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-900 border-r">
        <div className="p-4 border-b">
          <Link to="/admin/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-coach-500 flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-xl font-semibold">CoachAssist</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.href
                  ? "bg-coach-100 text-coach-700 dark:bg-coach-900 dark:text-coach-300"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="p-4 border-t mt-auto">
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile header */}
        <header className="md:hidden bg-white dark:bg-gray-900 border-b p-4">
          <div className="flex items-center justify-between">
            <Link to="/admin/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-coach-500 flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-xl font-semibold">CoachAssist</span>
            </Link>
            <ThemeToggle />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
