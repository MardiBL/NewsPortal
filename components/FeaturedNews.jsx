import Link from 'next/link'
import { Share2, UserRound, Clock3, Eye } from 'lucide-react'

export default function FeaturedNews() {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2">
      {/* IMAGE */}
      <Link href="/berita/politik/dpr-setujui-ruu-omnibus-law-cipta-kerja">
        <img
          src="/images/politik.jpg"
          alt="DPR"
          className="h-full min-h-[320px] w-full rounded-xl object-cover"
        />
      </Link>

      {/* CONTENT */}
      <div className="flex flex-col p-2 md:pl-6">
        <div className="flex items-start justify-between">
          <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            Politik
          </span>

          <button className="text-slate-400 hover:text-slate-700">
            <Share2 className="h-5 w-5" />
          </button>
        </div>

        <Link href="/berita/politik/dpr-setujui-ruu-omnibus-law-cipta-kerja">
          <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-900 hover:text-blue-700 md:text-3xl">
            DPR Setujui RUU Omnibus Law Cipta Kerja dalam Sidang Paripurna
          </h3>
        </Link>

        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
          Setelah melalui pembahasan panjang selama 3 bulan, DPR RI akhirnya
          menyetujui RUU Omnibus Law Cipta Kerja dalam sidang paripurna yang
          berlangsung hingga...
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6 text-sm text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <UserRound className="h-4 w-4" />
              Andi Pratama
            </div>

            <div className="flex items-center gap-1">
              <Clock3 className="h-4 w-4" />1 jam lalu
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            15.2k
          </div>
        </div>
      </div>
    </article>
  )
}
