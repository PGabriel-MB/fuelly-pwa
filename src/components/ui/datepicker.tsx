"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export type DatePickerProps = {
  label: string,
  withLabel?: boolean,
  placeholder?: string,
  value?: Date,
  onChange?: (date: Date | undefined) => void
}

export function DatePicker({ label, value, onChange, withLabel, placeholder }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(value);


  return (
    <div className="flex flex-col gap-3">
      {
        withLabel ??
        (<label htmlFor="date" className="px-1 text-red-500">
          {label}
        </label>)
      }
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="border-red-200">
          <Button
            variant="outline"
            id="date"
            className="w-full justify-between font-normal text-red-300 hover:text-red-400"
          >
            {date ? date.toLocaleDateString() : placeholder || "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            className="text-red-500"
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              onChange?.(date);
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
