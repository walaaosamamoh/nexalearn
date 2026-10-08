import { ChevronDown, LogOut, Menu, Settings, User } from "lucide-react";
import { useAuthStore } from "../../stores/authStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onMenuClick: () => void;
}

export default function DashboardHeader({ onMenuClick }: Props) {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  return (
    <header className="border-b border-white/10 px-6 py-4 sm:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={onMenuClick} className="cursor-pointer lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <div className="dropdown relative">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-white/5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 font-semibold text-white">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <ChevronDown
              className={`hidden h-4 w-4 text-slate-400 transition sm:block ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-3 w-64 overflow-hidden border border-white/10 bg-slate-900 rounded-xl shadow-xl">
              <div className="border-b border-white/10 p-4">
                <p className="font-medium">{user?.name}</p>
                <p className="text-slate-400 text-sm mt-1 truncate">
                  {user?.email}
                </p>
              </div>

              {/* Links */}
              <div className="p-2">
                <button
                  onClick={() => {navigate("/profile"); setIsOpen(false);}}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  <User className="h-4 w-4" />
                  Profile
                </button>

                <button
                  onClick={() => {navigate("/settings"); setIsOpen(false);}}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </button>
              </div>

              {/* Logout */}
              <div className="border-t border-white/10 p-2">
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-400 transition hover:bg-red-400/10"
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
