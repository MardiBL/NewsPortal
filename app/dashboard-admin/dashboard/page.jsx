import { Newspaper, Users, MessageSquare, UserRound } from 'lucide-react'

import AdminCard from '@/components/admin/AdminCard'

const stats = [
  {
    title: 'Total Berita',
    value: '124',
    change: '+12%',
    icon: Newspaper,
  },
  {
    title: 'Total Pengunjung',
    value: '8.532',
    change: '+16%',
    icon: Users,
  },
  {
    title: 'Total Komentar',
    value: '342',
    change: '+7%',
    icon: MessageSquare,
  },
  {
    title: 'Total Pengguna',
    value: '15',
    change: '+5%',
    icon: UserRound,
  },
]

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-lg font-bold text-slate-800">Dashboard</h1>

        <p className="mt-1 text-xs font-medium text-slate-600">
          Selamat datang, Admin!
        </p>

        <p className="text-[10px] text-slate-400">
          Berikut adalah ringkasan aktivitas NewsPortal hari ini.
        </p>
      </div>

      {/* STAT */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((item) => {
          const Icon = item.icon

          return (
            <AdminCard key={item.title} className="p-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-[10px] text-slate-400">{item.title}</p>

                  <p className="mt-1 text-xl font-bold text-slate-800">
                    {item.value}
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon size={16} />
                </div>
              </div>

              <p className="mt-3 text-[9px]">
                <span className="font-semibold text-emerald-500">
                  {item.change}
                </span>{' '}
                <span className="text-slate-400">dari bulan lalu</span>
              </p>
            </AdminCard>
          )
        })}
      </div>

      {/* CHART + NEWS */}
      <div className="mt-4 grid grid-cols-12 gap-4">
        <AdminCard className="col-span-7 p-4">
          <h2 className="text-xs font-bold text-slate-700">
            Statistik Pengunjung
          </h2>

          <p className="mt-1 text-[9px] text-slate-400">7 Hari Terakhir</p>

          <div className="mt-5 h-[180px]">
            <div className="flex h-full items-end gap-3 border-b border-l border-slate-200 px-3 pb-3">
              {[40, 55, 45, 62, 70, 65, 85].map((height, index) => (
                <div key={index} className="flex flex-1 items-end">
                  <div
                    className="w-full rounded-t bg-blue-500"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </AdminCard>

        <AdminCard className="col-span-5 p-4">
          <div className="mb-3 flex justify-between">
            <h2 className="text-xs font-bold">Berita Terbaru</h2>

            <span className="text-[9px] text-blue-600">Lihat Semua</span>
          </div>

          <div className="space-y-3">
            {[
              'Pemerintah Luncurkan Program Digitalisasi',
              'Indonesia Raih Prestasi di Ajang Internasional',
              'Teknologi AI Semakin Berkembang Pesat',
              'Tips Hidup Sehat di Era Modern',
            ].map((title, i) => (
              <div key={title} className="flex gap-3">
                <div className="h-10 w-12 shrink-0 rounded bg-slate-100" />

                <div className="flex-1">
                  <p className="line-clamp-2 text-[9px] font-medium">{title}</p>

                  <p className="mt-1 text-[8px] text-slate-400">
                    28 Apr 2025 14:20
                  </p>
                </div>

                <span className="h-fit rounded-full bg-emerald-50 px-2 py-1 text-[7px] text-emerald-600">
                  Published
                </span>
              </div>
            ))}
          </div>
        </AdminCard>
      </div>

      {/* BOTTOM */}
      <div className="mt-4 grid grid-cols-12 gap-4">
        <AdminCard className="col-span-7 p-4">
          <h2 className="mb-4 text-xs font-bold">Berita Populer</h2>

          <table className="w-full">
            <thead>
              <tr className="border-b text-[8px] text-slate-400">
                <th className="pb-2 text-left">#</th>
                <th className="pb-2 text-left">Judul</th>
                <th className="pb-2 text-left">Kategori</th>
                <th className="pb-2 text-right">Views</th>
              </tr>
            </thead>

            <tbody>
              {[
                [
                  'Pemerintah Luncurkan Program Digitalisasi',
                  'Teknologi',
                  '12.432',
                ],
                [
                  'Indonesia Raih Prestasi di Ajang Internasional',
                  'Olahraga',
                  '10.876',
                ],
                ['Teknologi AI Semakin Berkembang Pesat', 'Teknologi', '8.543'],
                ['Tips Hidup Sehat di Era Modern', 'Kesehatan', '7.321'],
              ].map((item, index) => (
                <tr
                  key={item[0]}
                  className="border-b border-slate-100 text-[9px]"
                >
                  <td className="py-2">{index + 1}</td>

                  <td className="py-2">{item[0]}</td>

                  <td className="py-2 text-blue-600">{item[1]}</td>

                  <td className="py-2 text-right">{item[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AdminCard>

        <AdminCard className="col-span-5 p-4">
          <h2 className="mb-4 text-xs font-bold">Agenda Mendatang</h2>

          {[
            ['15 Mei 2025', 'Seminar Teknologi Nasional 2025'],
            ['20 Mei 2025', 'Festival Budaya Nusantara'],
            ['25 Mei 2025', 'Workshop Jurnalistik'],
          ].map((item) => (
            <div
              key={item[0]}
              className="grid grid-cols-[80px_1fr] border-b border-slate-100 py-2"
            >
              <span className="text-[8px] text-slate-400">{item[0]}</span>

              <span className="text-[9px]">{item[1]}</span>
            </div>
          ))}
        </AdminCard>
      </div>
    </div>
  )
}
