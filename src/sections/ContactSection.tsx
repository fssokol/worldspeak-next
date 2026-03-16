export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-700">
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
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-950">Porozmawiajmy!</h3>
            <p className="mt-4 text-slate-600">
              Krótka wiadomość wystarczy, żeby rozpocząć.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                Warszawa oraz zajęcia online
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                kontakt@worldspeak.pl
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                +48 000 000 000
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-950">Napisz do nas!</h3>
            <p className="mt-4 text-slate-600">
              Wypełnij formularz, a Worldspeak pomoże dobrać odpowiednią formę
              nauki.
            </p>

            <form className="mt-6 grid gap-4">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                className="rounded-2xl border border-slate-300 px-4 py-3"
              />
              <input
                type="email"
                placeholder="Adres e-mail"
                className="rounded-2xl border border-slate-300 px-4 py-3"
              />
              <input
                type="text"
                placeholder="Telefon"
                className="rounded-2xl border border-slate-300 px-4 py-3"
              />
              <textarea
                placeholder="Napisz, jakiego kursu szukasz"
                className="min-h-32 rounded-2xl border border-slate-300 px-4 py-3"
              />
              <button
                type="button"
                className="w-fit rounded-full bg-slate-950 px-6 py-3 font-semibold text-white"
              >
                Wyślij zgłoszenie
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}