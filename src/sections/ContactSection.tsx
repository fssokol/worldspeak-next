import ContactForm from "@/components/forms/ContactForm"
import { companyInfo, googleReviewsShareUrl } from "@/data/companyInfo"

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#8b2cf5]">
          Kontakt
        </p>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950">
          Wybierz kurs i napisz do Worldspeak
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Opisz krótko, jakiego kursu szukasz, a pomożemy dobrać najlepszą formę
          nauki.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#eadcff] bg-white p-8 shadow-[0_18px_50px_rgba(120,46,214,0.08)]">
            <h3 className="text-3xl font-bold text-slate-950">Porozmawiajmy!</h3>
            <p className="mt-4 text-slate-600">
              Krótka wiadomość wystarczy, żeby rozpocząć.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-[#eadcff] p-4">
                Warszawa oraz zajęcia online
              </div>
              <div className="rounded-2xl border border-[#eadcff] p-4">
                {companyInfo.email}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={googleReviewsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#8b2cf5] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(139,44,245,0.28)] transition hover:-translate-y-0.5 hover:bg-[#741ce8]"
              >
                Google
              </a>

              <a
                href={companyInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[#eadcff] bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[#caa7ff]"
              >
                Facebook
              </a>

              <a
                href={companyInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[#eadcff] bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[#caa7ff]"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#eadcff] bg-white p-8 shadow-[0_18px_50px_rgba(120,46,214,0.08)]">
            <h3 className="text-3xl font-bold text-slate-950">Napisz do nas!</h3>
            <p className="mt-4 text-slate-600">
              Wypełnij formularz, a Worldspeak pomoże dobrać odpowiednią formę
              nauki.
            </p>

            <ContactForm
              source="Formularz kontaktowy"
              topicOptions={[
                { label: "Kontakt ogólny", value: "contact" },
                { label: "Zajęcia online", value: "online" },
                { label: "Mokotów", value: "mokotow" },
                { label: "Wilanów", value: "wilanow" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
