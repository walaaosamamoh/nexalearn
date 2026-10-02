import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, Award } from "lucide-react";

const links = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "My Courses", path: "/my-courses", icon: BookOpen },
  { name: "Certificates", path: "/certificates", icon: Award },
];

interface Props {
    isOpen: boolean
}

export default function Sidebar({isOpen}:Props) {
  return (
    <div className={`${isOpen? ' w-64': 'w-0'} lg:w-64 shrink-0 overflow-hidden border-r border-r-white/10 transition-all duration-500`}>
      <div className="w-64 p-6 h-full">
        <NavLink to="/dashboard" className="text-white text-2xl font-bold">
          Nexa<span className="text-violet-400">Learn</span>
        </NavLink>

        <nav className="mt-10 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-violet-500 text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon className="h-5 w-5" />
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
