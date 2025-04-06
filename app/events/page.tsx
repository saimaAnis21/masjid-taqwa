import Calendar from "@/components/calendar";

export default function Page() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Event Calendar</h1>
        <Calendar />
      </div>
    </main>
  );
}
