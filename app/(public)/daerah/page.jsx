import Link from 'next/link'
import { newsData } from '../../../lib/sample'
import FeaturedNews from '../../../components/card/FeaturedNews'
import NewsCard from '../../../components/card/NewsCard'

export default function Daerah() {
  const vertical = true

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Berita Daerah
        </h1>

        <p className="mt-2 text-slate-500">
          Berita terbaru dari berbagai daerah di seluruh indonesia
        </p>
      </div>
      <div className="grid md:grid-cols-12 items-stretch gap-6">
        <div className="col-span-6 h-full">
          <FeaturedNews layout="vertikal" />
        </div>

        <div className="col-span-6 h-full">
          <div
            className={`grid gap-3 ${vertical ? 'grid-cols-1' : 'grid-cols-2'}`}
          >
            {' '}
            {newsData.map((item, index) => (
              <NewsCard
                key={index}
                {...item}
                small={true}
                vertical={vertical}
                fullwidth={true}
              />
            ))}
          </div>
          <div
            className={`grid gap-3 mt-3 ${!vertical ? 'grid-cols-1' : 'lg:grid-cols-2'}`}
          >
            {' '}
            {newsData.map((item, index) => (
              <NewsCard
                key={index}
                {...item}
                small={true}
                vertical={false}
                fullwidth={true}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
