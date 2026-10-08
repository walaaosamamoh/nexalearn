import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown")) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
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
            className="hidden md:block rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            Dashboard
          </NavLink>
        ) : (
          <div className="hidden md:flex items-center gap-3">
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

        {/* mobile menu navigation */}
        <div className="md:hidden dropdown">
          <button
            onClick={() => setOpenMenu((prev) => !prev)}
            className="rounded-xl bg-violet-500 p-2 text-white transition hover:bg-violet-400"
          >
            <Menu className="w-5 h-5" />
          </button>
          {openMenu && (
            <div className="absolute z-50 right-4 mt-3 w-48 overflow-hidden border border-white/10 bg-slate-900 rounded-xl shadow-xl">
              <div className="py-2">
                <NavLink
                  to="/home"
                  onClick={() => setOpenMenu(false)}
                  className="block px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/courses"
                  onClick={() => setOpenMenu(false)}
                  className="block px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white"
                >
                  Courses
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={() => setOpenMenu(false)}
                  className="block px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={() => setOpenMenu(false)}
                  className="block px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white"
                >
                  Contact
                </NavLink>
              </div>
              <div className="border-t border-white/10 py-2">
                {user ? (
                  <NavLink
                    to="/dashboard"
                    onClick={() => setOpenMenu(false)}
                    className="block px-4 py-2 text-sm font-medium text-violet-400 transition hover:bg-slate-700"
                  >
                    Dashboard
                  </NavLink>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      onClick={() => setOpenMenu(false)}
                      className="block px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white"
                    >
                      Log in
                    </NavLink>

                    <NavLink
                      to="/register"
                      onClick={() => setOpenMenu(false)}
                      className="block px-4 py-2 text-sm font-medium text-violet-400 transition hover:bg-slate-700"
                    >
                      Get started
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
