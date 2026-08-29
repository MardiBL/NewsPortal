import { CircleAlert } from 'lucide-react'

const news = [
  'Garuda berhasil meraih kemenangan 3-1 dalam pertandingan internasional',
  'Pemerintah meluncurkan program digitalisasi UMKM nasional',
  'Inflasi bulan ini terkendali',
]

export default function BreakingNews() {
  return (
    <section className="bg-red-600 text-white">
      <div className="mx-auto flex max-w-7xl items-center px-4">
        {/* LABEL */}
        <div className="z-10 flex shrink-0 items-center gap-2 rounded-lg bg-red-700 px-4 py-2.5 text-sm font-bold">
          <CircleAlert className="h-5 w-5" />
          <span>BREAKING</span>
        </div>

        {/* TICKER */}
        <div className="ml-6 flex-1 overflow-hidden">
          <div className="animate-marquee flex w-max whitespace-nowrap">
            <div className="flex gap-20 pr-20">
              {news.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>

            <div className="flex gap-20 pr-20">
              {news.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
