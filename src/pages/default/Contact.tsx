import { useState } from "react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Get in Touch
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            We'd love to hear from you.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Have a question, suggestion, or need help? Send us a message and
            we'll get back to you.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Let's talk
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Whether you're exploring courses or need help with your learning
              journey, we're here to help.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-medium text-violet-400">
                  Email
                </p>
                <p className="mt-1 text-slate-300">
                  hello@nexalearn.com
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-violet-400">
                  Response time
                </p>
                <p className="mt-1 text-slate-300">
                  Usually within 1-2 business days
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-violet-400">
                  Support
                </p>
                <p className="mt-1 text-slate-300">
                  Course and account assistance
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-100 flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10 text-2xl">
                  ✓
                </div>

                <h2 className="mt-5 text-2xl font-semibold text-white">
                  Message sent!
                </h2>

                <p className="mt-3 max-w-sm text-slate-400">
                  Thanks for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="How can we help?"
                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-violet-500 px-6 py-3.5 font-semibold text-white transition hover:bg-violet-400"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}