import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavigationBar from "@/components/NavigationBar"
import Footer from "@/components/Footer"
import Index from "./pages/Index"
import Team from "./pages/Team"

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