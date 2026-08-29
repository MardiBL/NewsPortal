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
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Link href="#">
        <img src={image} alt={title} className="h-56 w-full object-cover" />
      </Link>

      <div className="p-5">
        <span className="inline-block rounded-md bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {category}
        </span>

        <Link href="#">
          <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900 hover:text-blue-700">
            {title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
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
    </article>
  )
}
