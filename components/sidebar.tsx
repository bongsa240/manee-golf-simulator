"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, CalendarDays, Clock, Users, Settings, HelpCircle, LogOut } from "lucide-react"

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    name: "Reservations",
    href: "/reservations",
    icon: <CalendarDays className="h-5 w-5" />,
  },
  {
    name: "Admin",
    href: "/admin",
    icon: <Settings className="h-5 w-5" />,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <div className="h-full flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-gray-200">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 relative">
              <Image src="/images/logo.jpeg" alt="Manee Golf Simulator" fill className="object-contain" />
            </div>
            <div>
              <span className="text-lg font-bold text-[#b08d4c]">Manee</span>
              <span className="text-sm text-gray-500 block -mt-1">Golf Simulator</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-[#f5f0e6] text-[#b08d4c]"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link
            href="/logout"
            className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  )
}
