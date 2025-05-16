"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Home, CalendarDays, Clock, Users, Settings, HelpCircle, LogOut, Menu, X, Globe } from "lucide-react"

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('mobile-sidebar')
      const menuButton = document.getElementById('mobile-menu-button')
      
      if (sidebar && 
          mobileMenuOpen && 
          !sidebar.contains(event.target as Node) && 
          menuButton && 
          !menuButton.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const renderSidebarContent = () => (
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
        
        {/* Language Selector - Hairline separator */}
        <div className="mt-2 pt-2 border-t border-gray-200">
          <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700">
            <Globe className="h-4 w-4" />
            <span>Language</span>
          </div>
          <div className="flex justify-center space-x-3 px-3 mt-1">
            <button
              onClick={() => setSelectedLanguage("en")}
              className={cn(
                "text-2xl rounded p-1 transition-all",
                selectedLanguage === "en" ? "ring-2 ring-[#b08d4c] ring-offset-1 bg-gray-100" : "hover:bg-gray-100"
              )}
              aria-label="English"
              title="English"
            >
              🇬🇧
            </button>
            <button
              onClick={() => setSelectedLanguage("lo")}
              className={cn(
                "text-2xl rounded p-1 transition-all",
                selectedLanguage === "lo" ? "ring-2 ring-[#b08d4c] ring-offset-1 bg-gray-100" : "hover:bg-gray-100"
              )}
              aria-label="Lao"
              title="ລາວ (Lao)"
            >
              🇱🇦
            </button>
            <button
              onClick={() => setSelectedLanguage("ko")}
              className={cn(
                "text-2xl rounded p-1 transition-all",
                selectedLanguage === "ko" ? "ring-2 ring-[#b08d4c] ring-offset-1 bg-gray-100" : "hover:bg-gray-100"
              )}
              aria-label="Korean"
              title="한국어 (Korean)"
            >
              🇰🇷
            </button>
            <button
              onClick={() => setSelectedLanguage("zh")}
              className={cn(
                "text-2xl rounded p-1 transition-all",
                selectedLanguage === "zh" ? "ring-2 ring-[#b08d4c] ring-offset-1 bg-gray-100" : "hover:bg-gray-100"
              )}
              aria-label="Chinese"
              title="中文 (Chinese)"
            >
              🇨🇳
            </button>
          </div>
        </div>
      </nav>

      {/* Logout Button */}
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
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-30 px-4 flex items-center justify-between">
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
          id="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/30 z-40" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <aside 
        id="mobile-sidebar"
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {renderSidebarContent()}
      </aside>

      {/* Desktop Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
        {renderSidebarContent()}
      </aside>
    </>
  )
}
