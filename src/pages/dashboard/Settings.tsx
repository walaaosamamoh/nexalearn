import { useState } from "react";
import { Bell, Lock, LogOut, Mail, User } from "lucide-react";
import { useAuthStore } from "../../stores/authStore";

export default function Settings() {
  const logout = useAuthStore((state) => state.logout);

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [learningReminders, setLearningReminders] = useState(true);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Settings
        </h1>

        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          Manage your preferences and account settings.
        </p>
      </div>

      <div className="max-w-3xl space-y-6">
        {/* Notifications */}
        <section className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
              <Bell className="h-5 w-5 text-violet-400" />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Notifications
              </h2>

              <p className="text-sm text-slate-400">
                Choose how you want to stay updated.
              </p>
            </div>
          </div>

          <div className="mt-6 divide-y divide-white/10">
            {/* Email Notifications */}
            <div className="flex items-center justify-between gap-4 py-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-slate-500" />

                <div>
                  <p className="text-sm font-medium text-white">
                    Email notifications
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Receive updates about your courses.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setEmailNotifications((prev) => !prev)
                }
                aria-pressed={emailNotifications}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                  emailNotifications
                    ? "bg-violet-500"
                    : "bg-slate-700"
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                    emailNotifications
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </button>
            </div>

            {/* Learning Reminders */}
            <div className="flex items-center justify-between gap-4 py-4">
              <div className="flex items-start gap-3">
                <Bell className="mt-0.5 h-5 w-5 text-slate-500" />

                <div>
                  <p className="text-sm font-medium text-white">
                    Learning reminders
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Get reminders to continue your courses.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setLearningReminders((prev) => !prev)
                }
                aria-pressed={learningReminders}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                  learningReminders
                    ? "bg-violet-500"
                    : "bg-slate-700"
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                    learningReminders
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </section>

        {/* Account */}
        <section className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
              <User className="h-5 w-5 text-cyan-400" />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Account
              </h2>

              <p className="text-sm text-slate-400">
                Manage your account settings.
              </p>
            </div>
          </div>

          <div className="mt-6 divide-y divide-white/10">
            {/* Change Password */}
            <button
              type="button"
              className="flex w-full items-center justify-between py-4 text-left transition hover:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-slate-500" />

                <div>
                  <p className="text-sm font-medium text-white">
                    Change password
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Update your account password.
                  </p>
                </div>
              </div>

              <span className="text-slate-500">›</span>
            </button>

            {/* Logout */}
            <button
              type="button"
              onClick={logout}
              className="flex w-full items-center justify-between py-4 text-left transition hover:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <LogOut className="h-5 w-5 text-red-400" />

                <div>
                  <p className="text-sm font-medium text-red-400">
                    Log out
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Sign out of your NexaLearn account.
                  </p>
                </div>
              </div>

              <span className="text-slate-500">›</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}