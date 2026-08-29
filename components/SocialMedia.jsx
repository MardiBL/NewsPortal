import { UsersRound } from 'lucide-react'

const socials = [
  {
    name: 'Facebook',
    followers: '250k',
    className: 'bg-blue-600',
  },
  {
    name: 'Twitter',
    followers: '180k',
    className: 'bg-sky-500',
  },
  {
    name: 'Instagram',
    followers: '320k',
    className: 'bg-pink-600',
  },
  {
    name: 'YouTube',
    followers: '150k',
    className: 'bg-red-600',
  },
]

export default function SocialMedia() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex items-center gap-3">
        <UsersRound className="h-6 w-6 text-slate-600" />

        <h2 className="text-2xl font-bold text-slate-900">Ikuti Kami</h2>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href="#"
            className={`flex h-24 flex-col items-center justify-center rounded-xl text-white transition hover:opacity-90 ${social.className}`}
          >
            <span className="text-lg font-bold">{social.name}</span>

            <span className="text-sm">{social.followers}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
