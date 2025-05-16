// This component is no longer used, but I'm keeping it in case you want to add it back later
import { Users, Clock, CalendarDays } from "lucide-react"

export function BookingStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase">Today's Bookings</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-1">12</h3>
          </div>
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            <CalendarDays className="h-5 w-5 text-green-600" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <span className="text-green-600 font-medium">+8%</span>
          <span className="text-gray-500 ml-2">from last week</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase">Total Hours</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-1">248</h3>
          </div>
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            <Clock className="h-5 w-5 text-green-600" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <span className="text-green-600 font-medium">+12%</span>
          <span className="text-gray-500 ml-2">from last month</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase">Active Members</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-1">86</h3>
          </div>
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            <Users className="h-5 w-5 text-green-600" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <span className="text-green-600 font-medium">+5%</span>
          <span className="text-gray-500 ml-2">from last month</span>
        </div>
      </div>
    </div>
  )
}
