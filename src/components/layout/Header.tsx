"use client"

import type { MouseEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const HEADER_OFFSET = 96

function scrollToElement(id: string) {
  const element = document.getElementById(id)

  if (!element) {
    return false
  }

  const top = Math.max(
    element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
    0,
  )

  window.scrollTo({ top, behavior: "smooth" })
  return true
}

export default function Header() {
  const pathname = usePathname()

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    window.location.assign("/")
  }

  const handleSectionClick =
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()

      if (pathname === "/") {
        if (!scrollToElement(id)) {
          window.location.assign(`/#${id}`)
        }
        return
      }

      window.location.assign(`/#${id}`)
    }

  const handleOnlineClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    if (pathname === "/zajecia-online") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    window.location.assign("/zajecia-online")
  }

  const handleSignupClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    if (pathname === "/zajecia-online") {
      if (!scrollToElement("online-form")) {
        window.location.assign("/zajecia-online#online-form")
      }
      return
    }

    if (pathname === "/") {
      if (!scrollToElement("kontakt")) {
        window.location.assign("/#kontakt")
      }
      return
    }

    window.location.assign("/#kontakt")
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadcff] bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3">
          <Image
            src="/logo-mark.png"
            alt="Worldspeak"
            width={48}
            height={48}
            className="h-11 w-11 rounded-2xl object-cover shadow-sm"
            priority
          />
          <div className="leading-tight">
            <div className="text-xl font-bold tracking-tight text-slate-950">
              Worldspeak
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Warszawa i online
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-[15px] font-medium text-slate-600 lg:flex">
          <Link
            href="/zajecia-online"
            onClick={handleOnlineClick}
            className="transition hover:text-[#7c25f5]"
          >
            Zajęcia online
          </Link>

          <a
            href="https://www.strefazajec.pl/instruktor/Wiktoria-Symeczko-3"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#7c25f5]"
          >
            Zajęcia Mokotów
          </a>

          <a
            href="https://www.strefazajec.pl/instruktor/Wiktoria-Symeczko"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#7c25f5]"
          >
            Zajęcia Wilanów
          </a>

          <Link
            href="/#dlaczegomy"
            onClick={handleSectionClick("dlaczegomy")}
            className="transition hover:text-[#7c25f5]"
          >
            Dlaczego my
          </Link>

          <Link
            href="/#faq"
            onClick={handleSectionClick("faq")}
            className="transition hover:text-[#7c25f5]"
          >
            FAQ
          </Link>

          <Link
            href="/#kontakt"
            onClick={handleSectionClick("kontakt")}
            className="transition hover:text-[#7c25f5]"
          >
            Kontakt
          </Link>
        </nav>

        <Link
          href="/#kontakt"
          onClick={handleSignupClick}
          className="hidden rounded-full bg-[#8b2cf5] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(139,44,245,0.28)] transition hover:-translate-y-0.5 hover:bg-[#741ce8] lg:inline-flex"
        >
          Zapisz się
        </Link>

        <Link
          href="/#kontakt"
          onClick={handleSignupClick}
          className="rounded-full bg-[#8b2cf5] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(139,44,245,0.28)] transition hover:-translate-y-0.5 hover:bg-[#741ce8] lg:hidden"
        >
          Zapisz się
        </Link>
      </div>
    </header>
  )
}
