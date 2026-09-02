import Link from 'next/link'
import { Clock, UserRound, Eye } from 'lucide-react'

export default function NewsCard({
  image,
  category,
  title,
  description,
  author,
  time,
  views,
  small = false,
  vertical = false,
  fullwidth = false,
  slug = 'mklskmas',
}) {
  return (
    <Link
      href={`/berita/${slug}`}
      className={`flex h-full  overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
        vertical && fullwidth ? 'items-center' : ' flex-col items-start'
      }`}
    >
      {' '}
      <img
        src={image}
        alt={title}
        className={`object-cover transition duration-300 group-hover:scale-105 ${
          vertical ? 'h-35 w-35 p-1.5 rounded-l-2xl' : 'h-52 w-full'
        }`}
      />
      <div className={`p-5 ${vertical ? 'flex flex-1 flex-col' : ''}`}>
        <div className="mt-auto flex items-center gap-1  text-sm text-slate-500">
          <span className="bg-blue-500 text-white inline-block capitalize rounded-md px-3 py-0.5 text-sm font-semibold">
            {category}
          </span>

          {small && <> {time} </>}
        </div>

        <h2 className="mt-1 line-clamp-2 text-xl font-bold leading-snug text-slate-900">
          {title}
        </h2>

        {!small && (
          <div>
            <p className="mt-3  line-clamp-3 text-sm leading-6 text-slate-600">
              {description}
            </p>

            <div className="mt-auto flex items-center justify-between gap-1 pt-4 text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <div className="capitalize flex items-center gap-1">
                  <UserRound className="h-4 w-4" />
                  {author}
                </div>

                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {time}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {views}
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
