export default function OfferSection() {
  const items = [
    {
      emoji: "🎈",
      title: "Przedszkola i dzieci",
      text: "Angażujące zajęcia dla najmłodszych, które budują osłuchanie z językiem i dobre skojarzenia z nauką.",
    },
    {
      emoji: "👤",
      title: "Kursy indywidualne",
      text: "Nauka dopasowana do poziomu, celu i tempa pracy kursanta.",
    },
    {
      emoji: "👥",
      title: "Kursy grupowe",
      text: "Regularne zajęcia w kameralnej grupie, które pomagają utrzymać motywację.",
    },
    {
      emoji: "💻",
      title: "Zajęcia online",
      text: "Wygodna forma nauki z dowolnego miejsca, nastawiona na mówienie i regularność.",
    },
    {
      emoji: "🏢",
      title: "Dla firm",
      text: "Kursy językowe dla zespołów, dopasowane do charakteru pracy i celów komunikacyjnych.",
    },
    {
      emoji: "📘",
      title: "Egzaminy",
      text: "Egzamin ósmoklasisty, matura podstawowa i rozszerzona oraz egzaminy językowe Cambridge.",
    },
  ]

  return (
    <section id="oferta" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-700">
          Oferta
        </p>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950">
          Wybierz formę nauki dopasowaną do siebie
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Oferta została zbudowana tak, aby łatwo było znaleźć odpowiednią
          ścieżkę nauki — niezależnie od tego, czy szukasz zajęć dla dziecka,
          kursu indywidualnego, konwersacji online, kursu dla firmy czy
          przygotowania do egzaminu.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-pink-100 text-2xl">
                {item.emoji}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-slate-950">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}