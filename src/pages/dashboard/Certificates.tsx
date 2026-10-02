import { useQuery } from "@apollo/client/react";
import { Award, Calendar, Eye } from "lucide-react";
import { Link } from "react-router-dom";

import { GET_MY_COURSES } from "../../graphql/queries/myCourses";
import type { GetMyCoursesData } from "../../graphql/types";
import { useAuthStore } from "../../stores/authStore";

export default function Certificates() {
  const user = useAuthStore((state) => state.user);

  const { data, loading, error } = useQuery<GetMyCoursesData>(
    GET_MY_COURSES,
    {
      variables: {
        userId: user?.id,
      },
    },
  );

  if (loading) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <p className="text-slate-400">Loading your certificates...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
        <p className="text-red-400">
          Something went wrong while loading your certificates.
        </p>
      </div>
    );
  }

  const completedCourses =
    data?.myCourses.filter((item) => {
      const totalLessons = item.course.lessons.length;
      const completedLessons = item.completedLessons.length;

      return (
        totalLessons > 0 &&
        completedLessons === totalLessons
      );
    }) ?? [];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          My Certificates
        </h1>

        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          Celebrate the courses you've successfully completed.
        </p>
      </div>

      {/* Empty State */}
      {completedCourses.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10">
            <Award className="h-7 w-7 text-violet-400" />
          </div>

          <h2 className="mt-5 text-xl font-semibold text-white">
            No certificates yet
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Complete a course to earn your first certificate.
          </p>

          <Link
            to="/courses"
            className="mt-6 inline-block rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-400"
          >
            Explore Courses
          </Link>
        </div>
      ) : (
        /* Certificates */
        <div className="grid gap-6 md:grid-cols-2">
          {completedCourses.map((item) => (
            <div
              key={item.course.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
            >
              {/* Certificate Header */}
              <div className="flex items-center justify-center bg-violet-500/10 p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10">
                  <Award className="h-8 w-8 text-violet-400" />
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <p className="text-sm font-medium text-violet-400">
                  Certificate of Completion
                </p>

                <h2 className="mt-2 text-xl font-semibold text-white">
                  {item.course.title}
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Completed by {user?.name}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="h-4 w-4" />
                  <span>Course completed</span>
                </div>

                <button
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  <Eye className="h-4 w-4" />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}