import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="shrink-0 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Link to="/home" className="text-xl font-bold text-white">
              Nexa<span className="text-violet-400">Learn</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
              Learn new skills, grow at your own pace, and keep moving forward.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm">Explore</h3>
            <div className="flex flex-col text-slate-400 text-sm gap-3 mt-4">
              <Link to="/home" className="hover:text-white transition">
                Home
              </Link>
              <Link to="/courses" className="hover:text-white  transition">
                Courses
              </Link>
              <Link to="/about" className="hover:text-white  transition">
                About
              </Link>
              <Link to="/contact" className="hover:text-white  transition">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm">Account</h3>
            <div className="flex flex-col text-slate-400 text-sm gap-3 mt-4">
              <Link to="/home" className="hover:text-white transition">
                Login
              </Link>
              <Link to="/courses" className="hover:text-white  transition">
                Create an account
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-400">NexaLearn</span>
            {" "}· Learn. Grow. Achieve.
          </p>
        </div>
      </div>
    </footer>
  );
}
