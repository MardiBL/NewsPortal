'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  LayoutDashboard,
  Newspaper,
  Folder,
  CalendarDays,
  Megaphone,
  Star,
  MessageSquare,
  Users,
  Images,
  Image,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const menu = [
  {
    name: 'Dashboard',
    href: '/dashboard-admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Berita',
    href: '/dashboard-admin/berita',
    icon: Newspaper,
    dot: true,
  },
  {
    name: 'Kategori',
    href: '/dashboard-admin/kategori',
    icon: Folder,
  },
  {
    name: 'Agenda',
    href: '/dashboard-admin/agenda',
    icon: CalendarDays,
  },
  {
    name: 'Breaking News',
    href: '/dashboard-admin/breaking-news',
    icon: Megaphone,
  },
  {
    name: 'Berita Utama',
    href: '/dashboard-admin/featured',
    icon: Star,
  },
  {
    name: 'Komentar',
    href: '/dashboard-admin/komentar',
    icon: MessageSquare,
  },
  {
    name: 'Pengguna',
    href: '/dashboard-admin/pengguna',
    icon: Users,
  },
  {
    name: 'Media',
    href: '/dashboard-admin/media',
    icon: Images,
  },
  {
    name: 'Banner',
    href: '/dashboard-admin/banner',
    icon: Image,
  },
  {
    name: 'Pengaturan',
    href: '/dashboard-admin/pengaturan',
    icon: Settings,
  },
]

export default function Sidebar({ collapsed, setCollapsed }) {
  const pathname = usePathname()

  const isActive = (href) => {
    return pathname === href
  }

  return (
    <>
      {/* SIDEBAR */}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          flex-col
          overflow-hidden
          bg-[#071a2b]
          text-white
          shadow-xl
          transition-all
          duration-300
          ease-in-out
          ${collapsed ? 'w-0' : 'w-[260px]'}
        `}
      >
        <div className="flex min-w-[260px] h-full flex-col">
          {/* ================= LOGO ================= */}
          <div className="px-6 pt-6 pb-5">
            <Link
              href="/dashboard-admin/dashboard"
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-lg font-bold">N</span>
              </div>

              <span className="text-[20px] font-bold tracking-tight">
                NewsPortal
              </span>
            </Link>
          </div>

          {/* ================= MENU ================= */}
          <nav className="flex-1 overflow-y-auto px-3 py-5">
            <div className="space-y-1">
              {menu.map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      px-4
                      py-[11px]
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                      ${
                        active
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }
                    `}
                  >
                    {/* ICON */}
                    <Icon size={19} strokeWidth={2} className="shrink-0" />

                    {/* TEXT */}
                    <span className="flex-1">{item.name}</span>

                    {/* DOT - seperti gambar */}
                    {item.dot && (
                      <span
                        className={`
                          h-1.5
                          w-1.5
                          rounded-full
                          ${active ? 'bg-white' : 'bg-slate-500'}
                        `}
                      />
                    )}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* ================= KELUAR ================= */}
          <div className="border-t border-white/10 p-4">
            <button
              type="button"
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-lg
                px-4
                py-[11px]
                text-sm
                font-medium
                text-slate-300
                transition
                hover:bg-red-500/10
                hover:text-red-400
              "
            >
              <LogOut size={19} strokeWidth={2} />

              <span>Keluar</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ================= COLLAPSE BUTTON ================= */}
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? 'Buka sidebar' : 'Tutup sidebar'}
        className={`
          fixed
          top-5
          z-[60]
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white
          text-slate-700
          shadow-md
          transition-all
          duration-300
          hover:bg-slate-100
          ${collapsed ? 'left-4' : 'left-[240px]'}
        `}
      >
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>
    </>
  )
}
