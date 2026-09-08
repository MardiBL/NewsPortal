'use client'

import { Pencil, Trash2, Plus } from 'lucide-react'

import PageHeader from '@/components/admin/PageHeader'
import SearchInput from '@/components/admin/SearchInput'
import StatusBadge from '@/components/admin/StatusBadge'

const categories = [
  ['Teknologi', 'teknologi', 24],
  ['Politik', 'politik', 18],
  ['Ekonomi', 'ekonomi', 16],
  ['Olahraga', 'olahraga', 12],
  ['Kesehatan', 'kesehatan', 10],
  ['Pendidikan', 'pendidikan', 8],
  ['Hiburan', 'hiburan', 6],
  ['Gaya Hidup', 'gaya-hidup', 4],
]

export default function KategoriPage() {
  return (
    <div>
      <PageHeader
        title="Kategori"
        description="Kelola kategori berita."
        buttonText="Tambah Kategori"
      />

      <div className="mb-4 w-72">
        <SearchInput placeholder="Cari kategori..." />
      </div>

      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 text-left text-[9px]">No</th>
              <th className="px-4 py-3 text-left text-[9px]">Nama Kategori</th>
              <th className="px-4 py-3 text-left text-[9px]">Slug</th>
              <th className="px-4 py-3 text-left text-[9px]">Jumlah Berita</th>
              <th className="px-4 py-3 text-left text-[9px]">Status</th>
              <th className="px-4 py-3 text-right text-[9px]">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((item, index) => (
              <tr key={item[0]} className="border-b border-slate-100">
                <td className="px-4 py-3 text-[9px]">{index + 1}</td>

                <td className="px-4 py-3 text-[10px] font-medium">{item[0]}</td>

                <td className="px-4 py-3 text-[9px] text-slate-400">
                  {item[1]}
                </td>

                <td className="px-4 py-3 text-[9px]">{item[2]}</td>

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
