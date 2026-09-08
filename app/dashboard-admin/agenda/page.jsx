'use client'

import { Pencil, Trash2 } from 'lucide-react'

import PageHeader from '@/components/admin/PageHeader'
import SearchInput from '@/components/admin/SearchInput'
import StatusBadge from '@/components/admin/StatusBadge'

const agenda = [
  ['Seminar Teknologi Nasional 2025', '15 Mei 2025', 'Jakarta', 'UPCOMING'],
  ['Festival Budaya Nusantara', '20 Mei 2025', 'TMII', 'UPCOMING'],
  ['Workshop Jurnalistik', '25 Mei 2025', 'Grand Sahid', 'UPCOMING'],
  ['Marathon Pendidikan', '30 Mei 2025', 'ICE BSD', 'UPCOMING'],
  ['Konferensi Ekonomi Digital', '18 Jun 2025', 'Jakarta', 'UPCOMING'],
]

export default function AgendaPage() {
  return (
    <div>
      <PageHeader
        title="Agenda"
        description="Kelola agenda dan event NewsPortal."
        buttonText="Tambah Agenda"
      />

      <div className="mb-4 w-72">
        <SearchInput placeholder="Cari agenda..." />
      </div>

      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 text-left text-[9px]">No</th>
              <th className="px-4 py-3 text-left text-[9px]">Judul</th>
              <th className="px-4 py-3 text-left text-[9px]">Tanggal</th>
              <th className="px-4 py-3 text-left text-[9px]">Lokasi</th>
              <th className="px-4 py-3 text-left text-[9px]">Status</th>
              <th className="px-4 py-3 text-right text-[9px]">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {agenda.map((item, index) => (
              <tr key={item[0]} className="border-b border-slate-100">
                <td className="px-4 py-3 text-[9px]">{index + 1}</td>

                <td className="px-4 py-3 text-[10px] font-medium">{item[0]}</td>

                <td className="px-4 py-3 text-[9px] text-slate-500">
                  {item[1]}
                </td>

                <td className="px-4 py-3 text-[9px] text-slate-500">
                  {item[2]}
                </td>

                <td className="px-4 py-3">
                  <StatusBadge status={item[3]} />
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
