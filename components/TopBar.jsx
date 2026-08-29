import { Bell, Moon } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-blue-700 text-white">
      <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-4">
        {/* LEFT */}
        <div className="flex items-center gap-6 text-sm font-medium md:text-base">
          <span>Sabtu, 27 September 2025</span>

          <div className="hidden items-center gap-2 sm:flex">
            <Bell className="h-4 w-4" />

            <span>Breaking News</span>
          </div>
        </div>

        {/* RIGHT */}
        <button
          className="rounded-full p-2 transition hover:bg-white/10"
          aria-label="Dark mode"
        >
          <Moon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
