import { Mail, User } from "lucide-react";
import { useAuthStore } from "../../stores/authStore";

export default function Profile() {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Profile
        </h1>

        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          Manage your personal information.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-500/10 text-3xl font-bold text-violet-400">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <h2 className="mt-4 text-xl font-semibold text-white">
              {user?.name}
            </h2>

            <p className="mt-1 text-sm text-slate-400">Student</p>

            <p className="mt-3 text-sm text-slate-500">{user?.email}</p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-white">
            Personal Information
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Full Name
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950 px-4 py-3">
                <User className="h-5 w-5 text-slate-500" />

                <span className="text-sm text-white">{user?.name}</span>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">Email</label>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950 px-4 py-3">
                <Mail className="h-5 w-5 text-slate-500" />

                <span className="text-sm text-white">{user?.email}</span>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">Role</label>

              <div className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3">
                <span className="text-sm text-white">Student</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
