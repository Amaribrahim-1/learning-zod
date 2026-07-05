import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10 font-sans">
      <div className="w-full max-w-5xl rounded-[32px] border border-white/70 bg-white/80 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur md:p-6 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="flex flex-col justify-center rounded-[24px] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-8 text-white shadow-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
              Welcome
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">
              Create your account
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
              Join our platform and enjoy a polished sign-up experience with
              friendly guidance every step of the way.
            </p>
          </section>

          <SignUp />
        </div>
      </div>
    </main>
  );
}
