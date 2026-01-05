import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// App pages
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/app/Dashboard";
import Demandes from "./pages/app/Demandes";
import NouvelleDemande from "./pages/app/NouvelleDemande";
import DemandeDetail from "./pages/app/DemandeDetail";
import Kanban from "./pages/app/Kanban";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Marketing pages */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />

          {/* App pages with layout */}
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="demandes" element={<Demandes />} />
            <Route path="demandes/nouvelle" element={<NouvelleDemande />} />
            <Route path="demandes/:id" element={<DemandeDetail />} />
            <Route path="kanban" element={<Kanban />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
