"use client"

import Link from "next/link"
import { useState } from "react"

type Language = "angielski" | "hiszpanski"
type LecturerKey = "wiktoria" | "weronika" | "zuzanna"

type Course = {
  name: string
  details: string
  url: string
  location?: string
}

const lecturerInfo: Record<LecturerKey, { name: string; description: string }> = {
  wiktoria: {
    name: "Wiktoria Symeczko",
    description: "Język angielski • zajęcia indywidualne i grupowe",
  },
  weronika: {
    name: "Weronika Krych",
    description: "Język angielski • zajęcia indywidualne",
  },
  zuzanna: {
    name: "Zuzanna Gutierrez",
    description: "Język hiszpański • zajęcia indywidualne i grupowe",
  },
}

const languageLecturers: Record<Language, LecturerKey[]> = {
  angielski: ["wiktoria", "weronika"],
  hiszpanski: ["zuzanna"],
}

const courses: Record<LecturerKey, Course[]> = {
  wiktoria: [
    {
      name: "Bajkowy angielski",
      details: "5–6 lat • poniedziałek + środa, 16:30–17:15",
      location: "Branickiego 17",
      url: "https://www.strefazajec.pl/course/view/id/86844",
    },
    {
      name: "Egzamin 8-klasisty",
      details: "13–15 lat • poniedziałek + środa, 17:30–18:30",
      location: "Branickiego 17",
      url: "https://www.strefazajec.pl/course/view/id/86845",
    },
    {
      name: "Konwersacje dla licealistów",
      details: "15–19 lat • poniedziałek + środa, 18:30–19:30",
      location: "Branickiego 17",
      url: "https://www.strefazajec.pl/course/view/id/86846",
    },
    {
      name: "Fluent Conversations A2–B1",
      details: "Dorośli 18+ • środa, 19:30–20:30",
      location: "Branickiego 17",
      url: "https://www.strefazajec.pl/course/view/id/86848",
    },
    {
      name: "Hello English",
      details: "4–6 lat • wtorek, 16:30–17:15",
      location: "Branickiego 17",
      url: "https://www.strefazajec.pl/course/view/id/86855",
    },
    {
      name: "English for Kids",
      details: "7–10 lat • wtorek, 17:20–18:20",
      location: "Branickiego 17",
      url: "https://www.strefazajec.pl/course/view/id/86856",
    },
    {
      name: "Tween English",
      details: "10–12 lat • wtorek, 18:25–19:25",
      location: "Branickiego 17",
      url: "https://www.strefazajec.pl/course/view/id/86857",
    },
    {
      name: "Świetlica z angielskim – SP 358, kl. 3b",
      details: "9–11 lat • 2× w tygodniu",
      location: "Branickiego 17",
      url: "https://www.strefazajec.pl/course/view/id/87829",
    },
    {
      name: "Zajęcia indywidualne",
      details: "9+ • termin ustalany indywidualnie",
      location: "Branickiego 17",
      url: "https://www.strefazajec.pl/course/view/id/86843",
    },
    {
      name: "Exam Ready: Egzamin Ósmoklasisty",
      details: "13–15 lat • wtorek + czwartek, 18:00–19:00",
      location: "Kolegiacka 3",
      url: "https://www.strefazajec.pl/course/view/id/88978",
    },
    {
      name: "High School English",
      details: "15–17 lat • wtorek + czwartek, 19:00–20:00",
      location: "Kolegiacka 3",
      url: "https://www.strefazajec.pl/course/view/id/88979",
    },
    {
      name: "Exam Ready: Matura Rozszerzona",
      details: "17–20 lat • wtorek + czwartek, 20:00–21:00",
      location: "Kolegiacka 3",
      url: "https://www.strefazajec.pl/course/view/id/88980",
    },
    {
      name: "Zajęcia indywidualne",
      details: "9+ • termin ustalany indywidualnie",
      location: "Kolegiacka 3",
      url: "https://www.strefazajec.pl/course/view/id/88981",
    },
    {
      name: "Świetlica z angielskim – wolne terminy dla szkół",
      details: "9–11 lat • 2× w tygodniu",
      location: "Radosna 11",
      url: "https://www.strefazajec.pl/course/view/id/90269",
    },
  ],
  weronika: [
    {
      name: "Zajęcia indywidualne z języka angielskiego",
      details: "Zapis bezpośrednio do zajęć Weroniki Krych",
      location: "Wilanów",
      url: "https://www.strefazajec.pl/course/view/id/96912",
    },
  ],
  zuzanna: [
    {
      name: "Język hiszpański dla dzieci",
      details: "8–10 lat • czwartek, 17:30–18:30",
      location: "Branickiego 17",
      url: "https://www.strefazajec.pl/course/view/id/86867",
    },
    {
      name: "Język hiszpański dla młodzieży",
      details: "14–17 lat • czwartek, 18:35–19:35",
      location: "Branickiego 17",
      url: "https://www.strefazajec.pl/course/view/id/87315",
    },
  ],
}

export default function WilanowPage() {
  const [language, setLanguage] = useState<Language | null>(null)
  const [lecturer, setLecturer] = useState<LecturerKey | null>(null)

  const chooseLanguage = (value: Language) => {
    setLanguage(value)
    setLecturer(null)
  }

  const resetLanguage = () => {
    setLanguage(null)
    setLecturer(null)
  }

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
            {!language
              ? "Jakiego języka chcesz się uczyć?"
              : lecturer
                ? `Zajęcia: ${lecturerInfo[lecturer].name}`
                : "Wybierz lektora"}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {!language
              ? "Najpierw wybierz język, a potem pokażemy dostępnych lektorów."
              : lecturer
                ? "Wybierz konkretne zajęcia. Każdy przycisk prowadzi bezpośrednio do właściwego kursu w Strefie Zajęć."
                : "Wybierz osobę prowadzącą, aby zobaczyć konkretne grupy i zajęcia."}
          </p>
        </div>

        {!language ? (
          <div className="mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            <button
              type="button"
              onClick={() => chooseLanguage("angielski")}
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
                <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => chooseLanguage("hiszpanski")}
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
                <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </div>
            </button>
          </div>
        ) : lecturer ? (
          <>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setLecturer(null)}
                className="inline-flex items-center gap-2 rounded-full border border-[#dfcef5] bg-white px-4 py-2 text-sm font-semibold text-[#7a20f2] transition hover:bg-[#faf7ff]"
              >
                <span aria-hidden="true">←</span>
                Zmień lektora
              </button>
              <button
                type="button"
                onClick={resetLanguage}
                className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Zmień język
              </button>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {courses[lecturer].map((course) => (
                <a
                  key={`${course.name}-${course.location}`}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[1.6rem] border border-[#eadcff] bg-white p-5 shadow-[0_14px_38px_rgba(120,46,214,0.08)] transition hover:-translate-y-0.5 hover:border-[#cfadff] hover:shadow-[0_18px_46px_rgba(120,46,214,0.13)]"
                >
                  {course.location && (
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b2cf5]">
                      {course.location}
                    </div>
                  )}
                  <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                    {course.name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {course.details}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7a20f2]">
                    Przejdź do zapisów
                    <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={resetLanguage}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#dfcef5] bg-white px-4 py-2 text-sm font-semibold text-[#7a20f2] transition hover:bg-[#faf7ff]"
            >
              <span aria-hidden="true">←</span>
              Zmień język
            </button>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {languageLecturers[language].map((lecturerKey) => {
                const item = lecturerInfo[lecturerKey]

                return (
                  <button
                    type="button"
                    key={lecturerKey}
                    onClick={() => setLecturer(lecturerKey)}
                    className="rounded-[2rem] border border-[#eadcff] bg-white p-6 text-left shadow-[0_18px_55px_rgba(120,46,214,0.10)] transition hover:-translate-y-1 hover:border-[#d4b7ff]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7a20f2] to-[#d39cff] text-lg font-bold text-white shadow-sm">
                      {item.name.charAt(0)}
                    </div>

                    <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                      {item.name}
                    </h2>
                    <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7a20f2]">
                      Wybierz zajęcia
                      <span aria-hidden="true">→</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
