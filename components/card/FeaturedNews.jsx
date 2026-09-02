import Link from 'next/link'
import { Share2, UserRound, Clock3, Eye } from 'lucide-react'

export default function FeaturedNews({ layout = 'horizontal', news }) {
  const defaultNews = {
    title: 'DPR Setujui RUU Omnibus Law Cipta Kerja dalam Sidang Paripurna',
    slug: 'dpr-setujui-ruu-omnibus-law-cipta-kerja',
    category: 'politik',
    categoryLabel: 'Politik',
    image:
      'data:image/jpeg;base64,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',

    description:
      'Setelah melalui pembahasan panjang selama 3 bulan, DPR RI akhirnya menyetujui RUU Omnibus Law Cipta Kerja dalam sidang paripurna yang berlangsung hingga Setelah melalui pembahasan panjang selama 3 bulan, DPR RI akhirnya menyetujui RUU Omnibus Law Cipta Kerja dalam sidang paripurna yang berlangsung hingga Setelah melalui pembahasan panjang selama 3 bulan, DPR RI akhirnya menyetujui RUU Omnibus Law Cipta Kerja dalam sidang paripurna yang berlangsung hingga Setelah melalui pembahasan panjang selama 3 bulan, DPR RI akhirnya menyetujui RUU Omnibus Law Cipta Kerja dalam sidang paripurna yang berlangsung hinggaSetelah melalui pembahasan panjang selama 3 bulan, DPR RI akhirnya menyetujui RUU Omnibus Law Cipta Kerja dalam sidang paripurna yang berlangsung hinggaSetelah melalui pembahasan panjang selama 3 bulan, DPR RI akhirnya menyetujui RUU Omnibus Law Cipta Kerja dalam sidang paripurna yang berlangsung hingga',
    author: 'Andi Pratama',
    time: '1 jam lalu',
    views: '15.2k',
  }

  const data = news || defaultNews

  const detailUrl = `/berita/${data.category}/${data.slug}`

  const isHorizontal = layout === 'horizontal'

  return (
    <article
      className={`
        overflow-hidden rounded-2xl border border-slate-200
        bg-white shadow-sm
        ${isHorizontal ? 'grid md:grid-cols-2' : 'flex flex-col'}
      `}
    >
      {/* ========================= */}
      {/* IMAGE */}
      {/* ========================= */}

      <Link href={detailUrl} className="group block overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className={`
            w-full object-cover
            transition duration-500
            group-hover:scale-105
            ${isHorizontal ? 'h-full min-h-[320px]' : 'h-[300px] md:h-[400px]'}
          `}
        />
      </Link>

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}

      <div
        className={`
          flex flex-col
          ${isHorizontal ? 'p-5 md:pl-6' : 'p-6'}
        `}
      >
        {/* CATEGORY + SHARE */}

        <div className="flex items-start justify-between">
          <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            {data.categoryLabel}
          </span>

          <button
            type="button"
            className="text-slate-400 transition hover:text-slate-700"
            aria-label="Bagikan berita"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>

        {/* TITLE */}

        <Link href={detailUrl}>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900 transition  md:text-3xl">
            {data.title}
          </h2>
        </Link>

        {/* DESCRIPTION */}

        <p
          className={` line-clamp-13
            text-base leading-7 text-slate-600
            ${isHorizontal ? 'mt-4' : 'mt-5 max-w-4xl'}
          `}
        >
          {data.description}
        </p>

        {/* ========================= */}
        {/* META */}
        {/* ========================= */}

        <div
          className={`
            flex flex-wrap items-center
            justify-between gap-4
            text-sm text-slate-500
            ${isHorizontal ? 'mt-auto pt-6' : 'mt-6'}
          `}
        >
          {/* AUTHOR + TIME */}

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <UserRound className="h-4 w-4" />

              {data.author}
            </div>

            <div className="flex items-center gap-1">
              <Clock3 className="h-4 w-4" />

              {data.time}
            </div>
          </div>

          {/* VIEWS */}

          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />

            {data.views}
          </div>
        </div>
      </div>
    </article>
  )
}
