import Link from "next/link"

const lecturers = [
  {
    name: "Wiktoria Symeczko",
    description: "Język angielski • zajęcia indywidualne i grupowe",
    individualUrl: null,
  },
  {
    name: "Weronika Krych",
    description: "Język angielski • zajęcia indywidualne",
    individualUrl: "https://www.strefazajec.pl/course/view/id/96912",
  },
  {
    name: "Zuzanna Gutierrez",
    description: "Język hiszpański • zajęcia indywidualne",
    individualUrl: null,
  },
]

export default function WilanowPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(139,44,245,0.11),transparent_28%),linear-gradient(to_bottom,#ffffff,#fbf8ff)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7a20f2] transition hover:-translate-x-0.5"
        >
          <span aria-hidden="true">←</span>
          Wróć na stronę główną
        </Link>

        <div className="mt-8 max-w-3xl">
          <div className="inline-flex rounded-full bg-[#f1e7ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a20f2]">
            Wilanów
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Wybierz lektora
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Wybierz osobę prowadzącą, a następnie rodzaj zajęć.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {lecturers.map((lecturer) => (
            <article
              key={lecturer.name}
              className="rounded-[2rem] border border-[#eadcff] bg-white p-6 shadow-[0_18px_55px_rgba(120,46,214,0.10)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7a20f2] to-[#d39cff] text-lg font-bold text-white shadow-sm">
                {lecturer.name.charAt(0)}
              </div>

              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                {lecturer.name}
              </h2>
              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">
                {lecturer.description}
              </p>

              {lecturer.individualUrl ? (
                <a
                  href={lecturer.individualUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8b2cf5] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(139,44,245,0.23)] transition hover:-translate-y-0.5 hover:bg-[#741ce8]"
                >
                  Zajęcia indywidualne
                  <span aria-hidden="true">→</span>
                </a>
              ) : (
                <div className="mt-6 inline-flex w-full cursor-default items-center justify-center rounded-full border border-[#e7daf8] bg-[#faf7ff] px-5 py-3 text-sm font-semibold text-slate-400">
                  Zajęcia indywidualne
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
