"use client"

import type { FormEvent } from "react"
import Link from "next/link"
import { useState } from "react"

type ContactFormProps = {
  source: string
  submitLabel?: string
  topicOptions?: Array<{
    label: string
    value: string
  }>
}

type Status =
  | { type: "idle"; message: string }
  | { type: "submitting"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string }

type ContactPayload = {
  source: string
  name: string
  email: string
  phone: string
  topic: string
  message: string
  consent: boolean
  company: string
}

const inputClassName =
  "rounded-2xl border border-[#e7d6ff] bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#8b2cf5]/40 focus:bg-white"

const fallbackEmail = "kontakt@worldspeak.pl"

function openMailClient(
  payload: ContactPayload,
  topicOptions: ContactFormProps["topicOptions"],
) {
  const selectedTopic =
    topicOptions?.find((option) => option.value === payload.topic)?.label ||
    payload.topic ||
    "Formularz kontaktowy"

  const subject = encodeURIComponent(`Worldspeak - ${selectedTopic}`)
  const body = encodeURIComponent(
    [
      `Źródło: ${payload.source}`,
      `Imię i nazwisko: ${payload.name}`,
      `E-mail: ${payload.email}`,
      `Telefon: ${payload.phone || "Nie podano"}`,
      `Temat: ${selectedTopic}`,
      "",
      "Wiadomość:",
      payload.message,
    ].join("\n"),
  )

  window.location.href = `mailto:${fallbackEmail}?subject=${subject}&body=${body}`
}

export default function ContactForm({
  source,
  submitLabel = "Wyślij zgłoszenie",
  topicOptions = [
    { label: "Zajęcia online", value: "online" },
    { label: "Mokotów", value: "mokotow" },
    { label: "Wilanów", value: "wilanow" },
  ],
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>({
    type: "idle",
    message: "",
  })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const payload: ContactPayload = {
      source,
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      topic: String(formData.get("topic") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      consent: formData.get("consent") === "on",
      company: String(formData.get("company") || "").trim(),
    }

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({
        type: "error",
        message: "Uzupełnij imię, e-mail i wiadomość.",
      })
      return
    }

    if (!payload.consent) {
      setStatus({
        type: "error",
        message: "Zaznacz zgodę na przetwarzanie danych.",
      })
      return
    }

    setStatus({
      type: "submitting",
      message: "Wysyłamy wiadomość...",
    })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as { error?: string; ok?: boolean }

      if (!response.ok || !data.ok) {
        if (data.error?.includes("Brakuje konfiguracji SMTP")) {
          openMailClient(payload, topicOptions)
          setStatus({
            type: "success",
            message: "Otwieramy wiadomość e-mail, aby dokończyć zgłoszenie.",
          })
          return
        }

        throw new Error(data.error || "Nie udało się wysłać formularza.")
      }

      form.reset()
      setStatus({
        type: "success",
        message: "Dziękujemy. Wiadomość została wysłana.",
      })
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Nie udało się wysłać wiadomości.",
      })
    }
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Imię i nazwisko"
          className={inputClassName}
          autoComplete="name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Adres e-mail"
          className={inputClassName}
          autoComplete="email"
          required
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="phone"
          placeholder="Telefon"
          className={inputClassName}
          autoComplete="tel"
        />
        <select name="topic" className={inputClassName} defaultValue="">
          <option value="">Wybierz temat</option>
          {topicOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Napisz, jakich zajęć szukasz"
        className="min-h-32 rounded-2xl border border-[#e7d6ff] bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#8b2cf5]/40 focus:bg-white"
        required
      />

      <label className="flex items-start gap-3 rounded-2xl border border-[#eedfff] bg-[#fbf7ff] px-4 py-4 text-sm leading-6 text-slate-600">
        <input
          type="checkbox"
          name="consent"
          className="mt-1 h-4 w-4 rounded border-slate-300 text-[#8b2cf5]"
          required
        />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych w celu kontaktu i obsługi
          zapytania. Zasady przetwarzania danych opisuje{" "}
          <Link
            href="/polityka-prywatnosci"
            className="font-semibold text-[#8b2cf5]"
          >
            Polityka prywatności
          </Link>
          .
        </span>
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex w-fit items-center justify-center rounded-full bg-[#8b2cf5] px-6 py-3 font-semibold text-white shadow-[0_14px_30px_rgba(139,44,245,0.28)] transition hover:-translate-y-0.5 hover:bg-[#741ce8] disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status.type === "submitting"}
        >
          {status.type === "submitting" ? "Wysyłanie..." : submitLabel}
        </button>

        {status.message ? (
          <p
            aria-live="polite"
            className={`text-sm ${
              status.type === "error" ? "text-rose-600" : "text-slate-600"
            }`}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  )
}
