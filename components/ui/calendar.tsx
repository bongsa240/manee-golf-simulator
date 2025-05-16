"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-0 w-full", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-2 sm:space-x-2 sm:space-y-0 w-full",
        month: "space-y-2 w-full",
        caption: "flex justify-center py-3 relative items-center",
        caption_label: "text-lg font-normal",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 bg-transparent p-0 opacity-70 hover:opacity-100 transition-all duration-200"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse",
        head_row: "flex w-full justify-between",
        head_cell:
          "text-muted-foreground w-11 font-normal text-sm py-2",
        row: "flex w-full justify-between my-1.5",
        cell: "h-11 w-11 text-center text-sm p-0 relative",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-11 w-11 p-0 font-normal rounded-full hover:bg-gray-50 transition-all duration-200"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary/90 text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "font-medium text-primary",
        day_outside:
          "day-outside text-muted-foreground/40 opacity-40 aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground/30",
        day_range_middle:
          "aria-selected:bg-accent/20 aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
