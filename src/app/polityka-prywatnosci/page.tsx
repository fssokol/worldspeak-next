import { companyInfo } from "@/data/companyInfo"

export const metadata = {
  title: "Polityka prywatności | Worldspeak",
  description: "Zasady przetwarzania danych osobowych w Worldspeak.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[#eadcff] bg-white p-6 shadow-[0_18px_50px_rgba(120,46,214,0.08)] sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b2cf5]">
          Polityka prywatności
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950">
          Ochrona danych osobowych
        </h1>

        <div className="mt-8 space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Administrator danych
            </h2>
            <p className="mt-3 leading-8">
              Administratorem danych osobowych jest {companyInfo.businessName},
              kontakt: {companyInfo.email}, {companyInfo.addressFull}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Jakie dane zbieramy
            </h2>
            <p className="mt-3 leading-8">
              W formularzu kontaktowym przetwarzamy dane podane dobrowolnie:
              imię i nazwisko, adres e-mail, numer telefonu, temat wiadomości
              oraz treść zapytania.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Cel i podstawa przetwarzania
            </h2>
            <p className="mt-3 leading-8">
              Dane przetwarzamy w celu odpowiedzi na zapytanie, kontaktu z osobą
              zainteresowaną zajęciami oraz przedstawienia oferty. Podstawą
              przetwarzania jest art. 6 ust. 1 lit. b i f RODO, a w zakresie
              zgody na kontakt przez formularz także art. 6 ust. 1 lit. a RODO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Jak długo przechowujemy dane
            </h2>
            <p className="mt-3 leading-8">
              Dane przechowujemy przez czas potrzebny do obsługi zapytania oraz
              kontaktu z osobą zainteresowaną ofertą, a następnie przez okres
              niezbędny do zabezpieczenia ewentualnych roszczeń.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Komu możemy udostępniać dane
            </h2>
            <p className="mt-3 leading-8">
              Dane mogą być powierzane podmiotom wspierającym działanie strony i
              poczty elektronicznej, w szczególności dostawcy hostingu, usług
              pocztowych oraz operatorowi serwera SMTP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">Twoje prawa</h2>
            <p className="mt-3 leading-8">
              Masz prawo dostępu do danych, ich sprostowania, usunięcia,
              ograniczenia przetwarzania, przenoszenia danych, wniesienia
              sprzeciwu oraz cofnięcia zgody. Masz także prawo wniesienia skargi
              do Prezesa Urzędu Ochrony Danych Osobowych.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Pliki cookies
            </h2>
            <p className="mt-3 leading-8">
              Strona wykorzystuje wyłącznie pliki niezbędne do prawidłowego
              działania serwisu oraz bezpieczeństwa formularzy. Jeśli w
              przyszłości zostaną dodane narzędzia analityczne lub marketingowe,
              polityka zostanie odpowiednio uzupełniona.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-950">
              Bezpieczeństwo
            </h2>
            <p className="mt-3 leading-8">
              Dane przesyłane przez formularz są chronione z użyciem połączenia
              HTTPS/TLS. Dostęp do skrzynki odbiorczej i ustawień strony mają
              wyłącznie uprawnione osoby.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
