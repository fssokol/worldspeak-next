import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-[#eadcff] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>© {new Date().getFullYear()} Worldspeak. Wszelkie prawa zastrzeżone.</div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/polityka-prywatnosci"
            className="transition hover:text-[#8b2cf5]"
          >
            Polityka prywatności
          </Link>
          <Link href="/rodo" className="transition hover:text-[#8b2cf5]">
            RODO
          </Link>
        </div>
      </div>
    </footer>
  )
}
