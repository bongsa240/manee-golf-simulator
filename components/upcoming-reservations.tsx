"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Clock, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Mock reservation data
const MOCK_RESERVATIONS = [
  {
    id: "res_1",
    date: new Date(Date.now() + 86400000 * 2), // 2 days from now
    time: "14:00",
    players: 2,
    status: "confirmed",
  },
  {
    id: "res_2",
    date: new Date(Date.now() + 86400000 * 7), // 7 days from now
    time: "10:00",
    players: 1,
    status: "confirmed",
  },
]

export function UpcomingReservations() {
  const [reservations, setReservations] = useState(MOCK_RESERVATIONS)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const cancelReservation = (id: string) => {
    // In a real app, this would call an API
    setReservations(reservations.filter((res) => res.id !== id))
  }

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Reservations</h2>
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#b08d4c]"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Upcoming Reservations</h2>
        <div className="flex items-center">
          <div className="w-5 h-5 relative mr-2">
          </div>
          <Button variant="outline" size="sm" className="text-sm h-8 text-[#b08d4c] border-[#e8d9bc]">
            View All
          </Button>
        </div>
      </div>

      {reservations.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">You don't have any upcoming reservations.</p>
          <Button className="bg-[#b08d4c] hover:bg-[#9a7b3e]">Book Now</Button>
        </div>
      ) : (
        <div className="space-y-4">
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">Golf Simulator Session</h3>
                  <p className="text-sm text-gray-500">{format(reservation.date, "EEEE, MMMM d, yyyy")}</p>
                </div>
                <Badge className="bg-[#f5f0e6] text-[#b08d4c] hover:bg-[#f5f0e6] rounded-full px-2 py-0.5 text-xs">
                  Confirmed
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{reservation.time}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">
                    {reservation.players} {reservation.players === 1 ? "Player" : "Players"}
                  </span>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:bg-red-50 hover:text-red-600 h-8 text-xs"
                  onClick={() => cancelReservation(reservation.id)}
                >
                  <X className="h-3 w-3 mr-1" /> Cancel
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
