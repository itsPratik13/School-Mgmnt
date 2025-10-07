"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function EventCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      modifiers={{
        today:new Date(),
        past:(day)=>day<new Date(),
        weekend:(day)=>day.getDay()===0||day.getDay()===6,
      }}
      modifiersClassNames={{
        today:"bg-[#C3EBFA] rounded-full font-bold",
        selected:"bg-[#8884d8] rounded-full border-none",
        past:"text-gray-400",
        weekend:"text-red-700"
      }}
      className="w-full max-w-full h-fit lg:max-w-[400px]  rounded-md border shadow-sm bg-white font"
      captionLayout="dropdown"
    />
  );
}
