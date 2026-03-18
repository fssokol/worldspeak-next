import { companyInfo } from "@/data/companyInfo"

export const metadata = {
  title: "RODO | Worldspeak",
  description: "Informacje o prawach osób, których dane dotyczą.",
}

export default function RodoPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[#eadcff] bg-white p-6 shadow-[0_18px_50px_rgba(120,46,214,0.08)] sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b2cf5]">
          RODO
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950">
          Informacja o przetwarzaniu danych
        </h1>

        <div className="mt-8 space-y-6 text-slate-600">
          <p className="leading-8">
            Jeśli chcesz skorzystać z praw wynikających z RODO, napisz na{" "}
            {companyInfo.email}. Dotyczy to w szczególności prawa dostępu do
            danych, sprostowania, usunięcia, ograniczenia przetwarzania,
            przeniesienia danych, sprzeciwu oraz cofnięcia zgody.
          </p>

          <p className="leading-8">
            Administratorem danych jest {companyInfo.businessName},{" "}
            {companyInfo.addressFull}.
          </p>

          <p className="leading-8">
            W sprawach związanych z ochroną danych możesz kontaktować się pod
            adresem: {companyInfo.email}.
          </p>

          <p className="leading-8">
            Jeśli uznasz, że dane są przetwarzane niezgodnie z prawem, możesz
            wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych.
          </p>
        </div>
      </div>
    </main>
  )
}
