import { Outlet } from "react-router-dom"
import Navbar from "../components/common/Navbar"

export default function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

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