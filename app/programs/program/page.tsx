
export default function Course() {
  const course = {
      id: 2,
      title: "Weekend Madrassah for kids",
      topic: "Data Science",
      description: "Islamic education for young minds",
      image: "https://i.postimg.cc/c40VT8hb/03257de5-221a-48f5-b854-7f768349561f.png",
      level: "Intermediate",
      days: "Saturday",
      timings:"10:00 am - 01:00 pm"
    };
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-justify mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-green-700">{course.title}</h1>
        <div className="text-muted-foreground">{course.description}</div>
        <div>{course.level}</div>
      </div>
    </div>
  );
}
