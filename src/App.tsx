import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Photography from "./pages/Photography";
import Literature from "./pages/Literature";
import Contact from "./pages/Contact";
import TextDetail from "./pages/TextDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-mim" element={<About />} />
          <Route path="/fotografia" element={<Photography />} />
          <Route path="/literatura" element={<Literature />} />
          <Route path="/meus-contos" element={<Literature />} />
          <Route path="/resenha-critica" element={<Literature />} />
          <Route path="/literatura/meus-contos" element={<Literature />} />
          <Route path="/literatura/resenha-critica" element={<Literature />} />
          <Route path="/literatura/:textId" element={<TextDetail />} />
          <Route path="/literatura/resenha/:textId" element={<TextDetail />} />
          <Route path="/contato" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
