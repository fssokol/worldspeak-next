import Image from "next/image"
import Link from "next/link"

const team = [
  {
    name: "Wiktoria Symeczko",
    role: "Założycielka Worldspeak",
    subjects: "Język angielski i francuski",
    description:
      "Absolwentka filologii na Uniwersytecie Warszawskim. Doświadczenie zdobywała, prowadząc zajęcia dla dzieci, młodzieży i dorosłych. W Worldspeak odpowiada za kierunek rozwoju szkoły, programy i jakość nauczania.",
    initials: "WS",
    photo: "/lektorzy/wiktoria-symeczko.jpg",
  },
  {
    name: "Alicja Gołaszewska",
    role: "Lektorka",
    subjects: "Język angielski i hiszpański",
    description:
      "Studiuje lingwistykę stosowaną na Uniwersytecie Warszawskim. Prowadzi lekcje indywidualne oraz Tween English dla uczniów klas 4–6. Stawia na uważność, kreatywność i atmosferę sprzyjającą swobodnej komunikacji.",
    initials: "AG",
    photo: "/lektorzy/alicja-golaszewska.jpg",
  },
  {
    name: "Weronika Krych",
    role: "Lektorka",
    subjects: "Język angielski",
    description:
      "Studiuje na Uniwersytecie Warszawskim, rozwijając kompetencje w nauczaniu języka angielskiego i niemieckiego. Prowadzi zajęcia świetlicowe dla uczniów SP 358 oraz lekcje indywidualne dla dzieci, młodzieży i dorosłych.",
    initials: "WK",
    photo: "/lektorzy/weronika-krych.jpg",
  },
  {
    name: "Zuzanna Towarek-Gutierrez",
    role: "Lektorka",
    subjects: "Język hiszpański i angielski",
    description:
      "Prowadzi lekcje indywidualne i grupowe. Podczas zajęć pomaga rozwijać komunikację i pewność w używaniu języka, dobierając tempo i materiał do potrzeb uczestników.",
    initials: "ZT",
    photo: "/lektorzy/zuzanna-towarek-gutierrez.jpg",
  },
] as const

export default function TeamSection() {
  return (
    <section id="onas" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b2cf5]">
              O nas
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Za każdą dobrą lekcją stoją ludzie.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-slate-600">
              Worldspeak to szkoła językowa założona przez Wiktorię Symeczko.
              Uczymy dzieci, młodzież i dorosłych w Warszawie oraz online.
              Stawiamy na kameralne zajęcia, świadomy dobór materiałów i język,
              którego naprawdę używa się poza salą lekcyjną.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Zależy nam na tym, żeby każdy kursant czuł się swobodnie,
              rozumiał swoje postępy i miał przestrzeń do zadawania pytań,
              popełniania błędów oraz budowania pewności siebie.
            </p>
          </div>
        </div>

        <div id="zespol" className="mt-14 scroll-mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.23em] text-[#8b2cf5]">
                Poznaj nas
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Nasz zespół lektorów
              </h3>
            </div>
            <Link href="/wilanow" className="text-sm font-semibold text-[#7a20f2] hover:text-[#5416c9]">
              Wybierz zajęcia w Wilanowie <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <article
                key={person.name}
                className="flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-[#eadcff] bg-[#fcf9ff] shadow-[0_12px_42px_rgba(74,35,130,0.06)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#f6efff] via-[#ede0ff] to-[#d7b9ff]">
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={`Portret: ${person.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/70 bg-white/60 text-4xl font-semibold tracking-tight text-[#6921bc] shadow-sm">
                        {person.initials}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b2cf5]">
                    {person.role}
                  </p>
                  <h4 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                    {person.name}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {person.subjects}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                    {person.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
