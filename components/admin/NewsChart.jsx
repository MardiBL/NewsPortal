'use client'

const data = [
  {
    month: 'Jan',
    value: 40,
  },
  {
    month: 'Feb',
    value: 55,
  },
  {
    month: 'Mar',
    value: 45,
  },
  {
    month: 'Apr',
    value: 70,
  },
  {
    month: 'Mei',
    value: 60,
  },
  {
    month: 'Jun',
    value: 85,
  },
  {
    month: 'Jul',
    value: 75,
  },
  {
    month: 'Agu',
    value: 95,
  },
  {
    month: 'Sep',
    value: 82,
  },
]

export default function NewsChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Statistik Berita</h3>

          <p className="text-sm text-slate-500">
            Jumlah berita yang dipublikasikan
          </p>
        </div>

        <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none">
          <option>2025</option>
          <option>2026</option>
        </select>
      </div>

      {/* CHART */}
      <div className="flex h-64 items-end gap-4">
        {data.map((item) => (
          <div
            key={item.month}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <div className="relative flex h-52 w-full items-end">
              <div
                className="w-full rounded-t-md bg-blue-600 transition hover:bg-blue-700"
                style={{
                  height: `${item.value}%`,
                }}
              />
            </div>

            <span className="text-xs text-slate-500">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
