"use client";

import { useEffect, useState } from "react";

// Sample prayer times (in a real app, you would fetch these from an API)
const SAMPLE_PRAYER_TIMES = {
  fajr: "05:12",
  sunrise: "06:43",
  dhuhr: "12:30",
  asr: "15:45",
  maghrib: "18:22",
  isha: "19:52",
};

type PrayerName = "fajr" | "sunrise" | "dhuhr" | "asr" | "maghrib" | "isha";
type PrayerTimes = Record<PrayerName, string>;

interface PrayerTimeItemProps {
  name: string;
  time: string;
  isCurrent: boolean;
  isNext: boolean;
}

function PrayerTimeItem({ name, time, isCurrent, isNext }: PrayerTimeItemProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center px-2 py-1 
        ${isCurrent ? "bg-green-700" : ""}
        ${isNext ? "bg-green-300" : ""}`}>
      <span
        className={`text-xs uppercase tracking-wider
          ${isCurrent ? "font-bold text-white" : ""}
          ${isNext ? "font-medium text-white" : ""}
        `}>
        {name}
      </span>
      <span
        className={`text-sm
          ${isCurrent ? "font-bold text-white" : ""}
          ${isNext ? "font-medium text-white" : ""}
        `}>
        {time}
      </span>
    </div>
  );
}

export function PrayerTimesBar() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [currentPrayer, setCurrentPrayer] = useState<PrayerName | null>(null);
  const [nextPrayer, setNextPrayer] = useState<PrayerName | null>(null);
  const [countdown, setCountdown] = useState<string>("");
  const [location, setLocation] = useState<string>("Brisbane, Australia");

  // Convert prayer times to Date objects for comparison
  const getPrayerTimeAsDate = (timeString: string): Date => {
    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  // Determine current and next prayer
  useEffect(() => {
    const updatePrayerStatus = () => {
      const now = new Date();
      setCurrentTime(now);

      const prayerEntries = Object.entries(SAMPLE_PRAYER_TIMES) as [PrayerName, string][];
      const prayerTimes = prayerEntries.map(([name, time]) => ({
        name,
        time,
        date: getPrayerTimeAsDate(time),
      }));

      // Sort by time
      prayerTimes.sort((a, b) => a.date.getTime() - b.date.getTime());

      // Find current prayer (the last prayer that has passed)
      let current: PrayerName | null = null;
      let next: PrayerName | null = null;

      for (let i = 0; i < prayerTimes.length; i++) {
        if (now >= prayerTimes[i].date) {
          current = prayerTimes[i].name;
          next = prayerTimes[(i + 1) % prayerTimes.length].name;
        }
      }

      // If no prayer has passed today, the current is the last from yesterday
      // and next is the first of today
      if (!current) {
        current = prayerTimes[prayerTimes.length - 1].name;
        next = prayerTimes[0].name;
      }

      setCurrentPrayer(current);
      setNextPrayer(next);

      // Calculate countdown to next prayer
      const nextPrayerTime = SAMPLE_PRAYER_TIMES[next||'fajr'];
      const nextPrayerDate = getPrayerTimeAsDate(nextPrayerTime);

      // If next prayer is tomorrow (e.g., current is Isha, next is Fajr)
      if (nextPrayerDate <= now) {
        nextPrayerDate.setDate(nextPrayerDate.getDate() + 1);
      }

      const diffMs = nextPrayerDate.getTime() - now.getTime();
      const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
      const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

      setCountdown(`${diffHrs}h ${diffMins}m`);
    };

    updatePrayerStatus();
    const interval = setInterval(updatePrayerStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur">
      {/* <div className="flex flex-col px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-slate-500" />
          <span className="text-xs text-slate-500">{formatDate(currentTime)}</span>
          <span className="text-xs font-medium">{formatTime(currentTime)}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-slate-500" />
          <span className="text-xs">{location}</span>
          {nextPrayer && (
            <Badge variant="secondary" className="ml-2 text-xs">
              Next: {countdown}
            </Badge>
          )}
        </div>
      </div> */}

      <div className="relative flex justify-between p-2">
        {Object.entries(SAMPLE_PRAYER_TIMES).map(([name, time]) => (
          <PrayerTimeItem
            key={name}
            name={name}
            time={time}
            isCurrent={name === currentPrayer}
            isNext={name === nextPrayer}
          />
        ))}
      </div>
    </div>
  );
}
