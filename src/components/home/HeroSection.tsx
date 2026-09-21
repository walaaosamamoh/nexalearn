import { Link } from "react-router-dom";
import learnImage from "../../assets/images/learn.png";

export default function HeroSection() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:px-12 lg:py-20">
      <div className="max-w-xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Learn with purpose
        </p>
        <h1 className="max-w-lg text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Build skills for your{" "}
          <span className="text-violet-400">next chapter.</span>
        </h1>
        <p className="mt-7 max-w-md text-base leading-7 text-slate-300 sm:text-lg">
          Discover practical courses, learn from inspiring experts, and turn
          small moments of study into meaningful progress.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center rounded-xl bg-violet-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:bg-violet-400"
          >
            Explore courses <span className="ml-2 text-lg">-&gt;</span>
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
          >
            Start learning
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm text-slate-400">
          <span>
            <strong className="text-xl text-white">Practical</strong>
            <span className="ml-2">courses</span>
          </span>

          <span>
            <strong className="text-xl text-white">Flexible</strong>
            <span className="ml-2">learning</span>
          </span>

          <span>
            <strong className="text-xl text-white">Trackable</strong>
            <span className="ml-2">progress</span>
          </span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
        <div className="absolute inset-8 -z-10 rounded-[3rem] bg-cyan-400/10 blur-3xl" />
        <img
          src={learnImage}
          alt="Student ready to learn with books and a pen"
          className="h-auto w-full object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
