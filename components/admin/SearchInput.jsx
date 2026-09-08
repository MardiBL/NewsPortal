'use client'

import { Search } from 'lucide-react'

export default function SearchInput({ placeholder = 'Cari...' }) {
  return (
    <div className="relative">
      <Search
        size={14}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="
          h-9
          w-full
          rounded-md
          border
          border-slate-200
          bg-white
          pl-9
          pr-3
          text-[11px]
          outline-none
          transition
          focus:border-blue-400
          focus:ring-2
          focus:ring-blue-100
        "
      />
    </div>
  )
}
