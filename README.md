# Worldspeak

Strona szkoły językowej Worldspeak z formularzem kontaktowym i zapisem na zajęcia online.

## Lokalnie

```bash
npm install
npm run dev
```

## Produkcja i Vercel

Projekt jest gotowy do wdrożenia na Vercel.

1. Zaimportuj repozytorium do Vercela.
2. W `Settings -> Environment Variables` dodaj zmienne z pliku `.env.example`.
3. Ustaw `NEXT_PUBLIC_SITE_URL` na adres domeny, np. `https://wordspeak.pl`.
4. Wdróż projekt.

## Wysyłka formularza

Formularz korzysta z SMTP. Po wdrożeniu ustaw:

- `CONTACT_EMAIL`
- `MAIL_FROM`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `NEXT_PUBLIC_SITE_URL`

Po poprawnym ustawieniu zmiennych wiadomości z formularza będą trafiały na `kontakt@worldspeak.pl`.

## Pliki prawne

Na stronie są gotowe podstrony:

- `/polityka-prywatnosci`
- `/rodo`

Przed publikacją warto jeszcze sprawdzić treść z prawnikiem lub księgowością, jeśli chcesz dopasować ją do dokładnej formy działalności.
