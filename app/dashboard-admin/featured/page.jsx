'use client'

import { Pencil, Trash2, GripVertical } from 'lucide-react'

import PageHeader from '@/components/admin/PageHeader'
import StatusBadge from '@/components/admin/StatusBadge'

const featured = [
  ['Pemerintah Luncurkan Program Digitalisasi', 1],
  ['Indonesia Raih Prestasi di Ajang Internasional', 2],
  ['Teknologi AI Semakin Berkembang Pesat', 3],
  ['Tips Hidup Sehat di Era Modern', 4],
  ['Ekonomi Indonesia Tumbuh Stabil', 5],
]

export default function FeaturedPage() {
  return (
    <div>
      <PageHeader
        title="Berita Utama"
        description="Atur berita yang tampil pada slide utama halaman Home."
        buttonText="Tambah Berita Utama"
      />

      <div className="rounded-lg border bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 text-left text-[9px]">No</th>
              <th className="px-4 py-3 text-left text-[9px]">Judul</th>
              <th className="px-4 py-3 text-left text-[9px]">Urutan</th>
              <th className="px-4 py-3 text-left text-[9px]">Status</th>
              <th className="px-4 py-3 text-right text-[9px]">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {featured.map((item, index) => (
              <tr key={item[0]} className="border-b border-slate-100">
                <td className="px-4 py-3 text-[9px]">{index + 1}</td>

                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <GripVertical size={14} className="text-slate-300" />

                    <div className="h-9 w-12 rounded bg-slate-100" />

                    <span className="text-[10px] font-medium">{item[0]}</span>
                  </div>
                </td>

                <td className="px-4 py-3 text-[10px]">{item[1]}</td>

                <td className="px-4 py-3">
                  <StatusBadge status="ACTIVE" />
                </td>

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
