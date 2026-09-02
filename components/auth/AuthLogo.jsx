import { Newspaper } from 'lucide-react'

export default function AuthLogo() {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
        <Newspaper className="h-8 w-8" />
      </div>

      <h1 className="mt-4 text-2xl font-bold text-slate-900">
        News<span className="text-blue-600">Portal</span>
      </h1>

      <p className="mt-1 text-sm text-slate-500">Portal Berita Terpercaya</p>
    </div>
  )
}
