
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
  MessageCircle,
  Home,
  CreditCard,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { name: "Portal Home", href: "/portal", icon: Home },
  { name: "AI Coach", href: "/ai-coach", icon: MessageCircle },
  { name: "Subscription", href: "/subscription-plans", icon: CreditCard },
  { name: "Settings", href: "/client/settings", icon: Settings },
];

export function ClientLayout({ children }: ClientLayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-900 border-r">
        <div className="p-4 border-b">
          <Link to="/portal" className="flex items-center space-x-2">
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

      {/* Mobile header */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white dark:bg-gray-900 border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                className="md:hidden" 
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <Link to="/portal" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-coach-500 flex items-center justify-center">
                  <span className="text-white font-bold">C</span>
                </div>
                <span className="text-xl font-semibold">CoachAssist</span>
              </Link>
            </div>
            <ThemeToggle />
          </div>
          
          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <nav className="mt-4 space-y-1 md:hidden">
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
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              ))}
              <Button variant="ghost" size="sm" className="w-full justify-start text-red-500 mt-4">
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </Button>
            </nav>
          )}
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
