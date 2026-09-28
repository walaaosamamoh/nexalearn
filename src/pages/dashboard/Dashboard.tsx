import { useQuery } from "@apollo/client/react";
import { Link } from "react-router-dom";

import { useAuthStore } from "../../stores/authStore";
import { GET_MY_COURSES } from "../../graphql/queries/myCourses";
import { GET_COURSES } from "../../graphql/queries/courses";

import type { GetMyCoursesData, GetCoursesData } from "../../graphql/types";

import CourseCard from "../../components/courses/courseCard";

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);

  const {
    data: myCoursesData,
    loading: myCoursesLoading,
    error: myCoursesError,
  } = useQuery<GetMyCoursesData>(GET_MY_COURSES, {
    variables: {
      userId: user?.id,
    },
    skip: !user?.id,
  });

  const { data: coursesData, loading: coursesLoading } =
    useQuery<GetCoursesData>(GET_COURSES);

  if (myCoursesLoading) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <p className="text-slate-400">Loading your dashboard...</p>
      </div>
    );
  }

  if (myCoursesError) {
    return (
      <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
        <p className="text-red-400">
          Something went wrong while loading your courses.
        </p>
      </div>
    );
  }

  const myCourses = myCoursesData?.myCourses ?? [];

  const coursesWithProgress = myCourses.map((item) => {
    const totalLessons = item.course.lessons.length;
    const completedLessons = item.completedLessons.length;

    const progress =
      totalLessons > 0
        ? Math.round((completedLessons / totalLessons) * 100)
        : 0;

    return {
      ...item,
      progress,
    };
  });

  const enrolledCourseIds = new Set(myCourses.map((item) => item.course.id));

  const recommendedCourses =
    coursesData?.courses
      .filter((course) => !enrolledCourseIds.has(course.id))
      .slice(0, 3) ?? [];

  const continueCourse =
    coursesWithProgress.find((item) => item.progress > 0 && item.progress < 100) ??
    coursesWithProgress[0];

  const completedCourses = coursesWithProgress.filter(
    (item) => item.progress === 100,
  ).length;

  const averageProgress =
    coursesWithProgress.length > 0
      ? Math.round(
          coursesWithProgress.reduce((total, item) => total + item.progress, 0) /
            coursesWithProgress.length,
        )
      : 0;

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Welcome */}
      <section>
        <p className="text-sm text-slate-400">Welcome back 👋</p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-white">
          Good evening, <span className="text-violet-400">{user?.name}</span>
        </h1>

        <p className="mt-2 max-w-xl text-slate-400">
          Keep learning and make progress toward your goals.
        </p>
      </section>

      {/* Continue + Progress */}
      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* Continue Learning */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/3">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-violet-400">
                  Continue Learning
                </p>

                <h2 className="mt-1 text-2xl font-semibold text-white">
                  {continueCourse
                    ? continueCourse.course.title
                    : "Start your learning journey"}
                </h2>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 sm:flex">
                <span className="text-xl">▶</span>
              </div>
            </div>

            {continueCourse ? (
              <div className="mt-6 flex flex-col gap-6 sm:flex-row">
                <img
                  src={continueCourse.course.image}
                  alt={continueCourse.course.title}
                  className="h-40 w-full rounded-xl object-cover sm:h-32 sm:w-52"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      {continueCourse.course.instructor}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-slate-400">Progress</span>

                      <span className="font-medium text-white">
                        {continueCourse.progress}%
                      </span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-violet-500 transition-all"
                        style={{
                          width: `${continueCourse.progress}%`,
                        }}
                      />
                    </div>
                  </div>

                  <Link
                    to={`/learn/${continueCourse.course.id}`}
                    className="mt-5 inline-flex w-fit rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400"
                  >
                    Continue Learning
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-8">
                <p className="text-slate-400">
                  You haven't enrolled in a course yet.
                </p>

                <Link
                  to="/courses"
                  className="mt-5 inline-flex rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400"
                >
                  Explore Courses
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Progress Summary */}
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
          <p className="text-sm font-medium text-violet-400">Your Progress</p>

          <div className="mt-6">
            <div className="flex items-end justify-between">
              <span className="text-4xl font-bold text-white">
                {averageProgress}%
              </span>

              <span className="text-sm text-slate-400">overall progress</span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-400 transition-all"
                style={{
                  width: `${averageProgress}%`,
                }}
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/3 p-4">
              <p className="text-2xl font-semibold text-white">
                {myCourses.length}
              </p>
              <p className="mt-1 text-sm text-slate-400">Enrolled</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/3 p-4">
              <p className="text-2xl font-semibold text-white">
                {completedCourses}
              </p>
              <p className="mt-1 text-sm text-slate-400">Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* My Courses */}
      <section>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-violet-400">Your Learning</p>

            <h2 className="mt-1 text-2xl font-semibold text-white">
              My Courses
            </h2>
          </div>

          {myCourses.length > 0 && (
            <Link
              to="/my-courses"
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              View all
            </Link>
          )}
        </div>

        {myCourses.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-10 text-center">
            <p className="text-slate-400">
              You haven't enrolled in any courses yet.
            </p>

            <Link
              to="/courses"
              className="mt-4 inline-block text-sm font-medium text-violet-400 hover:text-violet-300"
            >
              Browse courses →
            </Link>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coursesWithProgress.map((item) => (
              <CourseCard
                key={item.course.id}
                {...item.course}
                progress={item.progress}
                enrolled
              />
            ))}
          </div>
        )}
      </section>

      {/* Recommended */}
      <section>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-violet-400">
              Keep Exploring
            </p>

            <h2 className="mt-1 text-2xl font-semibold text-white">
              Recommended for You
            </h2>
          </div>

          <Link
            to="/courses"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            Browse all
          </Link>
        </div>

        {coursesLoading ? (
          <p className="mt-6 text-slate-400">Loading recommendations...</p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
