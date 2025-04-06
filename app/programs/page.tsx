import CourseCard from "@/components/course-card";

export default function CourseCatalog() {
  // Sample course data - in a real app, this would come from an API or database
  const courses = [
    {
      id: 1,
      title: "New Muslim Classes",
      topic: "Programming",
      description: "Learn the fundamentals of Islam",
      image: "https://i.postimg.cc/QChSh1n9/47fa4537-aff7-44c4-ab7e-a4ad6c8df59d.png",
      level: "Beginner",
      duration: "8 weeks",
      instructor: "Sarah Johnson",
    },
    {
      id: 2,
      title: "Madrassah for kids",
      topic: "Data Science",
      description: "Islamic education for young minds",
      image: "https://i.postimg.cc/c40VT8hb/03257de5-221a-48f5-b854-7f768349561f.png",
      level: "Intermediate",
      duration: "10 weeks",
      instructor: "Michael Chen",
    },
    {
      id: 3,
      title: "Intro to Islam",
      topic: "Design",
      description: "Your road to understanding about Islam",
      image: "https://i.postimg.cc/7ZK3jbz9/bf44cafb-e57a-48f2-9cc4-24c47d3a9074.png",
      level: "Beginner",
      duration: "6 weeks",
      instructor: "Emma Rodriguez",
    },
    {
      id: 4,
      title: "Tafseer Classes",
      topic: "Programming",
      description: "Understand the Quranic verses",
      image: "https://i.postimg.cc/vBj7mmty/bbdc44ad-2e40-4349-9a57-522247a392b6.png",
      level: "Advanced",
      duration: "8 weeks",
      instructor: "David Kim",
    },
    {
      id: 5,
      title: "Friday Youth Nights",
      topic: "Programming",
      description: "Story nights and lectures for the young minds",
      image: "https://i.postimg.cc/90sph9WR/ae9ac9ef-a09e-446b-8448-883d1a8b7709.png",
      level: "Advanced",
      duration: "8 weeks",
      instructor: "David Kim",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Programs at the Masjid</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
