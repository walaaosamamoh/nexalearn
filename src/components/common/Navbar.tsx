import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/home" className="text-2xl font-bold tracking-tight">
          Nexa<span className="text-violet-400">Learn</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/home"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Courses
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden text-sm font-medium text-slate-300 transition hover:text-white sm:block"
          >
            Log in
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
