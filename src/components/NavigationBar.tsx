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
    { title: "ホーム", path: "/" },
    { title: "運営チーム", path: "/team" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          oshi.fan
        </Link>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 hover:bg-white/20 rounded-md transition-colors">
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
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default NavigationBar