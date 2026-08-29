import Link from 'next/link'
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react'

export default function HeroNews() {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-4">
      <div className="relative h-[560px] overflow-hidden rounded-2xl">
        {/* IMAGE */}
        <img
          src="/images/hero-news.jpg"
          alt="Timnas Indonesia"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* PREVIOUS */}
        <button
          className="
            absolute left-5 top-1/2 z-10
            flex h-12 w-12
            -translate-y-1/2
            items-center justify-center
            rounded-full
            bg-black/50
            text-white
            transition
            hover:bg-black/70
          "
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* NEXT */}
        <button
          className="
            absolute right-5 top-1/2 z-10
            flex h-12 w-12
            -translate-y-1/2
            items-center justify-center
            rounded-full
            bg-black/50
            text-white
            transition
            hover:bg-black/70
          "
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 z-10 w-full p-8 md:p-10">
          <div className="mb-4 flex items-center gap-4">
            <Link
              href="/berita/olahraga"
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white"
            >
              Olahraga
            </Link>

            <div className="flex items-center gap-2 text-white">
              <Clock className="h-5 w-5" />
              <span>6 jam lalu</span>
            </div>
          </div>

          <Link href="/berita/olahraga/timnas-indonesia-lolos-ke-final-piala-aff-2025">
            <h1 className="max-w-5xl text-3xl font-bold leading-tight text-white md:text-5xl">
              Timnas Indonesia Lolos ke Final Piala AFF 2025
            </h1>
          </Link>

          <p className="mt-5 max-w-4xl text-base leading-7 text-gray-200 md:text-xl">
            Setelah mengalahkan Thailand 2-1, Timnas Indonesia berhasil melaju
            ke babak final dan akan menghadapi Vietnam dalam pertandingan
            puncak.
          </p>
        </div>
      </div>
    </section>
  )
}
