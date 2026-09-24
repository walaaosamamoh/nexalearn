import { useForm } from "@tanstack/react-form";
import GlassCard from "../../components/ui/GlassCard";
import { Link } from "react-router-dom";
import { loginSchema } from "../../schemas/LoginSchema";

export default function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <GlassCard className="w-full max-w-md sm:max-w-lg">
      <div className="px-5 py-6 sm:p-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Nexa<span className="text-violet-400">Learn</span>
          </h1>

          <p className="mt-4 text-base font-medium text-white sm:text-lg">
            Welcome back 👋
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Continue your learning journey
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="mt-7 space-y-3 border-y border-white/10 px-1 py-6 sm:mt-8 sm:px-2"
        >
          {/* Email */}
          <form.Field name="email">
            {(field) => (
              <div className="flex flex-col">
                <label
                  htmlFor={field.name}
                  className="text-sm font-medium text-slate-200"
                >
                  Email
                </label>

                <input
                  type="email"
                  id={field.name}
                  autoComplete="email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-violet-400 sm:text-base"
                />

                <p className="min-h-5 text-sm text-red-400">
                  {field.state.meta.errors[0]?.message ?? ""}
                </p>
              </div>
            )}
          </form.Field>

          {/* Password */}
          <form.Field name="password">
            {(field) => (
              <div className="flex flex-col">
                <label
                  htmlFor={field.name}
                  className="text-sm font-medium text-slate-200"
                >
                  Password
                </label>

                <input
                  type="password"
                  id={field.name}
                  autoComplete="current-password"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/50 px-3 py-2.5 text-sm text-white outline-none transition focus:border-violet-400 sm:text-base"
                />

                <p className="min-h-5 text-sm text-red-400">
                  {field.state.meta.errors[0]?.message ?? ""}
                </p>
              </div>
            )}
          </form.Field>

          {/* Submit */}
          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400 sm:mt-6"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 py-2 text-sm text-slate-500">
            <hr className="flex-1 border-white/10" />
            <span>or</span>
            <hr className="flex-1 border-white/10" />
          </div>

          {/* Register */}
          <p className="text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-violet-400 transition hover:text-violet-300"
            >
              Register
            </Link>
          </p>
        </form>

        {/* Back */}
        <Link
          to="/home"
          className="mt-6 block text-center text-sm text-slate-400 transition hover:text-white"
        >
          Back to home
        </Link>
      </div>
    </GlassCard>
  );
}