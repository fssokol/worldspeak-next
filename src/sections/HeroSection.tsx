export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_26%),linear-gradient(to_bottom,#ffffff,rgba(248,250,252,0.9))]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Warszawa i online • dla dzieci, młodzieży, dorosłych i firm
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-slate-950 lg:text-7xl">
            Zacznij naukę języka z Worldspeak!
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
            Kursy językowe dla dzieci, młodzieży, dorosłych i firm.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="inline-flex rounded-full bg-slate-950 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              Zapisz się na kurs
            </a>

            <a
              href="#oferta"
              className="inline-flex rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400"
            >
              Zobacz ofertę
            </a>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
              <h3 className="mb-2 text-base font-semibold text-slate-950">
                Innowacyjność
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                Różnorodne metody nauki dopasowane do wieku, celu i stylu pracy
                kursanta.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
              <h3 className="mb-2 text-base font-semibold text-slate-950">
                Profesjonalizm
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                Uporządkowany proces nauki, jasna organizacja i przemyślana
                ścieżka rozwoju.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
              <h3 className="mb-2 text-base font-semibold text-slate-950">
                Efektywność
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                Nacisk na swobodę komunikacji, praktykę i realne postępy.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-violet-300/25 blur-3xl" />
          <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-fuchsia-300/25 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/30 bg-gradient-to-br from-slate-950 via-violet-900 to-fuchsia-800 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)] lg:p-10">
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-violet-100">
              Worldspeak
            </div>

            <h2 className="max-w-md text-3xl font-bold leading-tight lg:text-4xl">
              Szkoła językowa, która stawia na jakość, prostotę i realne efekty
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-100/95">
              Oferta zbudowana tak, aby łatwo znaleźć odpowiednią ścieżkę nauki
              — od zajęć dla dzieci, przez kursy indywidualne, po konwersacje
              online i kursy dla firm.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <h4 className="mb-2 text-base font-semibold">
                  Przedszkola i dzieci
                </h4>
                <p className="text-sm leading-6 text-slate-100/90">
                  Angażujące zajęcia od najmłodszych lat.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <h4 className="mb-2 text-base font-semibold">
                  Kursy indywidualne
                </h4>
                <p className="text-sm leading-6 text-slate-100/90">
                  Nauka dopasowana do celu i tempa.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <h4 className="mb-2 text-base font-semibold">
                  Konwersacje online
                </h4>
                <p className="text-sm leading-6 text-slate-100/90">
                  Regularne mówienie z dowolnego miejsca.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <h4 className="mb-2 text-base font-semibold">
                  Firmy i egzaminy
                </h4>
                <p className="text-sm leading-6 text-slate-100/90">
                  Praktyczna oferta dla biznesu i konkretnych celów.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}