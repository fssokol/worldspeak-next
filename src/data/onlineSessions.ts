export const dayLabels: Record<string, string> = {
  poniedzialek: "Poniedziałek",
  wtorek: "Wtorek",
  sroda: "Środa",
  czwartek: "Czwartek",
  piatek: "Piątek",
  sobota: "Sobota",
  niedziela: "Niedziela",
}

export const onlineDays = [
  { slug: "poniedzialek", label: "Poniedziałek" },
  { slug: "wtorek", label: "Wtorek" },
  { slug: "sroda", label: "Środa" },
  { slug: "czwartek", label: "Czwartek" },
  { slug: "piatek", label: "Piątek" },
  { slug: "sobota", label: "Sobota" },
  { slug: "niedziela", label: "Niedziela" },
]

export const sessionsByDay: Record<
  string,
  { time: string; title: string; level: string }[]
> = {
  poniedzialek: [
    { time: "09:00", title: "Konwersacje online", level: "A2/B1" },
    { time: "10:00", title: "Konwersacje online", level: "B1/B2" },
    { time: "11:00", title: "Konwersacje online", level: "A1/A2" },
  ],
  wtorek: [
    { time: "18:00", title: "Konwersacje online", level: "A2/B1" },
    { time: "19:00", title: "Konwersacje online", level: "B1/B2" },
  ],
  sroda: [
    { time: "18:00", title: "Konwersacje online", level: "A1/A2" },
  ],
  czwartek: [
    { time: "19:00", title: "Konwersacje online", level: "B2" },
  ],
  piatek: [
    { time: "17:00", title: "Konwersacje online", level: "A2" },
  ],
  sobota: [
    { time: "10:00", title: "Konwersacje online", level: "A2/B1" },
    { time: "11:00", title: "Konwersacje online", level: "B1/B2" },
  ],
  niedziela: [],
}