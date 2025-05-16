"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon, Clock, Users, MessageSquare, BarChart3, Settings, Building } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Mock data for admin dashboard
const MOCK_BOOKINGS = [
  {
    id: "book_1",
    customerName: "John Smith",
    customerPhone: "+1 555-123-4567",
    date: new Date(Date.now() + 86400000 * 1), // tomorrow
    time: "14:00",
    players: 2,
    status: "confirmed",
  },
  {
    id: "book_2",
    customerName: "Sarah Johnson",
    customerPhone: "+1 555-987-6543",
    date: new Date(Date.now() + 86400000 * 1), // tomorrow
    time: "16:00",
    players: 1,
    status: "confirmed",
  },
  {
    id: "book_3",
    customerName: "Mike Williams",
    customerPhone: "+1 555-456-7890",
    date: new Date(Date.now() + 86400000 * 2), // day after tomorrow
    time: "10:00",
    players: 4,
    status: "confirmed",
  },
]

export function AdminDashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [activeTab, setActiveTab] = useState("bookings")

  // Filter bookings for the selected date
  const filteredBookings = MOCK_BOOKINGS.filter(
    (booking) =>
      selectedDate &&
      booking.date.getDate() === selectedDate.getDate() &&
      booking.date.getMonth() === selectedDate.getMonth() &&
      booking.date.getFullYear() === selectedDate.getFullYear(),
  )

  const sendWhatsAppReminder = (booking: (typeof MOCK_BOOKINGS)[0]) => {
    // In a real app, this would call the WhatsApp API
    alert(`Reminder sent to ${booking.customerName} at ${booking.customerPhone}`)
  }

  return (
    <Tabs defaultValue="bookings" onValueChange={setActiveTab} className="w-full">
      <TabsList className="mb-8 grid grid-cols-2 h-auto p-1 bg-[#f5f0e6] rounded-lg w-full max-w-md mx-auto">
        <TabsTrigger
          value="bookings"
          className="py-3 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#b08d4c]"
        >
          <div className="flex flex-col items-center">
            <CalendarIcon className="h-5 w-5 mb-1" />
            <span>Bookings</span>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="analytics"
          className="py-3 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#b08d4c]"
        >
          <div className="flex flex-col items-center">
            <BarChart3 className="h-5 w-5 mb-1" />
            <span>Analytics</span>
          </div>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="bookings" className="space-y-8 mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-gray-100 rounded-xl overflow-hidden">
            <CardHeader className="pb-2 bg-[#f5f0e6] border-b border-[#e8d9bc]">
              <CardTitle className="text-lg font-medium text-[#8a6d30]">Today's Bookings</CardTitle>
              <CardDescription>{format(new Date(), "MMMM d, yyyy")}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-[#b08d4c] flex items-baseline">
                {
                  MOCK_BOOKINGS.filter(
                    (b) =>
                      b.date.getDate() === new Date().getDate() &&
                      b.date.getMonth() === new Date().getMonth() &&
                      b.date.getFullYear() === new Date().getFullYear(),
                  ).length
                }
                <span className="text-sm text-gray-500 ml-2 font-normal">reservations</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-100 rounded-xl overflow-hidden">
            <CardHeader className="pb-2 bg-[#f5f0e6] border-b border-[#e8d9bc]">
              <CardTitle className="text-lg font-medium text-[#8a6d30]">Weekly Bookings</CardTitle>
              <CardDescription>Last 7 days</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-[#b08d4c] flex items-baseline">
                {MOCK_BOOKINGS.length}
                <span className="text-sm text-gray-500 ml-2 font-normal">reservations</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-100 rounded-xl overflow-hidden">
            <CardHeader className="pb-2 bg-[#f5f0e6] border-b border-[#e8d9bc]">
              <CardTitle className="text-lg font-medium text-[#8a6d30]">Utilization</CardTitle>
              <CardDescription>Available slots booked</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-[#b08d4c] flex items-baseline">
                65%
                <span className="text-sm text-gray-500 ml-2 font-normal">capacity</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="md:col-span-1 border-gray-100 rounded-xl overflow-hidden">
            <CardHeader className="pb-2 bg-[#f5f0e6] border-b border-[#e8d9bc]">
              <CardTitle className="text-lg font-medium text-[#8a6d30]">Select Date</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border-0"
              />
            </CardContent>
          </Card>

          <Card className="md:col-span-3 border-gray-100 rounded-xl overflow-hidden">
            <CardHeader className="pb-2 bg-[#f5f0e6] border-b border-[#e8d9bc]">
              <CardTitle className="text-lg font-medium text-[#8a6d30]">
                Bookings for {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "Today"}
              </CardTitle>
              <CardDescription>{filteredBookings.length} bookings found</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {filteredBookings.length === 0 ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f5f0e6] mb-4">
                    <CalendarIcon className="h-8 w-8 text-[#b08d4c]" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">No Bookings</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">There are no bookings for this date.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="border border-gray-100 rounded-lg p-5 hover:bg-[#f5f0e6]/10 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-medium text-lg text-gray-800">{booking.customerName}</h3>
                        <div className="text-sm text-[#b08d4c] bg-[#f5f0e6] px-3 py-1 rounded-full">
                          {booking.customerPhone}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[#f5f0e6] flex items-center justify-center mr-3">
                            <Clock className="h-4 w-4 text-[#b08d4c]" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Time</p>
                            <p className="font-medium">{booking.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[#f5f0e6] flex items-center justify-center mr-3">
                            <Users className="h-4 w-4 text-[#b08d4c]" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Players</p>
                            <p className="font-medium">{booking.players}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-[#b08d4c] border-[#e8d9bc] hover:bg-[#f5f0e6] rounded-lg"
                          onClick={() => sendWhatsAppReminder(booking)}
                        >
                          <MessageSquare className="h-4 w-4 mr-1" /> Send Reminder
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="analytics">
        <Card className="border-gray-100 rounded-xl overflow-hidden">
          <CardHeader className="pb-2 bg-[#f5f0e6] border-b border-[#e8d9bc]">
            <CardTitle className="text-lg font-medium text-[#8a6d30]">Analytics Dashboard</CardTitle>
            <CardDescription>View booking statistics and trends</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center py-16 px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f5f0e6] mb-4">
                <BarChart3 className="h-8 w-8 text-[#b08d4c]" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                Detailed analytics would be displayed here with charts showing booking trends, popular time slots, and
                revenue data.
              </p>
              <Button className="bg-[#b08d4c] hover:bg-[#9a7b3e] rounded-lg px-6">View Full Analytics</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
