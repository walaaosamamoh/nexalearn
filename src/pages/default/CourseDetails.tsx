import { Link, useParams } from "react-router-dom";
import { GET_COURSE } from "../../graphql/queries/course";
import { useQuery } from "@apollo/client/react";
import type { GetCourseData } from "../../graphql/types";

export default function CourseDetails() {
  const { id } = useParams();

  const { data, loading, error } = useQuery<GetCourseData>(GET_COURSE, {variables:{id}, skip: !id,})
  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <p className="text-center text-slate-400">Loading course...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <p className="text-center text-red-400">
          Something went wrong. Please try again.
        </p>
      </main>
    );
  }

  const course = data?.course;

  if (!course) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Course not found</h1>

          <Link
            to="/courses"
            className="mt-6 inline-flex rounded-xl bg-violet-500 px-5 py-3 font-semibold text-white transition hover:bg-violet-400"
          >
            Back to Courses
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
            <img
              src={course.image}
              alt={course.title}
              className="aspect-video h-full w-full object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {course.category}
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              {course.title}
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-300">
              {course.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
                <p className="text-xs text-slate-500">Instructor</p>
                <p className="mt-1 text-sm font-medium text-white">
                  {course.instructor}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
                <p className="text-xs text-slate-500">Level</p>
                <p className="mt-1 text-sm font-medium text-white">
                  {course.level}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
                <p className="text-xs text-slate-500">Duration</p>
                <p className="mt-1 text-sm font-medium text-white">
                  {course.duration}
                </p>
              </div>
            </div>

            <Link
              to={`/learn/${course.id}`}
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-violet-500 px-6 py-3.5 font-semibold text-white transition hover:bg-violet-400 sm:w-auto"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Course Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              What you'll learn
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {course.whatYoullLearn.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900 p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-sm text-violet-400">
                  ✓
                </span>

                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course content */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-bold text-white">Course Content</h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
          {course.lessons.map((lesson, index) => (
            <div
              key={lesson}
              className="flex items-center gap-4 border-b border-white/10 p-5 last:border-b-0"
            >
              <span className="text-sm font-semibold text-violet-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-sm font-medium text-slate-200">
                {lesson}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
