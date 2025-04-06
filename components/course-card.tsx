import Image from "next/image";
import Link from "next/link";
import { Clock, User, BookOpen } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Course {
  id: number;
  title: string;
  topic: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  instructor: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`} className="block h-full">
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
        <div className="relative h-48 w-full">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={`${course.title} thumbnail`}
            fill
            className="object-cover"
            priority={false}
          />
        </div>
        <CardContent className="pt-6">
          {/* <Badge className="mb-2">{course.topic}</Badge> */}
          <h2 className="text-xl font-semibold mb-2 line-clamp-2">{course.title}</h2>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{course.description}</p>

          {/* <div className="flex items-center text-sm text-muted-foreground mb-2">
            <BookOpen className="h-4 w-4 mr-2" />
            <span>{course.level}</span>
          </div> */}

          {/* <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Clock className="h-4 w-4 mr-2" />
            <span>{course.duration}</span>
          </div> */}
        </CardContent>

        {/* <CardFooter className="border-t pt-4 flex items-center">
          <User className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-sm">{course.instructor}</span>
        </CardFooter> */}
      </Card>
    </Link>
  );
}
