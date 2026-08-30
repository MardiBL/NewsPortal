'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  LayoutDashboard,
  Newspaper,
  MessageSquare,
  Image,
  Monitor,
  Users,
  Settings,
  LogOut,
  ChevronDown,
  Tag,
} from 'lucide-react'
import { useState } from 'react'

const menu = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Berita',
    icon: Newspaper,
    children: [
      {
        title: 'Daftar Berita',
        href: '/admin/berita',
      },
      {
        title: 'Tambah Berita',
        href: '/admin/berita/tambah',
      },
      {
        title: 'Kategori',
        href: '/admin/berita/kategori',
      },
      {
        title: 'Tag',
        href: '/admin/berita/tag',
      },
    ],
  },
  {
    title: 'Komentar',
    href: '/admin/komentar',
    icon: MessageSquare,
  },
  {
    title: 'Media',
    href: '/admin/media',
    icon: Image,
  },
  {
    title: 'Banner',
    href: '/admin/banner',
    icon: Monitor,
  },
  {
    title: 'Pengguna',
    href: '/admin/pengguna',
    icon: Users,
  },
  {
    title: 'Pengaturan',
    href: '/admin/pengaturan',
    icon: Settings,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  const [openMenu, setOpenMenu] = useState(
    pathname.startsWith('/admin/berita') ? 'Berita' : null,
  )
  const beritaActive = pathname.startsWith('/admin/berita')

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-60 flex-col bg-slate-950 text-white">
      {/* LOGO */}
      <div className="border-b border-slate-800 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600">
            <Newspaper className="h-6 w-6" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-blue-500">NewsPortal</h1>

            <p className="text-xs text-slate-400">Admin Dashboard</p>
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className="flex-1 overflow-y-auto px-3 py-6">
        <p className="mb-4 px-3 text-xs font-medium uppercase text-slate-500">
          Menu Utama
        </p>

        <nav className="space-y-1">
          {menu.map((item) => {
            const Icon = item.icon

            // =========================
            // MENU DENGAN SUB MENU
            // =========================
            if (item.children) {
              const isOpen = openMenu === item.title
              const isActive = item.children.some(
                (child) => pathname === child.href,
              )

              return (
                <div key={item.title}>
                  <button
                    type="button"
                    onClick={() => setOpenMenu(isOpen ? null : item.title)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-3 transition ${
                      isActive || isOpen
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />

                      <span className="font-medium">{item.title}</span>
                    </div>

                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* SUB MENU */}
                  {isOpen && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.children.map((child) => {
                        const active = pathname === child.href

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-lg px-3 py-2.5 text-sm transition ${
                              active
                                ? 'text-blue-400'
                                : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            {child.title}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }

            // =========================
            // MENU BIASA
            // =========================
            const active = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 transition ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Icon className="h-5 w-5" />

                <span className="font-medium">{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* LOGOUT */}
      <div className="border-t border-slate-800 p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-800 hover:text-white">
          <LogOut className="h-5 w-5" />

          <span>Keluar</span>
        </button>
      </div>
    </aside>
  )
}
