import StatCard from '@/components/admin/StatCard'

export default function DashboardPage() {
  return (
    <div>
      {/* TITLE */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

        <p className="mt-1 text-slate-500">Selamat datang kembali, Admin</p>
      </div>

      {/* STATISTIC */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Berita" value="128" type="news" />

        <StatCard title="Dipublikasikan" value="82" type="publish" />

        <StatCard title="Draft" value="36" type="draft" />

        <StatCard title="Arsip" value="10" type="archive" />
      </div>

      {/* CONTENT */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-slate-900">Statistik Berita</h2>

          <div className="flex h-80 items-center justify-center text-slate-400">
            Chart Statistik Berita
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Kategori Populer</h2>

          <div className="mt-6 space-y-5">
            <Category name="Politik" total="245" />

            <Category name="Ekonomi" total="189" />

            <Category name="Olahraga" total="156" />

            <Category name="Teknologi" total="132" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Category({ name, total }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-600">{name}</span>

      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
        {total}
      </span>
    </div>
  )
}
