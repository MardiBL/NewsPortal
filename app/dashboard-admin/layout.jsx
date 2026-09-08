'use client'

import { useState } from 'react'
import Sidebar from '@/components/admin/Sidebar'
import Header from '@/components/admin/Header'

export default function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen min-w-[900px] bg-slate-50">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`
          min-h-screen
          transition-all
          duration-300
          ease-in-out
          ${collapsed ? 'ml-0' : 'ml-[260px]'}
        `}
      >
        <Header />

        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
