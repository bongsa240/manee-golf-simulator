import { BookingForm } from "@/components/booking-form"
import { CalendarReservation } from "@/components/calendar-reservation"
import { UpcomingReservations } from "@/components/upcoming-reservations"
import { Promotions } from "@/components/promotions"
import { FacilityShowcase } from "@/components/facility-showcase"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manee Golf Simulator</h1>
          <p className="text-gray-500 mt-1">Book and manage your premium golf simulator sessions</p>
        </div>
      </div>

      <div className="mb-8 relative w-full h-[300px] rounded-xl overflow-hidden">
        <Image src="/images/building.png" alt="Manee Residence" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
          <div className="p-8 text-white max-w-lg">
            <h2 className="text-3xl font-bold mb-2">Premium Golf Experience</h2>
            <p className="mb-4">Experience world-class golf simulation in our luxury facility at Manee Residence</p>
            <Button className="bg-[#b08d4c] hover:bg-[#9a7b3e]">Learn More</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Book Reservation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CalendarReservation />
              <BookingForm />
            </div>
          </div>
          <UpcomingReservations />
        </div>
        <div className="space-y-6">
          <Promotions />
          <FacilityShowcase />
        </div>
      </div>
    </div>
  )
}
