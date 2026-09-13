"use client"

import Link from "next/link"
import { useState } from "react"

type Language = "angielski" | "hiszpanski"

const lecturers = {
  angielski: [
    {
      name: "Wiktoria Symeczko",
      description: "Język angielski • zajęcia indywidualne i grupowe",
      url: "https://www.strefazajec.pl/instruktor/Wiktoria-Symeczko",
    },
    {
      name: "Weronika Krych",
      description: "Język angielski • zajęcia indywidualne",
      url: "https://www.strefazajec.pl/course/view/id/96912",
    },
  ],
  hiszpanski: [
    {
      name: "Zuzanna Gutierrez",
      description: "Język hiszpański • zajęcia indywidualne",
      url: "https://www.strefazajec.pl/instruktor/Zuzanna-Towarek",
    },
  ],
}

export default function WilanowPage() {
  const [language, setLanguage] = useState<Language | null>(null)

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
            {language ? "Wybierz lektora" : "Jakiego języka chcesz się uczyć?"}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {language
              ? "Wybierz osobę prowadzącą i przejdź do zapisów."
              : "Najpierw wybierz język, a potem pokażemy dostępnych lektorów."}
          </p>
        </div>

        {!language ? (
          <div className="mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            <button
              type="button"
              onClick={() => setLanguage("angielski")}
              className="group rounded-[2rem] border border-[#eadcff] bg-white p-7 text-left shadow-[0_18px_55px_rgba(120,46,214,0.10)] transition hover:-translate-y-1 hover:border-[#d4b7ff] hover:shadow-[0_24px_65px_rgba(120,46,214,0.16)]"
            >
              <div className="inline-flex rounded-full bg-[#f1e7ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a20f2]">
                English
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
                Język angielski
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Zajęcia z Wiktorią Symeczko lub Weroniką Krych.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7a20f2]">
                Wybierz angielski
                <span className="transition group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setLanguage("hiszpanski")}
              className="group rounded-[2rem] border border-[#eadcff] bg-white p-7 text-left shadow-[0_18px_55px_rgba(120,46,214,0.10)] transition hover:-translate-y-1 hover:border-[#d4b7ff] hover:shadow-[0_24px_65px_rgba(120,46,214,0.16)]"
            >
              <div className="inline-flex rounded-full bg-[#f1e7ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a20f2]">
                Español
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
                Język hiszpański
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Zajęcia z Zuzanną Gutierrez.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7a20f2]">
                Wybierz hiszpański
                <span className="transition group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </div>
            </button>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setLanguage(null)}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#dfcef5] bg-white px-4 py-2 text-sm font-semibold text-[#7a20f2] transition hover:bg-[#faf7ff]"
            >
              <span aria-hidden="true">←</span>
              Zmień język
            </button>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {lecturers[language].map((lecturer) => (
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

                  <a
                    href={lecturer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8b2cf5] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(139,44,245,0.23)] transition hover:-translate-y-0.5 hover:bg-[#741ce8]"
                  >
                    Zobacz zajęcia
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
