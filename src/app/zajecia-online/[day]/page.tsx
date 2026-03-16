import { dayLabels, sessionsByDay } from "../../../data/onlineSessions"

type PageProps = {
  params: Promise<{
    day: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { day } = await params
  const sessions = sessionsByDay[day] || []
  const dayLabel = dayLabels[day] || "Wybrany dzień"

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <a
          href="/zajecia-online"
          className="inline-flex items-center gap-2 font-bold text-slate-600 no-underline"
        >
          ← Wróć do dni tygodnia
        </a>

        <p className="mt-5 mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-700">
          Zajęcia online
        </p>

        <h1 className="m-0 text-5xl leading-tight font-bold text-slate-950">
          {dayLabel}
        </h1>

        <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-600">
          Poniżej znajdziesz zajęcia dostępne w tym dniu.
        </p>

        {sessions.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
            W tym dniu nie ma obecnie zaplanowanych zajęć online.
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sessions.map((session) => (
              <div
                key={`${session.time}-${session.level}`}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                  {dayLabel} {session.time}
                </p>

                <h3 className="mt-3 mb-3 text-2xl text-slate-950">
                  {session.title}
                </h3>

                <p className="m-0 leading-8 text-slate-600">
                  Poziom: {session.level}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}