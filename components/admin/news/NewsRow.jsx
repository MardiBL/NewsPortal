import Link from 'next/link'

import { Eye, Pencil, MoreVertical } from 'lucide-react'

export default function NewsRow({ news, number }) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-5 py-5 text-sm">{number}</td>

      {/* TITLE */}
      <td className="px-5 py-5">
        <div className="flex items-center gap-4">
          <img
            src={news.image}
            alt={news.title}
            className="h-14 w-20 rounded-lg object-cover"
          />

          <p className="max-w-xs font-semibold leading-6 text-slate-800">
            {news.title}
          </p>
        </div>
      </td>

      {/* CATEGORY */}
      <td className="px-5 py-5">
        <span className="rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          {news.category}
        </span>
      </td>

      {/* AUTHOR */}
      <td className="px-5 py-5 text-sm text-slate-600">{news.author}</td>

      {/* STATUS */}
      <td className="px-5 py-5">
        <span
          className={`rounded-md px-3 py-1 text-xs font-semibold ${
            news.status === 'Draft'
              ? 'bg-blue-50 text-blue-600'
              : 'bg-green-50 text-green-600'
          }`}
        >
          {news.status}
        </span>
      </td>

      {/* DATE */}
      <td className="px-5 py-5 text-sm text-slate-600">
        <div>{news.date}</div>

        <div className="mt-1">{news.time}</div>
      </td>

      {/* VIEWS */}
      <td className="px-5 py-5">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Eye className="h-4 w-4" />

          {news.views}
        </div>
      </td>

      {/* ACTION */}
      <td className="px-5 py-5">
        <div className="flex items-center gap-2">
          <Link
            href={`/admin/berita/edit/${news.id}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            <Pencil className="h-4 w-4" />
          </Link>

          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  )
}
