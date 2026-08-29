import { MapPin } from 'lucide-react'
const categories = ['Politik', 'Ekonomi', 'Olahraga', 'Teknologi', 'Lifestyle']

const company = [
  'Tentang Kami',
  'Tim Redaksi',
  'Pedoman Media Siber',
  'Kebijakan Privasi',
  'Syarat & Ketentuan',
]

const services = ['Kontak Redaksi', 'Iklan', 'Kemitraan', 'RSS Feed', 'Sitemap']

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-bold">NewsPortal</h2>

          <p className="mt-3 text-sm italic text-slate-400">
            Menyajikan Berita Terpercaya & Aktual
          </p>

          <p className="mt-5 max-w-sm leading-7 text-slate-300">
            Portal berita terdepan yang menghadirkan informasi terkini,
            terpercaya, dan berimbang untuk masyarakat Indonesia.
          </p>

          <div className="mt-7 flex gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-red-500" />

            <p className="text-slate-300">
              Jl. Sudirman No. 123,
              <br />
              Jakarta Pusat 10110
            </p>
          </div>
        </div>

        {/* PERUSAHAAN */}
        <div>
          <h3 className="text-xl font-bold">Perusahaan</h3>

          <ul className="mt-5 space-y-4 text-slate-300">
            {company.map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* KATEGORI */}
        <div>
          <h3 className="text-xl font-bold">Kategori</h3>

          <ul className="mt-5 space-y-4 text-slate-300">
            {categories.map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* LAYANAN */}
        <div>
          <h3 className="text-xl font-bold">Layanan</h3>

          <ul className="mt-5 space-y-4 text-slate-300">
            {services.map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 py-6 text-sm text-slate-400 md:flex-row">
          <p>© 2025 NewsPortal. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-white">
              Facebook
            </a>

            <a href="#" className="text-slate-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              Instagram
            </a>

            <a href="#" className="text-slate-400 hover:text-white">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
