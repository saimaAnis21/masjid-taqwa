import { cn } from "@/lib/utils";

interface EventProps {
  event: {
    id: number;
    title: string;
    startTime: string;
    endTime: string;
    color: string;
  };
}

export default function EventTag({ event }: EventProps) {
  // Format time from 24h to 12h format
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = Number.parseInt(hours, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  return (
    <div
      className={cn(
        "px-2 py-1 text-xs rounded-md border truncate cursor-pointer hover:opacity-90",
        event.color
      )}
      title={`${event.title}: ${formatTime(event.startTime)} - ${formatTime(event.endTime)}`}>
      <div className="font-medium truncate">{event.title}</div>
      <div className="text-xs opacity-80">
        {formatTime(event.startTime)} - {formatTime(event.endTime)}
      </div>
    </div>
  );
}
