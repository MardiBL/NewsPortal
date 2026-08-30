'use client'

import { Search, Calendar, RotateCcw } from 'lucide-react'

export default function NewsFilter() {
  return (
    <div className="border-b border-slate-200 p-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {/* SEARCH */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Cari judul berita..."
            className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        {/* CATEGORY */}
        <select className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-blue-500">
          <option>Semua Kategori</option>
          <option>Politik</option>
          <option>Ekonomi</option>
          <option>Olahraga</option>
          <option>Teknologi</option>
          <option>Daerah</option>
        </select>

        {/* STATUS */}
        <select className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-blue-500">
          <option>Semua Status</option>
          <option>Dipublikasikan</option>
          <option>Draft</option>
          <option>Arsip</option>
        </select>

        {/* DATE */}
        <div className="relative">
          <Calendar className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            type="date"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* RESET */}
        <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-medium text-slate-600 hover:bg-slate-50">
          <RotateCcw className="h-4 w-4" />
          Reset Filter
        </button>
      </div>
    </div>
  )
}
