import Link from 'next/link'
import { newsData } from '../../../lib/sample'

export default function Opini() {
  const news = newsData.filter(
    (item) => item.category.toLowerCase() === 'lifestyle',
  )

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Berita Lifestyle
        </h1>

        <p className="mt-2 text-slate-500">
          Berita terbaru dan terpercaya seputar Lifestyle.
        </p>
      </div>

      {/* News */}
      {newsData.length === 0 ? (
        <div className="rounded-xl border bg-white p-10 text-center">
          <h2 className="text-xl font-semibold">Belum ada berita</h2>

          <p className="mt-2 text-slate-500">
            Belum tersedia berita untuk kategori Lifestyle.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsData.map((item) => (
            <Link
              key={item.id}
              href={`/berita/${item.category}/${item.slug}`}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold capitalize text-blue-600">
                    {item.category}
                  </span>

                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>

                <h2 className="line-clamp-2 text-xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-4 text-sm font-semibold text-blue-600">
                  Baca selengkapnya →
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}
