import Link from 'next/link'

import StatCard from '@/components/admin/StatCard'
import NewsFilter from '@/components/admin/news/NewsFilter'
import NewsTable from '@/components/admin/news/NewsTable'
import NewsPagination from '@/components/admin/news/NewsPagination'

export default function NewsPage() {
  return (
    <div>
      {/* HEADER PAGE */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Daftar Berita</h1>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <span>Dashboard</span>

            <span>›</span>

            <span>Berita</span>

            <span>›</span>

            <span className="text-blue-600">Daftar Berita</span>
          </div>
        </div>

        <Link
          href="/admin/berita/tambah"
          className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          + Tambah Berita
        </Link>
      </div>

      {/* STAT */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Berita" value="128" type="news" />

        <StatCard title="Dipublikasikan" value="82" type="publish" />

        <StatCard title="Draft" value="36" type="draft" />

        <StatCard title="Arsip" value="10" type="archive" />
      </div>

      {/* FILTER */}
      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <NewsFilter />

        <NewsTable />

        <NewsPagination />
      </div>
    </div>
  )
}
