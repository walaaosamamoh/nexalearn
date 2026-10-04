export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            About NexaLearn
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl">
            Learning should move you forward.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            NexaLearn is a modern learning platform designed to make it easier
            to discover useful courses, build practical skills, and stay
            consistent with your learning goals.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Simple, practical, and focused.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <span className="text-2xl">🎯</span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Learn with Purpose
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Focus on skills and knowledge that can help you grow
                personally and professionally.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <span className="text-2xl">📚</span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Learn at Your Pace
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Follow structured courses while keeping control over when and
                how you learn.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <span className="text-2xl">📈</span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Track Your Progress
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Keep track of your learning journey and see how far you've
                come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              The Platform
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Everything you need to keep learning.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              From discovering courses to following lessons and monitoring
              your progress, NexaLearn brings the essential parts of your
              learning journey together in one place.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <h3 className="font-semibold text-white">Course Discovery</h3>
              <p className="mt-2 text-sm text-slate-400">
                Find courses that match your interests and skill level.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <h3 className="font-semibold text-white">Structured Learning</h3>
              <p className="mt-2 text-sm text-slate-400">
                Follow lessons in a clear and organized learning path.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <h3 className="font-semibold text-white">Personal Dashboard</h3>
              <p className="mt-2 text-sm text-slate-400">
                Keep your courses and learning activity in one place.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <h3 className="font-semibold text-white">Progress Tracking</h3>
              <p className="mt-2 text-sm text-slate-400">
                See your progress and completed learning activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}