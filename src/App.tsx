import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavigationBar from "@/components/NavigationBar"
import Footer from "@/components/Footer"
import Index from "./pages/Index"
import Team from "./pages/Team"
import About from "./pages/About"
import News from "./pages/News"
import Moderators from "./pages/Moderators"
import Privacy from "./pages/Privacy"
import FAQ from "./pages/FAQ"
import Guidelines from "./pages/Guidelines"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen w-full flex flex-col">
          <NavigationBar />
          <main className="pt-16 flex-grow">
            <div className="container mx-auto px-4">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/team" element={<Team />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/moderators" element={<Moderators />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/guidelines" element={<Guidelines />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App