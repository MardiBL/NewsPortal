'use client'

import { Check, Pencil, Trash2 } from 'lucide-react'

import PageHeader from '@/components/admin/PageHeader'
import StatusBadge from '@/components/admin/StatusBadge'

const comments = [
  ['Budi Santoso', 'Artikel sangat bermanfaat!', 'Teknologi', 'PENDING'],
  ['Ani Pratama', 'Informasi yang sangat menarik.', 'Politik', 'APPROVED'],
  ['Andi Wijaya', 'Semoga program ini berjalan baik.', 'Ekonomi', 'APPROVED'],
  ['Rina Maharani', 'Terima kasih informasinya.', 'Kesehatan', 'PENDING'],
  ['Dedi Kurniawan', 'Berita terbaru dan terpercaya.', 'Nasional', 'APPROVED'],
]

export default function KomentarPage() {
  return (
    <div>
      <PageHeader
        title="Komentar"
        description="Kelola komentar pembaca pada berita."
      />

      <div className="mb-4 flex gap-3">
        <select className="h-9 rounded-md border px-3 text-[10px]">
          <option>Semua Status</option>
          <option>Pending</option>
          <option>Approved</option>
        </select>

        <input
          placeholder="Cari komentar..."
          className="h-9 w-64 rounded-md border px-3 text-[10px]"
        />
      </div>

      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 text-left text-[9px]">No</th>
              <th className="px-4 py-3 text-left text-[9px]">User</th>
              <th className="px-4 py-3 text-left text-[9px]">Komentar</th>
              <th className="px-4 py-3 text-left text-[9px]">Berita</th>
              <th className="px-4 py-3 text-left text-[9px]">Status</th>
              <th className="px-4 py-3 text-right text-[9px]">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {comments.map((item, index) => (
              <tr
                key={`${item[0]}-${index}`}
                className="border-b border-slate-100"
              >
                <td className="px-4 py-3 text-[9px]">{index + 1}</td>

                <td className="px-4 py-3 text-[10px] font-medium">{item[0]}</td>

                <td className="max-w-[280px] px-4 py-3 text-[9px] text-slate-500">
                  {item[1]}
                </td>

                <td className="px-4 py-3 text-[9px]">{item[2]}</td>

                <td className="px-4 py-3">
                  <StatusBadge status={item[3]} />
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Check size={13} className="text-emerald-500" />

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
