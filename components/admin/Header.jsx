'use client'

import { Bell, Moon, ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">
      {/* LEFT */}
      <div className="flex items-center gap-8">
        <div className="text-sm text-slate-700">Sabtu, 27 September 2025</div>

        <div className="flex items-center gap-2 text-red-600">
          <Bell className="h-5 w-5" />

          <span className="text-sm font-medium">Breaking News</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <button className="text-slate-600">
          <Moon className="h-5 w-5" />
        </button>

        <button className="relative text-slate-600">
          <Bell className="h-5 w-5" />

          <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 font-semibold text-slate-700">
            A
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Admin</p>

            <p className="text-xs text-slate-500">Super Admin</p>
          </div>

          <ChevronDown className="h-4 w-4 text-slate-500" />
        </div>
      </div>
    </header>
  )
}
