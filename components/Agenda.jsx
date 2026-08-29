import { CalendarDays } from 'lucide-react'

const agendas = [
  {
    date: '28 Sep',
    title: 'Sidang Kabinet Perdana',
    time: '09:00 WIB',
  },
  {
    date: '29 Sep',
    title: 'Peluncuran Program UMKM',
    time: '14:00 WIB',
  },
  {
    date: '01 Okt',
    title: 'Final Piala Presiden',
    time: '20:00 WIB',
  },
  {
    date: '03 Okt',
    title: 'Konferensi Teknologi',
    time: '10:00 WIB',
  },
]

export default function Agenda() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex items-center gap-3">
        <CalendarDays className="h-6 w-6 text-slate-600" />

        <h2 className="text-2xl font-bold text-slate-900">Agenda Mendatang</h2>
      </div>

      <div className="mt-7 space-y-7">
        {agendas.map((agenda) => (
          <div key={agenda.date} className="flex items-start gap-4">
            <div className="flex min-w-[70px] items-center justify-center rounded-xl bg-red-600 px-3 py-3 text-sm font-bold text-white">
              {agenda.date}
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">{agenda.title}</h3>

              <p className="mt-1 text-sm text-slate-500">{agenda.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
