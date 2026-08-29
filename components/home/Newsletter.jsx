import { Mail } from 'lucide-react'

export default function Newsletter() {
  return (
    <div className="rounded-2xl bg-blue-700 p-7 text-white">
      <div className="flex items-center gap-3">
        <Mail className="h-7 w-7" />

        <h3 className="text-2xl font-bold">Newsletter</h3>
      </div>

      <p className="mt-6 text-base leading-7 text-blue-50">
        Dapatkan berita terbaru langsung di email Anda setiap hari.
      </p>

      <input
        type="email"
        placeholder="Email Anda"
        className="
          mt-6
          w-full
          rounded-lg
          border
          border-white/30
          bg-white/10
          px-4
          py-3
          text-white
          outline-none
          placeholder:text-blue-100
          focus:border-white
        "
      />

      <button
        className="
          mt-4
          w-full
          rounded-lg
          bg-red-600
          py-3
          font-semibold
          text-white
          transition
          hover:bg-red-700
        "
      >
        Berlangganan
      </button>
    </div>
  )
}
