"use client"

import { useState } from "react"

const faqItems = [
  {
    id: 1,
    question: "Czy prowadzicie zajęcia online?",
    answer:
      "Tak. W ofercie znajdują się konwersacje online oraz zajęcia prowadzone zdalnie dla osób, które chcą uczyć się wygodnie z dowolnego miejsca.",
  },
  {
    id: 2,
    question: "Czy oferta jest tylko dla dorosłych?",
    answer:
      "Nie. Prowadzimy zajęcia dla wszystkich grup wiekowych: dzieci w wieku przedszkolnym, uczniów szkoły podstawowej (klasy 1–3 i 4–6), uczniów przygotowujących się do egzaminu ósmoklasisty (klasy 7–8), maturzystów, dorosłych i seniorów.",
  },
  {
    id: 3,
    question: "Czy można zapisać się na kurs indywidualny?",
    answer:
      "Tak. Jeśli w danym momencie nie ma wolnego miejsca, zachęcamy do zapisania się na listę rezerwową — odezwiemy się, jak tylko pojawi się dostępny termin.",
  },
  {
    id: 4,
    question: "Czy przygotowujecie do egzaminów?",
    answer:
      "Tak. Przygotowujemy do egzaminu ósmoklasisty, matury podstawowej i rozszerzonej oraz do egzaminów językowych Cambridge.",
  },
  {
    id: 5,
    question: "Jak dobrać odpowiedni poziom zajęć?",
    answer:
      "Przed zapisem pomagamy określić poziom i dobrać grupę lub formę nauki najlepiej dopasowaną do potrzeb kursanta.",
  },
  {
    id: 6,
    question: "Czy zajęcia odbywają się w małych grupach?",
    answer:
      "Tak. Wielkość grup zależy od rodzaju zajęć, ale zazwyczaj są to kameralne grupy do maksymalnie 8 osób. W przypadku zajęć online grupy liczą zwykle do 6 osób.",
  },
  {
    id: 7,
    question: "Czy można zapisać dziecko na zajęcia stacjonarne?",
    answer:
      "Tak. W ofercie są również zajęcia stacjonarne dla dzieci, w tym przykładowe grupy na Mokotowie i Wilanowie.",
  },
  {
    id: 8,
    question: "Czy można dołączyć w trakcie semestru?",
    answer:
      "W wielu przypadkach tak. Wszystko zależy od dostępności miejsc i poziomu zaawansowania w danej grupie.",
  },
  {
    id: 9,
    question: "Jak zapisać się na zajęcia?",
    answer:
      "W przypadku zajęć online wystarczy wysłać wiadomość przez formularz kontaktowy. Jeśli interesują Cię zajęcia stacjonarne, zapisy odbywają się przez Strefę Zajęć. Jeśli potrzebujesz naszego guidance przy wyborze najlepszej opcji, napisz do nas — chętnie pomożemy.",
  },
  {
    id: 10,
    question: "Kto prowadzi zajęcia?",
    answer:
      "Zajęcia prowadzą wykwalifikowani i doświadczeni nauczyciele języków obcych. Kadra jest przedstawiana kursantom przed podpisaniem umowy.",
  },
]

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-700">
          FAQ
        </p>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950">
          Najczęstsze pytania przed zapisem
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Kliknij w pytanie, aby rozwinąć odpowiedź.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenFaq(openFaq === item.id ? null : item.id)
                }
                className="flex w-full items-center justify-between gap-4 bg-transparent text-left text-xl font-bold text-slate-950"
              >
                <span>{item.question}</span>
                <span>{openFaq === item.id ? "−" : "+"}</span>
              </button>

              {openFaq === item.id && (
                <div className="mt-4">
                  <p className="m-0 leading-8 text-slate-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}