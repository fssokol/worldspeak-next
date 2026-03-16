"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [openAbout, setOpenAbout] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 text-slate-950 no-underline"
          >
            <Image
              src="/logo.jpg"
              alt="Worldspeak logo"
              width={44}
              height={44}
              className="rounded-2xl object-cover shadow-sm"
            />
            <div className="leading-tight">
              <div className="text-xl font-bold tracking-tight">Worldspeak</div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Warszawa i online
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-[15px] font-medium text-slate-600 lg:flex">
            <Link href="/zajecia-online" className="transition hover:text-slate-950">
              Zajęcia online
            </Link>

            <a
              href="https://www.strefazajec.pl/instruktor/Wiktoria-Symeczko-3"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-slate-950"
            >
              Zajęcia Mokotów
            </a>

            <a
              href="https://www.strefazajec.pl/instruktor/Wiktoria-Symeczko#kursy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-slate-950"
            >
              Zajęcia Wilanów
            </a>

            <button
              type="button"
              onClick={() => setOpenAbout(true)}
              className="cursor-pointer bg-transparent transition hover:text-slate-950"
            >
              O nas
            </button>

            <Link href="/#faq" className="transition hover:text-slate-950">
              FAQ
            </Link>

            <Link href="/#kontakt" className="transition hover:text-slate-950">
              Kontakt
            </Link>
          </nav>

          <Link
            href="/#kontakt"
            className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-700 lg:inline-flex"
          >
            Zapisz się
          </Link>
        </div>
      </header>

      {openAbout && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onClick={() => setOpenAbout(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenAbout(false)}
              className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl text-slate-600"
            >
              ×
            </button>

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
                <Image
                  src="/founder.jpg"
                  alt="Założycielka Worldspeak"
                  width={700}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-700">
                  O nas
                </p>

                <h2 className="text-4xl font-bold leading-tight text-slate-950">
                  Poznaj założycielkę Worldspeak
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Worldspeak to miejsce stworzone z myślą o nowoczesnej,
                  uporządkowanej i skutecznej nauce języka. Stawiamy na
                  praktyczną komunikację, dobrą atmosferę i realne postępy.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Założycielka Worldspeak to doświadczona lektorka języków
                  obcych, która od lat pracuje z dziećmi, młodzieżą i dorosłymi.
                  Łączy profesjonalizm z indywidualnym podejściem, dbając o to,
                  aby kursanci rozwijali pewność siebie i swobodę w używaniu
                  języka.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Przed podpisaniem umowy kursanci poznają prowadzącą lub
                  prowadzącego zajęcia, aby mieć pełną jasność, kto będzie ich
                  wspierał w procesie nauki.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}