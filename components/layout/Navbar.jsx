'use client'

import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const menus = [
  {
    name: 'Home',
    href: '/home',
  },
  {
    name: 'Nasional',
    href: '/nasional',
  },
  {
    name: 'Daerah',
    href: '/daerah',
  },
  {
    name: 'Politik',
    href: '/politik',
  },
  {
    name: 'Ekonomi',
    href: '/ekonomi',
  },
  {
    name: 'Lifestyle',
    href: '/lifestyle',
  },
  {
    name: 'Olahraga',
    href: '/olahraga',
  },
  {
    name: 'Teknologi',
    href: '/teknologi',
  },
  {
    name: 'Opini',
    href: '/opini',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <header className="border-b border-slate-200 bg-white  shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex min-h-20 py-2 items-center justify-between">
          {/* LOGO */}
          <div className="mr-4">
            <Link
              href="/home"
              className="text-3xl font-medium tracking-tight text-blue-700 md:text-4xl"
            >
              NewsPortal
            </Link>

            <p className="mt-1 text-xs italic text-slate-600 md:text-sm">
              Menyajikan Berita Terpercaya & Aktual
            </p>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-2 lg:flex">
            {menus.map((menu) => {
              const isActive = pathname === menu.href

              return (
                <Link
                  key={menu.name}
                  href={menu.href}
                  className={`whitespace-nowrap rounded-lg px-2 py-1.5 text-[16px] font-medium transition ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {menu.name}
                </Link>
              )
            })}
          </nav>

          {/* SEARCH */}
          <button
            className="hidden rounded-full p-2 transition hover:bg-slate-100 lg:block"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-slate-800" />
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <nav className="border-t border-slate-200 py-3 lg:hidden">
            {menus.map((menu) => {
              const isActive = pathname === menu.href

              return (
                <Link
                  key={menu.name}
                  href={menu.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-slate-100 px-4 py-3 text-[16px] font-medium transition ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {menu.name}
                </Link>
              )
            })}

            <button className="mt-3 flex items-center gap-2 px-4 py-2 text-slate-700">
              <Search className="h-5 w-5" />
              Cari berita
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
