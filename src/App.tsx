
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/theme-provider";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import Uploads from "./pages/admin/Uploads";
import Clients from "./pages/admin/Clients";
import Settings from "./pages/admin/Settings";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ClientPortal from "./pages/client/ClientPortal";
import AICoach from "./pages/client/AICoach";
import SubscriptionPlans from "./pages/client/SubscriptionPlans";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="coach-ai-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public pages */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/subscription-plans" element={<SubscriptionPlans />} />
            
            {/* Admin routes */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/uploads" element={<Uploads />} />
            <Route path="/admin/clients" element={<Clients />} />
            <Route path="/admin/settings" element={<Settings />} />
            
            {/* Client routes */}
            <Route path="/portal" element={<ClientPortal />} />
            <Route path="/ai-coach" element={<AICoach />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
