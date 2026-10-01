import { useMutation, useQuery } from "@apollo/client/react";
import { ArrowLeft, Check, ChevronRight, Clock, Play } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import { GET_COURSE } from "../../graphql/queries/course";
import { GET_MY_COURSES } from "../../graphql/queries/myCourses";
import { COMPLETE_LESSON } from "../../graphql/mutations/completeLesson";

import type {
  EnrollCourseData,
  GetCourseData,
  GetMyCoursesData,
} from "../../graphql/types";

import { useAuthStore } from "../../stores/authStore";

export default function Learning() {
  const { id } = useParams();

  const user = useAuthStore((state) => state.user);

  const [currentLesson, setCurrentLesson] = useState(0);

  // Get course
  const { data, loading, error } = useQuery<GetCourseData>(GET_COURSE, {
    variables: { id },
  });

  // Get user's enrolled courses
  const { data: myCoursesData, loading: myCoursesLoading } =
    useQuery<GetMyCoursesData>(GET_MY_COURSES, {
      variables: {
        userId: user?.id,
      },
    });

  // Complete lesson mutation
  const [completeLesson, { loading: completeLoading }] =
    useMutation<EnrollCourseData>(COMPLETE_LESSON);

  if (loading || myCoursesLoading) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <p className="text-slate-400">Loading your course...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
        <p className="text-red-400">
          Something went wrong while loading your course.
        </p>
      </div>
    );
  }

  const course = data?.course;

  if (!course) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-400">Course not found.</p>
      </div>
    );
  }

  // Find this course in the user's enrolled courses
  const enrollment = myCoursesData?.myCourses.find(
    (item) => item.course.id === course.id,
  );

  // Completed lessons
  const completedLessons = enrollment?.completedLessons ?? [];

  const totalLessons = course.lessons.length;

  const completedCount = completedLessons.length;

  const progress =
    totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  // Check if current lesson is completed
  const currentLessonName = course.lessons[currentLesson];

  const isCurrentLessonCompleted = completedLessons.includes(currentLessonName);

  // Complete current lesson
  const handleCompleteLesson = async () => {
    if (!user || !course) return;

    if (isCurrentLessonCompleted) return;

    await completeLesson({
      variables: {
        userId: user.id,
        courseId: course.id,
        lesson: currentLessonName,
      },

      refetchQueries: [
        {
          query: GET_MY_COURSES,
          variables: {
            userId: user.id,
          },
        },
      ],
    });
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* Back */}
      <Link
        to="/dashboard"
        className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>

      {/* Course Header */}
      <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/3">
        <div className="grid lg:grid-cols-[1.5fr_1fr]">
          {/* Course Info */}
          <div className="p-6 sm:p-8 lg:p-10">
            <span className="inline-flex rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
              {course.category}
            </span>

            <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {course.title}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              {course.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <span>{course.instructor}</span>

              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {course.duration}
              </span>

              <span>{course.level}</span>
            </div>
          </div>

          {/* Course Image */}
          <div className="h-56 lg:h-full">
            <img
              src={course.image}
              alt={course.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Learning Area */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        {/* Lesson Content */}
        <section>
          <div className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
            {/* Lesson Header */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-violet-400">
                  Lesson {currentLesson + 1}
                </p>

                <h2 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                  {currentLessonName}
                </h2>
              </div>

              <span className="hidden rounded-lg bg-violet-500/10 px-3 py-2 text-xs font-medium text-violet-400 sm:block">
                {currentLesson + 1} of {totalLessons}
              </span>
            </div>

            {/* Video Placeholder */}
            <div className="mt-8 flex aspect-video items-center justify-center rounded-xl bg-slate-900">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500 text-white transition hover:bg-violet-400">
                <Play className="ml-1 h-7 w-7 fill-current" />
              </button>
            </div>

            {/* Lesson Description */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white">
                About this lesson
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Learn the fundamentals of React and understand how React
                applications are structured. You'll explore components,
                rendering, and the core concepts you'll use throughout the
                course.
              </p>
            </div>

            {/* Complete Button */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <button
                onClick={handleCompleteLesson}
                disabled={completeLoading || isCurrentLessonCompleted}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isCurrentLessonCompleted ? (
                  <>
                    <Check className="h-4 w-4" />
                    Completed
                  </>
                ) : completeLoading ? (
                  "Saving..."
                ) : (
                  "Mark Lesson as Complete"
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside>
          <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/3 p-5">
            {/* Progress */}
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">
                    Course Progress
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {completedCount} of {totalLessons} lessons completed
                  </p>
                </div>

                <span className="text-lg font-semibold text-violet-400">
                  {progress}%
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-violet-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Lessons */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-white">
                Course Content
              </h3>

              <div className="mt-4 space-y-2">
                {course.lessons.map((lesson, index) => {
                  const isCurrent = currentLesson === index;
                  const isCompleted = completedLessons.includes(lesson);

                  return (
                    <button
                      key={lesson}
                      onClick={() => setCurrentLesson(index)}
                      className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${
                        isCurrent
                          ? "bg-violet-500/10 text-white"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {/* Status */}
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          isCompleted
                            ? "bg-emerald-500/10 text-emerald-400"
                            : isCurrent
                              ? "bg-violet-500 text-white"
                              : "bg-slate-800 text-slate-500"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="h-4 w-4" />
                        ) : isCurrent ? (
                          <Play className="h-3.5 w-3.5 fill-current" />
                        ) : (
                          <span className="text-xs font-medium">
                            {index + 1}
                          </span>
                        )}
                      </div>

                      {/* Lesson Name */}
                      <span className="min-w-0 flex-1 text-sm font-medium">
                        {lesson}
                      </span>

                      <ChevronRight className="h-4 w-4 shrink-0 opacity-50" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
