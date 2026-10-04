import { useQuery } from "@apollo/client/react";
import { GET_MY_COURSES } from "../../graphql/queries/myCourses";
import type { GetMyCoursesData } from "../../graphql/types";
import { useAuthStore } from "../../stores/authStore";
import CourseCard from "../../components/courses/courseCard";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MyCourses() {
  const user = useAuthStore((state) => state.user);
  const { data, loading, error } = useQuery<GetMyCoursesData>(GET_MY_COURSES, {
    variables: { userId: user?.id },
  });
  const [activeTab, setActiveTab] = useState("all");

  const coursesWithProgress =
    data?.myCourses.map((item) => {
      const totalLessons = item.course.lessons.length;
      const completedLessons = item.completedLessons.length;

      const progress =
        totalLessons > 0
          ? Math.round((completedLessons / totalLessons) * 100)
          : 0;

      return {
        ...item.course,
        progress,
      };
    }) ?? [];

  const filteredCourses = coursesWithProgress.filter((course) => {
    if (activeTab === "in-progress") return course.progress < 100;
    if (activeTab === "completed") return course.progress === 100;
    return true;
  });

  if (loading) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <p className="text-slate-400">Loading your courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
        <p className="text-red-400">
          Something went wrong while loading your courses.
        </p>
      </div>
    );
  }


  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          My Courses
        </h1>

        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          Continue learning and keep making progress.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${activeTab === "all" ? "bg-violet-500 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
        >
          All Courses
        </button>

        <button
          onClick={() => setActiveTab("in-progress")}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${activeTab === "in-progress" ? "bg-violet-500 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
        >
          In Progress
        </button>

        <button
          onClick={() => setActiveTab("completed")}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${activeTab === "completed" ? "bg-violet-500 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
        >
          Completed
        </button>
      </div>

      {filteredCourses.length === 0 ? (
        <div className="flex min-h-60 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/40">
          <div className="max-w-md text-center">
            <div className="mb-4 text-4xl">📚</div>
            <h2 className="text-xl font-semibold text-white">
              {activeTab === "all"
                ? "No courses yet"
                : activeTab === "in-progress"
                  ? "No courses in progress"
                  : "No completed courses yet"}
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              {activeTab === "all"
                ? "You haven’t enrolled in any courses yet. Start learning by exploring new topics."
                : activeTab === "in-progress"
                  ? "Your in-progress courses will appear here once you start learning."
                  : "Completed courses will show up here after you finish them."}
            </p>

            {activeTab === "all" ? (
              <Link
                to="/courses"
                className="mt-5 inline-block rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400"
              >
                Explore Courses
              </Link>
            ) : (
              <button
                onClick={() => setActiveTab("all")}
                className="mt-5 rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400"
              >
                View all courses
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} enrolled />
          ))}
        </div>
      )}
    </div>
  );
}
