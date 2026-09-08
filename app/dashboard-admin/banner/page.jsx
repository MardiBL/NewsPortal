'use client'

import { Pencil, Trash2 } from 'lucide-react'

import PageHeader from '@/components/admin/PageHeader'
import StatusBadge from '@/components/admin/StatusBadge'

const banners = [
  ['Banner Promo Event', 'Homepage', 'Aktif', 1],
  ['Banner Digital', 'Sidebar', 'Aktif', 2],
  ['Promo Berita', 'Homepage', 'Aktif', 3],
  ['Banner Agenda', 'Sidebar', 'Aktif', 4],
]

export default function BannerPage() {
  return (
    <div>
      <PageHeader
        title="Banner"
        description="Kelola banner yang ditampilkan di NewsPortal."
        buttonText="Tambah Banner"
      />

      <div className="rounded-lg border bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 text-left text-[9px]">No</th>

              <th className="px-4 py-3 text-left text-[9px]">Gambar</th>

              <th className="px-4 py-3 text-left text-[9px]">Judul</th>

              <th className="px-4 py-3 text-left text-[9px]">Posisi</th>

              <th className="px-4 py-3 text-left text-[9px]">Status</th>

              <th className="px-4 py-3 text-left text-[9px]">Urutan</th>

              <th className="px-4 py-3 text-right text-[9px]">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {banners.map((item, index) => (
              <tr key={item[0]} className="border-b border-slate-100">
                <td className="px-4 py-3 text-[9px]">{index + 1}</td>

                <td className="px-4 py-3">
                  <div className="h-10 w-20 rounded bg-slate-100" />
                </td>

                <td className="px-4 py-3 text-[10px] font-medium">{item[0]}</td>

                <td className="px-4 py-3 text-[9px]">{item[1]}</td>

                <td className="px-4 py-3">
                  <StatusBadge status="ACTIVE" />
                </td>

                <td className="px-4 py-3 text-[9px]">{item[3]}</td>

                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Pencil size={13} className="text-blue-500" />

                    <Trash2 size={13} className="text-red-500" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
