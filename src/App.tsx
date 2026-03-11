import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Info from "./pages/Info";
import Imprint from "./pages/Imprint";
import ArtistStatement from "./pages/ArtistStatement";
import WorkDetail from "./pages/WorkDetail";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.PROD ? '/ab-art-replica/' : '/'}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/statement/:slug" element={<ArtistStatement />} />
          <Route path="/info" element={<Info />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
