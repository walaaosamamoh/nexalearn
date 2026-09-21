import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-violet-600 px-6 py-16 text-center sm:px-12">
        
        {/* Background glow */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
            Start your journey
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Ready to start learning?
          </h2>

          <p className="mt-4 text-violet-100">
            Choose a course, build new skills, and keep moving toward your
            goals.
          </p>

          <Link
            to="/courses"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 font-semibold text-violet-700 transition hover:bg-violet-50"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  )
}