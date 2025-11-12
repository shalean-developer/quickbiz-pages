import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Directory from "./pages/Directory";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import BusinessPage from "./pages/BusinessPage";
import Sites from "./pages/Sites";
import SiteLanding from "./pages/SiteLanding";
import NotFound from "./pages/NotFound";
import FreeTemplate from "./pages/templates/FreeTemplate";
import FeaturedTemplate from "./pages/templates/FeaturedTemplate";
import PremiumTemplate from "./pages/templates/PremiumTemplate";
import SetupServiceTemplate from "./pages/templates/SetupServiceTemplate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/biz/:slug" element={<BusinessPage />} />
          <Route path="/business/:slug" element={<BusinessPage />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/sites/:slug" element={<SiteLanding />} />
          <Route path="/template/free" element={<FreeTemplate />} />
          <Route path="/template/featured" element={<FeaturedTemplate />} />
          <Route path="/template/premium" element={<PremiumTemplate />} />
          <Route path="/template/setup-service" element={<SetupServiceTemplate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
