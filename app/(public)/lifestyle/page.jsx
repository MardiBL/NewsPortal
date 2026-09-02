import Link from 'next/link'
import { newsData } from '../../../lib/sample'
import SmallNewsCard from '../../../components/card/SmallNewsCard'
import FeaturedNews from '../../../components/card/FeaturedNews'
import NewsCard from '../../../components/card/NewsCard'

export default function Lifestyle() {
  const news = newsData.filter(
    (item) => item.category.toLowerCase() === 'lifestyle',
  )
  const vertical = false
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Berita Lifestyle
        </h1>

        <p className="mt-2 text-slate-500">
          Inspirasi dan informasi gaya hidup untuk hari yang lebih baik
        </p>
      </div>
      <div className="grid md:grid-cols-12 items-stretch gap-6">
        <div className="col-span-6 h-full">
          <FeaturedNews layout="vertikal" />
        </div>

        <div className="col-span-6 h-full">
          <div
            className={`grid gap-3 ${vertical ? 'grid-cols-1' : 'lg:grid-cols-2'}`}
          >
            {' '}
            {newsData.map((item, index) => (
              <NewsCard
                key={index}
                {...item}
                small={true}
                vertical={vertical}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
