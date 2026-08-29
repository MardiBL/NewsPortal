import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import FeaturedNews from './FeaturedNews'
import Newsletter from './Newsletter'
import PopularCategories from './PopularCategories'
import SocialMedia from './SocialMedia'
import NewsList from './NewsList'
import Agenda from './Agenda'
export default function LatestNews() {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 pb-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
        {/* ================= LEFT ================= */}
        <div>
          {/* TITLE */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-10 w-1 bg-red-600" />

              <h2 className="text-3xl font-semibold text-slate-900">
                Berita Terkini
              </h2>
            </div>

            <Link
              href="/berita"
              className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
            >
              Lihat Semua
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* BERITA UTAMA */}
          <FeaturedNews />

          {/* BERITA LAIN */}
          <NewsList />
        </div>

        {/* ================= RIGHT ================= */}
        <aside className="space-y-8">
          <Newsletter />

          <PopularCategories />

          <Agenda />

          <SocialMedia />
        </aside>
      </div>
    </section>
  )
}
