import Link from 'next/link'
import { TrendingUp } from 'lucide-react'

const categories = [
  {
    name: 'Politik',
    total: 245,
    color: 'bg-red-100 text-red-600',
  },
  {
    name: 'Ekonomi',
    total: 189,
    color: 'bg-green-100 text-green-600',
  },
  {
    name: 'Olahraga',
    total: 156,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Teknologi',
    total: 132,
    color: 'bg-purple-100 text-purple-600',
  },
]

export default function PopularCategories() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex items-center gap-3">
        <TrendingUp className="h-6 w-6 text-slate-700" />

        <h3 className="text-2xl font-bold text-slate-900">Kategori Populer</h3>
      </div>

      <div className="mt-5">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/berita/${category.name.toLowerCase()}`}
            className="
              flex
              items-center
              justify-between
              border-b
              border-slate-100
              py-5
              last:border-none
            "
          >
            <span className="text-lg text-slate-700">{category.name}</span>

            <span
              className={`
                rounded-full
                px-3
                py-1
                text-sm
                font-semibold
                ${category.color}
              `}
            >
              {category.total}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
