export default function WhySection() {
  const items = [
    "Praktyczna komunikacja zamiast przypadkowych ćwiczeń",
    "Oferta dla dzieci, młodzieży, dorosłych, firm i osób online",
    "Przejrzysty wybór kursu i prosty proces zapisu",
    "Zajęcia dopasowane do celu: komunikacja, praca, egzamin",
    "Przyjazna atmosfera pomagająca przełamać barierę",
    "Stacjonarnie w Warszawie oraz online",
  ]

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-700">
          Dlaczego Worldspeak?
        </p>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950">
          Nauka języka w wygodnej i nowoczesnej formule
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Przejrzysta oferta, prosty proces zapisu i zajęcia dopasowane do celu
          pozwalają skupić się na tym, co najważniejsze — realnym rozwoju
          językowym.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="inline-flex h-7 w-7 min-w-7 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                ✓
              </span>
              <p className="text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}