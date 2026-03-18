import ContactForm from "@/components/forms/ContactForm"

export const metadata = {
  title: "Zajęcia online | Worldspeak",
  description:
    "Zajęcia online dla dzieci, młodzieży i dorosłych. Zapisz się na nowe grupy językowe w Worldspeak.",
}

export default function Page() {
  return (
    <main
      id="online-top"
      className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
    >
      <section className="section-shell overflow-hidden rounded-[2.2rem] p-5 sm:rounded-[2.8rem] sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#5416c9] via-[#7f23f6] to-[#d59dff] p-6 text-white shadow-[0_28px_80px_rgba(120,46,214,0.2)] sm:rounded-[2.4rem] sm:p-9">
            <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/80">
              Zajęcia online
            </div>

            <h1 className="font-display mt-5 text-[2.9rem] leading-[0.9] sm:text-[4.6rem]">
              Start od września.
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-white/85">
              Zostaw kontakt. Wrócimy z odpowiednią grupą, poziomem i dogodnym
              terminem.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.7rem] border border-white/15 bg-white/12 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  Dla kogo
                </div>
                <div className="mt-2 text-lg font-semibold">
                  Dzieci, młodzież, dorośli
                </div>
              </div>

              <div className="rounded-[1.7rem] border border-white/15 bg-white/12 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  Forma
                </div>
                <div className="mt-2 text-lg font-semibold">Na żywo z lektorem</div>
              </div>
            </div>
          </div>

          <div
            id="online-form"
            className="scroll-mt-32 rounded-[2rem] border border-[#eadcff] bg-white p-8 shadow-[0_18px_50px_rgba(120,46,214,0.08)] sm:rounded-[2.4rem] sm:p-9"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8b2cf5]">
              Formularz
            </div>

            <h2 className="font-display mt-4 text-4xl leading-none text-slate-950 sm:text-5xl">
              Zapisz się.
            </h2>

            <ContactForm
              source="Zajęcia online"
              submitLabel="Wyślij zgłoszenie"
              topicOptions={[
                { label: "Zajęcia online", value: "online" },
                { label: "Dziecko", value: "dziecko" },
                { label: "Młodzież", value: "mlodziez" },
                { label: "Dorosły", value: "dorosly" },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
