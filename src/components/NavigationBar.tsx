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
    { title: "TALENT", path: "/team" },
    { title: "NEWS", path: "/news" },
    { title: "AUDITION", path: "/moderators" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-sm bg-white/5 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white hover:opacity-80 transition-opacity">
            oshi.fan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white hover:opacity-80 transition-opacity text-sm font-medium tracking-wider"
              >
                {item.title}
              </Link>
            ))}
            <Link
              to="https://shop.oshi.fan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00B7EE] text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              OFFICIAL SHOP
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 text-white hover:opacity-80 transition-opacity">
                <Menu className="h-6 w-6" />
                <span className="sr-only">メニューを開く</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors text-lg"
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  to="https://shop.oshi.fan"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-[#00B7EE] text-white rounded-md text-lg text-center"
                >
                  OFFICIAL SHOP
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar