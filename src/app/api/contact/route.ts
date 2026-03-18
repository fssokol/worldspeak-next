import nodemailer from "nodemailer"

export const runtime = "nodejs"

type ContactPayload = {
  source?: string
  name?: string
  email?: string
  phone?: string
  topic?: string
  message?: string
  consent?: boolean
  company?: string
}

function normalize(value?: string) {
  return (value || "").trim()
}

function formatTopic(topic: string) {
  if (!topic) {
    return "Nie podano"
  }

  const map: Record<string, string> = {
    online: "Zajęcia online",
    dziecko: "Zajęcia dla dziecka",
    mlodziez: "Zajęcia dla młodzieży",
    dorosly: "Zajęcia dla dorosłych",
    mokotow: "Zajęcia Mokotów",
    wilanow: "Zajęcia Wilanów",
    contact: "Kontakt ogólny",
  }

  return map[topic] ?? topic
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload

  const name = normalize(payload.name)
  const email = normalize(payload.email)
  const phone = normalize(payload.phone)
  const topic = normalize(payload.topic)
  const message = normalize(payload.message)
  const source = normalize(payload.source) || "Formularz kontaktowy"
  const consent = payload.consent === true
  const company = normalize(payload.company)

  if (company) {
    return Response.json({ ok: true })
  }

  if (!name || !email || !message || !consent) {
    return Response.json(
      { ok: false, error: "Brakuje wymaganych pól formularza." },
      { status: 400 },
    )
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const secure = process.env.SMTP_SECURE === "true"
  const to = process.env.CONTACT_EMAIL || "kontakt@worldspeak.pl"
  const from = process.env.MAIL_FROM || user

  if (!host || !user || !pass || !from) {
    return Response.json(
      {
        ok: false,
        error:
          "Brakuje konfiguracji SMTP. Ustaw SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS i MAIL_FROM.",
      },
      { status: 500 },
    )
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  })

  const subject = `[Worldspeak] ${formatTopic(topic)} - ${name}`
  const text = [
    `Źródło: ${source}`,
    `Imię i nazwisko: ${name}`,
    `E-mail: ${email}`,
    `Telefon: ${phone || "Nie podano"}`,
    `Temat: ${formatTopic(topic)}`,
    "",
    "Wiadomość:",
    message,
  ].join("\n")

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>Nowa wiadomość z formularza Worldspeak</h2>
          <p><strong>Źródło:</strong> ${source}</p>
          <p><strong>Imię i nazwisko:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "Nie podano"}</p>
          <p><strong>Temat:</strong> ${formatTopic(topic)}</p>
          <p><strong>Wiadomość:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    })

    return Response.json({ ok: true })
  } catch {
    return Response.json(
      { ok: false, error: "Nie udało się wysłać wiadomości." },
      { status: 500 },
    )
  }
}
