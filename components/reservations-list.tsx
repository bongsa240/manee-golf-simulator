"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { CalendarIcon, Clock, Users, X, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

// Mock reservation data
const MOCK_RESERVATIONS = [
  {
    id: "res_1",
    date: new Date(Date.now() + 86400000 * 2), // 2 days from now
    time: "14:00",
    players: 2,
    status: "confirmed",
    location: "Simulator 1",
  },
  {
    id: "res_2",
    date: new Date(Date.now() + 86400000 * 7), // 7 days from now
    time: "10:00",
    players: 1,
    status: "confirmed",
    location: "Simulator 3",
  },
  {
    id: "res_3",
    date: new Date(Date.now() - 86400000 * 3), // 3 days ago
    time: "16:00",
    players: 4,
    status: "completed",
    location: "Simulator 2",
  },
  {
    id: "res_4",
    date: new Date(Date.now() - 86400000 * 10), // 10 days ago
    time: "11:00",
    players: 2,
    status: "completed",
    location: "Simulator 1",
  },
]

export function ReservationsList() {
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

  const upcomingReservations = reservations.filter((res) => res.status === "confirmed")
  const pastReservations = reservations.filter((res) => res.status === "completed")

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#b08d4c]"></div>
      </div>
    )
  }

  return (
    <div>
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-6 grid grid-cols-2 h-auto p-1 bg-[#f5f0e6] rounded-lg w-full max-w-md">
          <TabsTrigger
            value="upcoming"
            className="py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#b08d4c]"
          >
            Upcoming ({upcomingReservations.length})
          </TabsTrigger>
          <TabsTrigger
            value="past"
            className="py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#b08d4c]"
          >
            Past ({pastReservations.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-0">
          {upcomingReservations.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f5f0e6] mb-4">
                <CalendarIcon className="h-8 w-8 text-[#b08d4c]" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">No Upcoming Reservations</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                You don't have any upcoming reservations. Book your first golf simulator session now.
              </p>
              <Button className="bg-[#b08d4c] hover:bg-[#9a7b3e]">Book Now</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingReservations.map((reservation) => (
                <div
                  key={reservation.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">Golf Simulator Session</h3>
                        <p className="text-sm text-gray-500">{format(reservation.date, "EEEE, MMMM d, yyyy")}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 relative mr-2">
                          <Image src="/images/logo.jpeg" alt="Manee Logo" fill className="object-contain" />
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Reschedule</DropdownMenuItem>
                            <DropdownMenuItem>Add to Calendar</DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-red-500"
                              onClick={() => cancelReservation(reservation.id)}
                            >
                              Cancel Booking
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Time</p>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 text-[#b08d4c] mr-1" />
                          <span className="text-sm font-medium">{reservation.time}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Players</p>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 text-[#b08d4c] mr-1" />
                          <span className="text-sm font-medium">{reservation.players}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Location</p>
                        <span className="text-sm font-medium">{reservation.location}</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Status</p>
                        <Badge className="bg-[#f5f0e6] text-[#b08d4c] hover:bg-[#f5f0e6] rounded-full px-2 py-0.5 text-xs">
                          Confirmed
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 border-t border-gray-100">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs h-8 border-gray-200 hover:border-[#b08d4c] hover:text-[#b08d4c]"
                      onClick={() => cancelReservation(reservation.id)}
                    >
                      <X className="h-3 w-3 mr-1" /> Cancel Reservation
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="mt-0">
          {pastReservations.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200 shadow-sm">
              <p className="text-gray-500">You don't have any past reservations.</p>
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-[#f5f0e6]">
                    <th className="text-left p-4 text-sm font-medium text-[#8a6d30]">Date</th>
                    <th className="text-left p-4 text-sm font-medium text-[#8a6d30]">Time</th>
                    <th className="text-left p-4 text-sm font-medium text-[#8a6d30]">Location</th>
                    <th className="text-left p-4 text-sm font-medium text-[#8a6d30]">Players</th>
                    <th className="text-left p-4 text-sm font-medium text-[#8a6d30]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pastReservations.map((reservation) => (
                    <tr key={reservation.id} className="border-b border-gray-200 hover:bg-[#f5f0e6]/20">
                      <td className="p-4 text-sm">{format(reservation.date, "MMM d, yyyy")}</td>
                      <td className="p-4 text-sm">{reservation.time}</td>
                      <td className="p-4 text-sm">{reservation.location}</td>
                      <td className="p-4 text-sm">{reservation.players}</td>
                      <td className="p-4">
                        <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 rounded-full px-2 py-0.5 text-xs">
                          Completed
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
