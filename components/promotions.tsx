import { Clock, Users, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const PROMOTIONS = [
  {
    title: "Early Bird Special",
    description: "20% off all bookings before 10 AM",
    icon: <Clock className="h-4 w-4 text-[#b08d4c]" />,
    color: "bg-[#f5f0e6] border-[#e8d9bc]",
  }
]

export function Promotions() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Current Promotions</h2>
        <div className="w-6 h-6 relative">
        </div>
      </div>
      <div className="space-y-3">
        {PROMOTIONS.map((promo, index) => (
          <div key={index} className={`flex items-start space-x-3 p-3 rounded-md border ${promo.color}`}>
            <div className="mt-0.5">{promo.icon}</div>
            <div>
              <h5 className="font-medium text-gray-800 text-sm">{promo.title}</h5>
              <p className="text-xs text-gray-600">{promo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
