import { Search, BookOpen, ChartNoAxesColumnIncreasing } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose a Course",
    description:
      "Explore courses by topic, skill level, and category to find the right one for your goals.",
    icon: Search,
  },
  {
    number: "02",
    title: "Start Learning",
    description:
      "Follow lessons at your own pace and build practical skills through structured learning.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Track Your Progress",
    description:
      "Monitor completed lessons, course progress, and your learning journey from your dashboard.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

export default function HowItWorks() {
  return (
    <section className="border-y border-white/10 bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start learning in three simple steps.
          </h2>

          <p className="mt-4 text-slate-400">
            From choosing your course to tracking your progress, NexaLearn keeps
            your learning journey simple and focused.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-white/10 md:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              {/* Number */}
              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-violet-400/30 bg-slate-950 text-sm font-bold text-violet-300 shadow-lg shadow-violet-950/20">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mt-6 flex justify-center">
                <div className="flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-violet-400" />
                </div>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
