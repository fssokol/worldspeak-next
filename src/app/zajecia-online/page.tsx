import Link from "next/link"
import { onlineDays } from "../../data/onlineSessions"

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-700">
          Zajęcia online
        </p>

        <h1 className="text-5xl font-bold leading-tight text-slate-950">
          Wybierz dzień tygodnia
        </h1>

        <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-600">
          Kliknij wybrany dzień, aby zobaczyć grupy i godziny zajęć online.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {onlineDays.map((day) => (
            <Link
              key={day.slug}
              href={`/zajecia-online/${day.slug}`}
              className="flex min-h-[110px] items-center justify-between rounded-3xl border border-slate-200 bg-white p-6 text-xl font-semibold text-slate-950 no-underline shadow-sm transition hover:-translate-y-0.5"
            >
              <span>{day.label}</span>
              <span className="text-2xl text-violet-700">→</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}