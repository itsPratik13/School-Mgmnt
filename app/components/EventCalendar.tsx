"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";

export function EventCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // temporary
  const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
  <div className="bg-white  rounded-md">
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
   className="w-full max-w-full h-fit  rounded-md  shadow-sm bg-white font"
   captionLayout="dropdown"
 />
 <div className="flex items-center justify-between">
  <h1 className="text-xl font-semibold my-4 ">Events</h1>
  <Image src="/moreDark.png" alt="" width={20} height={20}/>

 </div>
 <div className="flex flex-col gap-4">
  {events.map(event=>(
    <div className="p-5 rounded-md border-gray-100 border-t-4 odd:border-t-[#CFCEFF] even:border-t-[#FAE27C]" key={event.id}>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-gray-600">{event.title}</h1>
        <span className="text-sm text-gray-600">{event.time}</span>

      </div>
      <p className="text-sm mt-2 text-gray-600">{event.description}</p>
    </div>
  ))}


 </div>

  </div>
  
  );
}
