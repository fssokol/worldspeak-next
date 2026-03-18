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
      "Nie. Prowadzimy zajęcia dla dzieci, młodzieży, dorosłych i seniorów.",
  },
  {
    id: 3,
    question: "Czy można zapisać się na kurs indywidualny?",
    answer:
      "Tak. Jeśli w danym momencie nie ma wolnego miejsca, można zapisać się na listę rezerwową.",
  },
  {
    id: 4,
    question: "Czy przygotowujecie do egzaminów?",
    answer:
      "Tak. Przygotowujemy do egzaminu ósmoklasisty, matury oraz egzaminów Cambridge.",
  },
  {
    id: 5,
    question: "Jak dobrać odpowiedni poziom zajęć?",
    answer:
      "Przed zapisem pomagamy określić poziom i dobrać grupę lub formę nauki do potrzeb kursanta.",
  },
  {
    id: 6,
    question: "Czy zajęcia odbywają się w małych grupach?",
    answer:
      "Tak. To zazwyczaj kameralne grupy, dzięki którym łatwiej mówić i pracować regularnie.",
  },
]

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="section-shell rounded-[2.2rem] p-5 sm:rounded-[2.6rem] sm:p-8 lg:p-10">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8b2cf5]">
            FAQ
          </div>
          <h2 className="font-display mt-4 text-4xl leading-none text-slate-950 sm:text-5xl">
            Najczęstsze pytania przed zapisem
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Kliknij w pytanie, aby rozwinąć odpowiedź.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="rounded-[1.8rem] border border-[#eadcff] bg-white/90 p-5 shadow-[0_16px_40px_rgba(120,46,214,0.06)] sm:rounded-[2rem] sm:p-6"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenFaq(openFaq === item.id ? null : item.id)
                }
                className="flex w-full items-center justify-between gap-4 bg-transparent text-left text-lg font-semibold text-slate-950"
              >
                <span>{item.question}</span>
                <span className="text-[#8b2cf5]">
                  {openFaq === item.id ? "−" : "+"}
                </span>
              </button>

              {openFaq === item.id ? (
                <div className="mt-4">
                  <p className="m-0 leading-8 text-slate-600">{item.answer}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
