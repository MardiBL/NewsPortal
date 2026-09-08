'use client'

import { Pencil, Trash2 } from 'lucide-react'

import PageHeader from '@/components/admin/PageHeader'
import SearchInput from '@/components/admin/SearchInput'
import StatusBadge from '@/components/admin/StatusBadge'

const breaking = [
  [
    'Indonesia Menjadi Tuan Rumah Konferensi Teknologi',
    'ACTIVE',
    '28 Apr 2025 08:00',
  ],
  ['Pemerintah Umumkan Kebijakan Ekonomi Baru', 'ACTIVE', '27 Apr 2025 14:30'],
  ['Timnas Indonesia Menang Dalam Pertandingan', 'ACTIVE', '26 Apr 2025 20:10'],
  ['Harga Komoditas Mengalami Kenaikan', 'ACTIVE', '25 Apr 2025 09:20'],
]

export default function BreakingNewsPage() {
  return (
    <div>
      <PageHeader
        title="Breaking News"
        description="Kelola berita yang ditampilkan pada ticker breaking news."
        buttonText="Tambah Breaking News"
      />

      <div className="mb-4 w-72">
        <SearchInput placeholder="Cari breaking news..." />
      </div>

      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 text-left text-[9px]">No</th>
              <th className="px-4 py-3 text-left text-[9px]">Judul</th>
              <th className="px-4 py-3 text-left text-[9px]">Status</th>
              <th className="px-4 py-3 text-left text-[9px]">Tanggal</th>
              <th className="px-4 py-3 text-right text-[9px]">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {breaking.map((item, index) => (
              <tr key={item[0]} className="border-b border-slate-100">
                <td className="px-4 py-3 text-[9px]">{index + 1}</td>

                <td className="px-4 py-3 text-[10px] font-medium">{item[0]}</td>

                <td className="px-4 py-3">
                  <StatusBadge status={item[1]} />
                </td>

                <td className="px-4 py-3 text-[9px] text-slate-400">
                  {item[2]}
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
