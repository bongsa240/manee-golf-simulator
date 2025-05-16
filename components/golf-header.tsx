import Link from "next/link"
import { GolfIcon } from "@/components/golf-icon"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function GolfHeader() {
  return (
    <header className="bg-white border-b border-gray-100 py-4 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <GolfIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-green-800 font-['var(--font-serif)']">GolfSim</span>
              <span className="text-sm text-gray-500 block -mt-1">Reservations</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reservations"
                    className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                  >
                    My Reservations
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700 rounded-full px-6">Sign In</Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}
