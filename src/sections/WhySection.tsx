import Image from "next/image"
import {
  companyInfo,
  featuredGoogleReviews,
  googleReviewsShareUrl,
} from "@/data/companyInfo"

export default function WhySection() {
  return (
    <section id="dlaczegomy" className="bg-[#fcf9ff]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b2cf5]">
              Dlaczego Worldspeak?
            </div>

            <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Nauka języka w wygodnej i nowoczesnej formule
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Przejrzysty zapis, dobrze dobrane grupy i zajęcia, które pomagają
              mówić swobodnie od pierwszych spotkań.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={companyInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#8b2cf5] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(139,44,245,0.28)] transition hover:-translate-y-0.5 hover:bg-[#741ce8]"
              >
                Instagram
              </a>

              <a
                href={companyInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#eadcff] bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[#caa7ff]"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem] sm:row-span-2">
              <Image
                src="/zajeciaduze_900.webp"
                alt="Zajęcia językowe Worldspeak"
                width={900}
                height={900}
                className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(28,8,54,0.04),rgba(63,14,129,0.34))]" />
            </div>

            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="/zajeciamale_800.webp"
                alt="Małe grupy Worldspeak"
                width={800}
                height={800}
                className="h-[220px] w-full object-cover sm:h-[252px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(28,8,54,0.02),rgba(63,14,129,0.24))]" />
            </div>

            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="/zajeciamale2_740.webp"
                alt="Kameralne zajęcia Worldspeak"
                width={740}
                height={740}
                className="h-[220px] w-full object-cover sm:h-[252px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(28,8,54,0.02),rgba(63,14,129,0.24))]" />
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-[#eadcff] bg-white p-8 shadow-[0_18px_50px_rgba(120,46,214,0.08)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b2cf5]">
                Opinie kursantów i rodziców
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                Zobacz, co mówią inni.
              </h3>
            </div>

            <a
              href={googleReviewsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#eadcff] bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-[#caa7ff]"
            >
              Zobacz wizytówkę Google
            </a>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredGoogleReviews.map((item, index) => (
              <div
                key={`${item.authorName}-${index}`}
                className="rounded-[1.75rem] border border-[#f0e4ff] bg-[#fcf9ff] p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b2cf5]">
                    Google
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    5.0 / 5
                  </div>
                </div>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  &quot;{item.text}&quot;
                </p>

                <div className="mt-5 border-t border-[#eadcff] pt-4">
                  <div className="text-sm font-semibold text-slate-900">
                    {item.authorName}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                    opinia z wizytówki Google
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
