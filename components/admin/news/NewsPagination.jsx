'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function NewsPagination() {
  return (
    <div className="flex items-center justify-between p-5">
      <p className="text-sm text-slate-500">
        Menampilkan 1 - 5 dari 128 berita
      </p>

      <div className="flex items-center gap-2">
        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500">
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button className="h-10 w-10 rounded-lg bg-blue-600 text-white">
          1
        </button>

        <button className="h-10 w-10 rounded-lg border border-slate-200">
          2
        </button>

        <button className="h-10 w-10 rounded-lg border border-slate-200">
          3
        </button>

        <span className="px-2 text-slate-400">...</span>

        <button className="h-10 w-10 rounded-lg border border-slate-200">
          26
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
