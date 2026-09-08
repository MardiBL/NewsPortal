'use client'

import { Pencil, Trash2, Plus, Search } from 'lucide-react'

import AdminTable from '@/components/admin/AdminTable'
import StatusBadge from '@/components/admin/StatusBadge'

const berita = [
  {
    id: 1,
    title: 'Pemerintah Luncurkan Program Digitalisasi',
    category: 'Teknologi',
    status: 'Published',
    date: '28 Apr 2025 10:24',
    image: '/images/news-1.jpg',
  },
  {
    id: 2,
    title: 'Indonesia Raih Prestasi di Ajang Internasional',
    category: 'Olahraga',
    status: 'Published',
    date: '27 Apr 2025 15:32',
    image: '/images/news-2.jpg',
  },
  {
    id: 3,
    title: 'Teknologi AI Semakin Berkembang Pesat',
    category: 'Teknologi',
    status: 'Published',
    date: '26 Apr 2025 08:16',
    image: '/images/news-3.jpg',
  },
  {
    id: 4,
    title: 'Tips Hidup Sehat di Era Modern',
    category: 'Kesehatan',
    status: 'Published',
    date: '25 Apr 2025 14:20',
    image: '/images/news-4.jpg',
  },
  {
    id: 5,
    title: 'Ekonomi Indonesia Tumbuh Stabil',
    category: 'Ekonomi',
    status: 'Published',
    date: '24 Apr 2025 11:05',
    image: '/images/news-5.jpg',
  },
]

export default function BeritaPage() {
  return (
    <div className="space-y-5">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-slate-800">Berita</h1>

          <p className="mt-1 text-[10px] text-slate-400">
            Kelola semua berita yang ada di NewsPortal.
          </p>
        </div>

        <button
          className="
            flex items-center gap-2
            rounded-md
            bg-blue-600
            px-3 py-2
            text-[10px]
            font-medium
            text-white
            shadow-sm
            transition
            hover:bg-blue-700
          "
        >
          <Plus size={13} />
          Tambah Berita
        </button>
      </div>

      {/* FILTER */}
      <div className="flex items-center justify-between gap-3">
        {/* SEARCH */}
        <div className="relative w-64">
          <Search
            size={13}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Cari berita..."
            className="
              h-8
              w-full
              rounded-md
              border
              border-slate-200
              bg-white
              pl-8
              pr-3
              text-[10px]
              outline-none
              transition
              focus:border-blue-400
              focus:ring-2
              focus:ring-blue-100
            "
          />
        </div>

        {/* FILTER */}
        <select
          className="
            h-8
            rounded-md
            border
            border-slate-200
            bg-white
            px-3
            text-[10px]
            text-slate-500
            outline-none
          "
        >
          <option>Semua Status</option>
          <option>Published</option>
          <option>Draft</option>
        </select>
      </div>

      {/* TABLE */}
      <AdminTable
        columns={['No', 'Judul', 'Kategori', 'Status', 'Tanggal', 'Aksi']}
        footer={
          <>
            <div className="flex items-center gap-1">
              <button
                className="
                  flex h-6 w-6
                  items-center justify-center
                  rounded
                  border
                  border-slate-200
                  text-[10px]
                  text-slate-500
                  hover:bg-slate-50
                "
              >
                ‹
              </button>
              <button
                className="
                  flex h-6 w-6
                  items-center justify-center
                  rounded
                  bg-blue-600
                  text-[9px]
                  font-medium
                  text-white
                "
              >
                1
              </button>

              <button
                className="
                  flex h-6 w-6
                  items-center justify-center
                  rounded
                  border
                  border-slate-200
                  text-[9px]
                  text-slate-500
                  hover:bg-slate-50
                "
              >
                2
              </button>

              <button
                className="
                  flex h-6 w-6
                  items-center justify-center
                  rounded
                  border
                  border-slate-200
                  text-[9px]
                  text-slate-500
                  hover:bg-slate-50
                "
              >
                3
              </button>

              <button
                className="
                  flex h-6 w-6
                  items-center justify-center
                  rounded
                  border
                  border-slate-200
                  text-[10px]
                  text-slate-500
                  hover:bg-slate-50
                "
              >
                ›
              </button>
            </div>
          </>
        }
      >
        {/* ROW */}
        {berita.map((item, index) => (
          <tr
            key={item.id}
            className="
              border-b
              border-slate-100
              transition
              hover:bg-slate-50
            "
          >
            {/* NO */}
            <td className="px-4 py-3 text-[9px] text-slate-400">{index + 1}</td>

            {/* JUDUL */}
            <td className="px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="h-9 w-12 flex-shrink-0 overflow-hidden rounded bg-slate-100">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>

                <span className="max-w-[280px] text-[10px] font-medium text-slate-700">
                  {item.title}
                </span>
              </div>
            </td>

            {/* KATEGORI */}
            <td className="px-4 py-3 text-[9px] text-slate-500">
              {item.category}
            </td>

            {/* STATUS */}
            <td className="px-4 py-3">
              <StatusBadge status={item.status} />
            </td>

            {/* TANGGAL */}
            <td className="whitespace-nowrap px-4 py-3 text-[9px] text-slate-400">
              {item.date}
            </td>

            {/* AKSI */}
            <td className="px-4 py-3">
              <div className="flex justify-end gap-2">
                <button
                  className="
                    text-blue-500
                    transition
                    hover:text-blue-700
                  "
                  title="Edit"
                >
                  <Pencil size={13} />
                </button>

                <button
                  className="
                    text-red-500
                    transition
                    hover:text-red-700
                  "
                  title="Hapus"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </AdminTable>
    </div>
  )
}
