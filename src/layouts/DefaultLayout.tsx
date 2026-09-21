import { Outlet } from "react-router-dom"

export default function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <a href="/home" className="text-2xl font-bold">
            Nexa<span className="text-violet-400">Learn</span>
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/home"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Home
            </a>

            <a
              href="/courses"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Courses
            </a>

            <a
              href="/about"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              About
            </a>

            <a
              href="/contact"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Auth */}
          <a
            href="/login"
            className="rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-semibold transition hover:bg-violet-400"
          >
            Login
          </a>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-1 min-h-screen overflow-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="shrink-0 border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-violet-400">NexaLearn</span>
            {" "}· Learn. Grow. Achieve.
          </p>
        </div>
      </footer>
    </div>
  )
}