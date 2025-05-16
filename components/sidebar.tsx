"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Home, CalendarDays, Settings, LogOut, Menu, X } from "lucide-react"

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
  const [isOpen, setIsOpen] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Desktop sidebar content
  const SidebarContent = () => (
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
  )

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-30 md:hidden">
        <div className="flex items-center justify-between h-full px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 relative">
              <Image src="/images/logo.jpeg" alt="Manee Golf Simulator" fill className="object-contain" />
            </div>
            <div>
              <span className="text-base font-bold text-[#b08d4c]">Manee</span>
              <span className="text-xs text-gray-500 block -mt-1">Golf Simulator</span>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/30" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
        
        {/* Mobile Sidebar */}
        <div className="fixed top-0 left-0 bottom-0 w-64 bg-white overflow-y-auto">
          <SidebarContent />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-white border-r border-gray-200 h-screen">
        <SidebarContent />
      </div>
    </>
  )
}
