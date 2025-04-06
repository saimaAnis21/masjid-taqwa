import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

// Sample announcement data for a masjid
const announcements = [
  {
    id: 1,
    title: "Ramadan Prayer Schedule",
    details:
      "Taraweeh prayers will begin at 9:00 PM every night during Ramadan. Qiyam-ul-Layl will be held during the last 10 nights starting at 11:30 PM.",
    date: new Date("2025-03-30T18:00:00"),
    category: "Prayer Times",
  },
  {
    id: 2,
    title: "Jummah Prayer Time Change",
    details:
      "Starting next week, Jummah prayer will be held at 1:30 PM instead of 1:15 PM due to seasonal time changes.",
    date: new Date("2025-04-01T10:00:00"),
    category: "Prayer Times",
  },
  {
    id: 3,
    title: "Weekly Quran Tafseer classes",
    details:
      "Join us every Wednesday after Isha prayer for our weekly Quran study circle. This week we will continue with Surah Al-Baqarah.",
    date: new Date("2025-03-31T20:30:00"),
    category: "Education",
  },
  {
    id: 4,
    title: "Community Iftar Gathering",
    details:
      "The masjid will be hosting a community iftar this Saturday. Please bring a dish to share with the community. Iftar will be at 7:45 PM.",
    date: new Date("2025-03-28T08:15:00"),
    category: "Community",
  },
  {
    id: 5,
    title: "Zakat and Sadaqah Drive",
    details:
      "Our annual Ramadan charity drive has begun. Please donate generously to help those in need in our community and abroad.",
    date: new Date("2025-03-25T09:00:00"),
    category: "Charity",
  },
  {
    id: 6,
    title: "Eid Prayer Announcement",
    details:
      "Eid prayer will be held at the community park this year. Two sessions: 7:30 AM and 9:00 AM. Please bring your prayer mats.",
    date: new Date("2025-04-03T12:00:00"),
    category: "Events",
  },
];

export default function AnnouncementsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-green-700">Masjid Announcements</h1>
        <p className="text-muted-foreground mt-2">
          Stay updated with the latest news and events from our community
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="overflow-hidden border-green-100">
            <CardHeader className="pb-2 border-b border-green-100">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{announcement.title}</CardTitle>
                  <CardDescription>
                    {formatDistanceToNow(announcement.date, { addSuffix: true })}
                  </CardDescription>
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                  {announcement.category}
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p>{announcement.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
