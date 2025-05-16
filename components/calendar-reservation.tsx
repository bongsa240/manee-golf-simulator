"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { format, isSameDay, startOfToday } from "date-fns"
import { Clock } from "lucide-react"

const OPENING_HOUR = 8 // 8 AM
const CLOSING_HOUR = 20 // 8 PM

type TimeSlot = {
  time: string
  available: boolean
}

export function CalendarReservation() {
  const today = startOfToday()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(today)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  // Generate time slots for the selected date
  const generateTimeSlots = (date: Date): TimeSlot[] => {
    const slots: TimeSlot[] = []
    const isToday = isSameDay(date, today)

    for (let hour = OPENING_HOUR; hour < CLOSING_HOUR; hour++) {
      // If it's today, only show future time slots
      if (isToday && hour < new Date().getHours()) {
        continue
      }

      // Mock availability - randomly mark some slots as unavailable
      const available = Math.random() > 0.3

      slots.push({
        time: `${hour}:00`,
        available,
      })
    }

    return slots
  }

  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : []

  return (
    <div className="space-y-5 mx-auto py-2">
      <div className="flex items-center justify-between">
        <h3 className="text-base text-gray-700">Select Date</h3>
        {selectedDate && <span className="text-sm text-gray-500">{format(selectedDate, "MMMM d, yyyy")}</span>}
      </div>

      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        disabled={{ before: today }}
        className="bg-white -mx-2 w-[calc(100%+16px)]"
      />

      {selectedDate && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base text-gray-700">Select Time</h3>
            <span className="text-xs text-gray-500 flex items-center">
              <Clock className="h-3 w-3 inline mr-1" />
              {OPENING_HOUR}:00 - {CLOSING_HOUR}:00
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2.5 -mx-1">
            {timeSlots.map((slot) => (
              <Button
                key={slot.time}
                variant={selectedTime === slot.time ? "default" : "ghost"}
                className={cn(
                  "h-11 text-sm rounded-full transition-all duration-200",
                  !slot.available && "opacity-40 cursor-not-allowed",
                  selectedTime === slot.time && "bg-[#b08d4c] hover:bg-[#9a7b3e]",
                )}
                disabled={!slot.available}
                onClick={() => setSelectedTime(slot.time)}
              >
                {slot.time}
              </Button>
            ))}
          </div>
        </div>
      )}

      {selectedTime && (
        <div className="mt-4 py-2 text-sm">
          <p className="text-[#8a6d30] font-medium flex items-center">
            <span className="inline-block w-4 h-4 bg-[#b08d4c] rounded-full text-white flex items-center justify-center mr-2 text-[10px]">
              ✓
            </span>
            Selected: {format(selectedDate!, "MMM d")} at {selectedTime}
          </p>
        </div>
      )}
    </div>
  )
}
