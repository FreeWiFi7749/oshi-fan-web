import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { title: "ABOUT", path: "/about" },
    { title: "TEAM", path: "/team" },
    { title: "NEWS", path: "/news" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-sm bg-white/5 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white hover:opacity-80 transition-opacity">
            oshi.fan
          </Link>

          <div className="flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 text-sm font-medium tracking-wider border border-white/40 shadow-lg backdrop-blur-sm"
              >
                {item.title}
              </Link>
            ))}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button 
                  className="relative p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 border border-white/40 shadow-lg group"
                >
                  <Menu className={`h-6 w-6 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100'}`} />
                  <X className={`h-6 w-6 absolute top-2 left-2 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                  <span className="sr-only">メニューを開く</span>
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-[600px] bg-white transition-all duration-500 ease-out"
              >
                <div className="flex h-full">
                  <div className="w-1/2 p-8 flex flex-col justify-center">
                    <nav className="flex flex-col gap-8">
                      {menuItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="text-6xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div 
                    className="hidden sm:block w-1/2 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/placeholder.svg')",
                      backgroundSize: 'cover',
                    }}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar