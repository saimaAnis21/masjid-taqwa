"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import EventTag from "./event-tag";

// Sample recurring event
const recurringEvents = [
  {
    id: 1,
    title: "Youth Night",
    dayOfWeek: 5, // Friday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    startTime: "19:30",
    endTime: "21:00",
    color: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    id: 2,
    title: "Madrassah",
    dayOfWeek: 6, // Friday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    startTime: "10:00",
    endTime: "13:00",
    color: "bg-green-100 text-purple-800 border-purple-200",
  },
];

// Sample one-time events (you can add more)
const oneTimeEvents = [
  {
    id: 101,
    title: "Community Lunch",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 27), // 15th of current month
    startTime: "18:00",
    endTime: "19:30",
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);

  // Get current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Day names for header
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Month names for header
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Generate calendar days for the month
  useEffect(() => {
    const days: Date[] = [];

    // First day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

    // Last day of the month
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    // Get the day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Add days from previous month to fill the first week
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push(new Date(currentYear, currentMonth - 1, prevMonthLastDay - i));
    }

    // Add all days of the current month
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      days.push(new Date(currentYear, currentMonth, day));
    }

    // Add days from next month to fill the last week
    const remainingDays = 42 - days.length; // 6 rows of 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push(new Date(currentYear, currentMonth + 1, day));
    }

    setCalendarDays(days);
  }, [currentMonth, currentYear]);

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Navigate to current month
  const goToCurrentMonth = () => {
    setCurrentDate(new Date());
  };

  // Check if a date has events
  const getEventsForDate = (date: Date) => {
    const events = [];

    // Check for recurring events
    recurringEvents.forEach((event) => {
      if (event.dayOfWeek === date.getDay()) {
        events.push(event);
      }
    });

    // Check for one-time events
    oneTimeEvents.forEach((event) => {
      if (
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
      ) {
        events.push(event);
      }
    });

    return events;
  };

  // Check if a date is today
  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Check if a date is in the current month
  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Calendar header */}
      <div className="p-4 flex items-center justify-between bg-white border-b">
        <h2 className="text-xl font-semibold text-gray-800">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={goToCurrentMonth}
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
            Today
          </button>
          <button
            onClick={goToPreviousMonth}
            className="p-1 rounded-full hover:bg-gray-100 disabled:hidden"
            disabled={currentMonth=== new Date().getMonth()}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={goToNextMonth} className="p-1 rounded-full hover:bg-gray-100">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 bg-gray-50">
        {/* Day headers */}
        {dayNames.map((day, index) => (
          <div key={index} className="py-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 border-t">
        {calendarDays.map((date, index) => {
          const events = getEventsForDate(date);
          return (
            <div
              key={index}
              className={cn(
                "min-h-[100px] p-1 border-b border-r relative",
                isCurrentMonth(date) ? "bg-white" : "bg-gray-50 text-gray-400"
              )}>
              <div className="flex justify-between items-start">
                <span
                  className={cn(
                    "inline-flex h-6 w-6 items-center justify-center text-sm",
                    isToday(date) && "bg-rose-500 text-white rounded-full"
                  )}>
                  {date.getDate()}
                </span>
              </div>

              {/* Events */}
              <div className="mt-1 space-y-1">
                {events.map((event) => (
                  <EventTag key={`${event.id}-${date.getDate()}`} event={event} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
