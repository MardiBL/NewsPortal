import Link from 'next/link'
import { Clock } from 'lucide-react'
export const news = [
  {
    id: 1,
    title: 'Inflasi Bulan Ini Terkendali di Angka 2,3 Persen',
    slug: 'inflasi-bulan-ini-terkendali-di-angka-2-3-persen',
    category: 'ekonomi',
    categoryLabel: 'Ekonomi',
    image: '/images/jakarta.jpg',
    time: '4 jam lalu',
    description:
      'Bank Indonesia memastikan inflasi tetap dalam target dan ekonomi nasional tetap stabil.',
  },

  {
    id: 2,
    title: 'Rupiah Menguat Terhadap Dolar AS',
    slug: 'rupiah-menguat-terhadap-dolar-as',
    category: 'ekonomi',
    categoryLabel: 'Ekonomi',
    image: '/images/dollar.jpg',
    time: '2 jam lalu',
    description:
      'Nilai tukar rupiah kembali mengalami penguatan terhadap dolar AS.',
  },

  {
    id: 3,
    title: 'Harga Emas Dunia Pecah Rekor Tertinggi',
    slug: 'harga-emas-dunia-pecah-rekor-tertinggi',
    category: 'ekonomi',
    categoryLabel: 'Ekonomi',
    image: '/images/emas.jpg',
    time: '3 jam lalu',
    description: 'Harga emas dunia kembali mencatatkan rekor tertinggi.',
  },

  {
    id: 4,
    title: 'Investasi Asing Masuk Rp45 Triliun di Kuartal III',
    slug: 'investasi-asing-masuk-rp45-triliun',
    category: 'ekonomi',
    categoryLabel: 'Ekonomi',
    image: '/images/investasi.jpg',
    time: '6 jam lalu',
    description:
      'Investasi asing terus mengalami peningkatan pada kuartal ketiga.',
  },

  {
    id: 5,
    title: 'Ekspor Komoditas Indonesia Meningkat Signifikan',
    slug: 'ekspor-komoditas-indonesia-meningkat',
    category: 'ekonomi',
    categoryLabel: 'Ekonomi',
    image: '/images/komoditas.jpg',
    time: '8 jam lalu',
    description:
      'Ekspor berbagai komoditas unggulan Indonesia mengalami peningkatan.',
  },
]
export default function SmallNewsCard() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {news.map((item) => (
        <Link
          key={item.id}
          href={`/berita/${item.category}/${item.slug}`}
          className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-lg"
        >
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-[170px] w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-4">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Clock size={14} />
              <span>{item.time}</span>
            </div>

            <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-gray-900 group-hover:text-blue-700">
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
