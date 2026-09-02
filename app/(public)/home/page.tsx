import NewsCard from '@/components/card/NewsCard'
import Agenda from '@/components/home/Agenda'
import SlideCard from '@/components/card/SlideCard'
import Newsletter from '@/components/home/Newsletter'
import PopularCategories from '@/components/home/PopularCategories'
import SocialMedia from '@/components/home/SocialMedia'
import { newsData } from '@/lib/sample'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import BreakingNews from '@/components/layout/BreakingNews'
import FeaturedNews from '@/components/card/FeaturedNews'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <BreakingNews />
      <SlideCard />

      <div className="mx-auto mt-16 max-w-7xl px-4 pb-16">
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
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {newsData.map((item, index) => (
                <NewsCard key={index} {...item} />
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <aside className="space-y-8">
            <Newsletter />
            <PopularCategories />

            <Agenda />

            <SocialMedia />
          </aside>
        </div>
      </div>
    </main>
  )
}
