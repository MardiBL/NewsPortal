import { Newspaper, CheckCircle, Clock, Archive } from 'lucide-react'

const icons = {
  news: Newspaper,
  publish: CheckCircle,
  draft: Clock,
  archive: Archive,
}

export default function StatCard({ title, value, type }) {
  const Icon = icons[type]

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <Icon className="h-6 w-6" />
        </div>

        <div>
          <p className="text-2xl font-bold text-slate-900">{value}</p>

          <p className="text-sm text-slate-500">{title}</p>
        </div>
      </div>
    </div>
  )
}
