import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,44,245,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(217,188,255,0.2),transparent_24%),linear-gradient(to_bottom,#ffffff,rgba(251,248,255,0.98))]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-slate-950 lg:text-7xl">
            Zacznij naukę języka z Worldspeak!
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
            Kursy językowe dla dzieci, młodzieży, dorosłych i firm.
          </p>

          <div className="mt-8 rounded-[1.9rem] border border-[#eadcff] bg-gradient-to-br from-white via-[#fcf9ff] to-[#f4ebff] p-6 shadow-[0_16px_40px_rgba(120,46,214,0.12)]">
            <div className="inline-flex rounded-full bg-gradient-to-r from-[#7a20f2] via-[#952df6] to-[#d69cff] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white shadow-sm">
              online
            </div>

            <div className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              Zajęcia online
            </div>

            <div className="mt-3 text-sm font-medium text-[#8b2cf5]">
              Start od września
            </div>

            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">
              Wygodny zapis, jasny podział grup i zajęcia na żywo z lektorem.
            </p>

            <Link
              href="/zajecia-online#online-form"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#8b2cf5] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(139,44,245,0.28)] transition hover:-translate-y-0.5 hover:bg-[#741ce8]"
            >
              Przejdź do zajęć online
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] bg-gradient-to-br from-[#5416c9] via-[#7f23f6] to-[#d59dff] p-5 text-white shadow-[0_22px_70px_rgba(120,46,214,0.24)] lg:mt-8 lg:p-6">
          <div className="inline-flex rounded-full border border-white/18 bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
            Worldspeak
          </div>

          <h2 className="mt-6 max-w-lg text-3xl font-semibold leading-tight tracking-tight md:text-[2.4rem]">
            Szkoła językowa, która łączy jakość, prostotę i realne efekty.
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="https://www.strefazajec.pl/instruktor/Wiktoria-Symeczko-3"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[1.6rem] border border-white/12 bg-white/12 p-5 transition hover:bg-white/18"
            >
              <div className="inline-flex rounded-full bg-white/12 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/85">
                stacjonarnie
              </div>

              <div className="mt-3 text-xl font-semibold tracking-tight">
                Zajęcia Mokotów
              </div>

              <p className="mt-2 text-sm leading-6 text-white/85">
                Kameralne grupy i wygodna lokalizacja.
              </p>
            </a>

            <a
              href="https://www.strefazajec.pl/instruktor/Wiktoria-Symeczko"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[1.6rem] border border-white/12 bg-white/12 p-5 transition hover:bg-white/18"
            >
              <div className="inline-flex rounded-full bg-white/12 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/85">
                stacjonarnie
              </div>

              <div className="mt-3 text-xl font-semibold tracking-tight">
                Zajęcia Wilanów
              </div>

              <p className="mt-2 text-sm leading-6 text-white/85">
                Nowoczesne zajęcia blisko Ciebie.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
