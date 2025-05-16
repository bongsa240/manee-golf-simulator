import { AdminDashboard } from "@/components/admin-dashboard"
import { Button } from "@/components/ui/button"
import { Plus, Settings } from "lucide-react"
import Image from "next/image"

export default function AdminPage() {
  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center">
          <div className="w-10 h-10 relative mr-3">
            <Image src="/images/logo.jpeg" alt="Manee Logo" fill className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage bookings, users, and system settings</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-[#e8d9bc] text-[#b08d4c] hover:bg-[#f5f0e6]">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <AdminDashboard />
    </div>
  )
}
