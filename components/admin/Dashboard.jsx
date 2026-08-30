import Sidebar from './Sidebar'
import Header from './Header'
import StatCard from './StatCard'
import NewsChart from './NewsChart'
import RecentNews from './RecentNews'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* SIDEBAR */}
      <Sidebar />

      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main className="ml-60 pt-20">
        <div className="p-8">
          {/* TITLE */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

            <p className="mt-1 text-slate-500">Selamat datang kembali, Admin</p>
          </div>

          {/* STATISTICS */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard title="Total Berita" value="128" type="news" />

            <StatCard title="Dipublikasikan" value="82" type="published" />

            <StatCard title="Draft" value="36" type="draft" />

            <StatCard title="Arsip" value="10" type="archive" />
          </div>

          {/* CHART + CATEGORY */}
          <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
            <NewsChart />

            {/* CATEGORY */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                Kategori Populer
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Jumlah berita berdasarkan kategori
              </p>

              <div className="mt-6 space-y-5">
                {[
                  ['Politik', 245],
                  ['Ekonomi', 189],
                  ['Olahraga', 156],
                  ['Teknologi', 132],
                  ['Lifestyle', 98],
                ].map(([name, total]) => (
                  <div key={name}>
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm font-medium text-slate-700">
                        {name}
                      </span>

                      <span className="text-sm font-semibold text-slate-900">
                        {total}
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{
                          width: `${Math.min((total / 245) * 100, 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RECENT NEWS */}
          <div className="mt-8">
            <RecentNews />
          </div>
        </div>
      </main>
    </div>
  )
}
