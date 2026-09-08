'use client'

import { Trash2, Upload } from 'lucide-react'

import PageHeader from '@/components/admin/PageHeader'

const media = [
  ['news-001.jpg', 'Image', '245 KB', '28 Apr 2025'],
  ['news-002.jpg', 'Image', '184 KB', '27 Apr 2025'],
  ['banner-home.jpg', 'Image', '532 KB', '26 Apr 2025'],
  ['agenda-001.jpg', 'Image', '321 KB', '25 Apr 2025'],
  ['logo-newsportal.png', 'Image', '142 KB', '24 Apr 2025'],
]

export default function MediaPage() {
  return (
    <div>
      <PageHeader
        title="Media"
        description="Kelola file dan media NewsPortal."
        buttonText="Upload Media"
      />

      <div className="mb-4 flex gap-2">
        {['Semua', 'Gambar', 'Video', 'Dokumen'].map((item, index) => (
          <button
            key={item}
            className={`
                rounded-md
                px-4
                py-2
                text-[9px]
                ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'border bg-white text-slate-500'
                }
              `}
          >
            {item}
          </button>
        ))}

        <input
          placeholder="Cari media..."
          className="ml-auto h-8 w-52 rounded-md border px-3 text-[9px]"
        />
      </div>

      <div className="rounded-lg border bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 text-left text-[9px]">No</th>
              <th className="px-4 py-3 text-left text-[9px]">Nama</th>
              <th className="px-4 py-3 text-left text-[9px]">Tipe</th>
              <th className="px-4 py-3 text-left text-[9px]">Ukuran</th>
              <th className="px-4 py-3 text-left text-[9px]">Tanggal</th>
              <th className="px-4 py-3 text-right text-[9px]">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {media.map((item, index) => (
              <tr key={item[0]} className="border-b border-slate-100">
                <td className="px-4 py-3 text-[9px]">{index + 1}</td>

                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-12 rounded bg-slate-100" />

                    <span className="text-[10px]">{item[0]}</span>
                  </div>
                </td>

                <td className="px-4 py-3 text-[9px]">{item[1]}</td>

                <td className="px-4 py-3 text-[9px] text-slate-500">
                  {item[2]}
                </td>

                <td className="px-4 py-3 text-[9px] text-slate-400">
                  {item[3]}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-end">
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
