"use client";
{/*used fullcalendar.io */}
import { CurrentCalendarEvents } from "../lib/data";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function CalendarComponent() {
  return (
    <div style={{ padding: "1rem" }}>
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        initialDate={new Date()} // force it to show current date/week
        events={CurrentCalendarEvents}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        slotMinTime="08:00:00"
        slotMaxTime="17:00:00"
        allDaySlot={false}
        nowIndicator={true}
        slotDuration="1:00:00"
        eventMinHeight={60}
        eventBackgroundColor="none"
        
      />
    </div>
  );
}
