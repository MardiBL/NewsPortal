const news = [
  {
    title: 'Timnas Indonesia Lolos ke Final Piala AFF 2025',
    category: 'Olahraga',
    views: '1.245',
    status: 'Dipublikasikan',
  },
  {
    title: 'Pemerintah Luncurkan Program Digitalisasi UMKM Nasional',
    category: 'Ekonomi',
    views: '987',
    status: 'Dipublikasikan',
  },
  {
    title: 'Inflasi Bulan Ini Terkendali di Angka 2,1%',
    category: 'Ekonomi',
    views: '758',
    status: 'Dipublikasikan',
  },
  {
    title: 'Rapat Paripurna Bahas RUU Perlindungan Data Pribadi',
    category: 'Politik',
    views: '-',
    status: 'Draft',
  },
]

export default function RecentNews() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 p-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Berita Terbaru</h3>

          <p className="text-sm text-slate-500">Berita yang baru ditambahkan</p>
        </div>

        <a
          href="/admin/berita"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          Lihat Semua
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs uppercase text-slate-500">
              <th className="px-6 py-4">Judul</th>

              <th className="px-6 py-4">Kategori</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4">Dilihat</th>
            </tr>
          </thead>

          <tbody>
            {news.map((item, index) => (
              <tr
                key={index}
                className="border-b border-slate-100 last:border-none"
              >
                <td className="max-w-md px-6 py-5">
                  <p className="font-semibold text-slate-800">{item.title}</p>
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    {item.category}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-md px-3 py-1 text-xs font-semibold ${
                      item.status === 'Draft'
                        ? 'bg-yellow-50 text-yellow-600'
                        : 'bg-green-50 text-green-600'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-sm text-slate-500">
                  {item.views}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
