import { useState } from "react"
import { Menu } from "lucide-react"
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
                <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 border border-white/40 shadow-lg">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">メニューを開く</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] bg-white/95 backdrop-blur-lg">
                <nav className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-gray-800 text-center font-medium border border-gray-200 shadow-md"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar