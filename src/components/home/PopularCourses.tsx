import { Link } from "react-router-dom"
import CourseCard from "../courses/courseCard"


export default function PopularCourses() {
  const courses = [
    {
      title: "Modern React Development",
      category: "Development",
      instructor: "Alex Morgan",
      level: "Intermediate",
      duration: "8 hours",
      image: "/courses/react.jpg",
    },
    {
      title: "UI/UX Design Fundamentals",
      category: "Design",
      instructor: "Sarah Wilson",
      level: "Beginner",
      duration: "6 hours",
      image: "/courses/uiux.jpg",
    },
    {
      title: "TypeScript for Beginners",
      category: "Development",
      instructor: "Daniel Lee",
      level: "Beginner",
      duration: "5 hours",
      image: "/courses/typescript.jpg",
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      {/* Section header */}
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Learn something new
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Popular Courses
          </h2>

          <p className="mt-3 max-w-xl text-slate-400">
            Explore courses designed to help you build practical skills and
            keep moving forward.
          </p>
        </div>

        <Link
          to="/courses"
          className="hidden shrink-0 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 sm:block"
        >
          View All Courses
        </Link>
      </div>

      {/* Courses */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>

      {/* Mobile button */}
      <div className="mt-8 text-center sm:hidden">
        <Link
          to="/courses"
          className="inline-flex rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
        >
          View All Courses
        </Link>
      </div>
    </section>
  )
}