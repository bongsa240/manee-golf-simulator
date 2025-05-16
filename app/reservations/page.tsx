import { ReservationsList } from "@/components/reservations-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ReservationsPage() {
  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Reservations</h1>
          <p className="text-gray-500 mt-1">View and manage your upcoming golf simulator sessions</p>
        </div>
        <Button className="bg-[#b08d4c] hover:bg-[#9a7b3e]">
          <Plus className="h-4 w-4 mr-2" />
          New Booking
        </Button>
      </div>

      <ReservationsList />
    </div>
  )
}
