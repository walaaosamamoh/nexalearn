import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/home" className="text-2xl font-bold tracking-tight">
          Nexa<span className="text-violet-400">Learn</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive ? "text-violet-400" : "text-slate-300 hover:text-white"
              }`
            }
            // className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive ? "text-violet-400" : "text-slate-300 hover:text-white"
              }`
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive ? "text-violet-400" : "text-slate-300 hover:text-white"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive ? "text-violet-400" : "text-slate-300 hover:text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Actions */}
        {user ? (
          <NavLink
            to="/dashboard"
            className="rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            Dashboard
          </NavLink>
        ) : (
          <div className="flex items-center gap-3">
            <NavLink
              to="/login"
              className="hidden text-sm font-medium text-slate-300 transition hover:text-white sm:block"
            >
              Log in
            </NavLink>

            <NavLink
              to="/register"
              className="rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              Get started
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
