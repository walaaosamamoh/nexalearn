import { useNavigate } from "react-router-dom";
import GlassCard from "../components/ui/GlassCard";

export default function Welcome() {
    const navigate = useNavigate()
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />

      <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center p-6">
        <GlassCard className="w-full max-w-xl p-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
            Welcome to
          </p>

          <h1 className="text-5xl font-bold tracking-tight">
            Nexa<span className="text-violet-400">Learn</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-slate-300">
            Learn new skills, track your progress, and grow at your own pace.
          </p>

          <button onClick={()=> navigate('/home')} className="mt-8 rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400">
            Explore Courses
          </button>
        </GlassCard>
      </div>
    </main>
  );
}
