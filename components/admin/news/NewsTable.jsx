import NewsRow from './NewsRow'

const news = [
  {
    id: 1,
    image: '/images/olahraga.jpg',
    title: 'Timnas Indonesia Lolos ke Final Piala AFF 2025',
    category: 'Olahraga',
    author: 'Admin',
    status: 'Dipublikasikan',
    date: '27 Sep 2025',
    time: '10:30',
    views: '1.245',
  },
  {
    id: 2,
    image: '/images/ekonomi.jpg',
    title: 'Pemerintah Luncurkan Program Digitalisasi UMKM Nasional',
    category: 'Ekonomi',
    author: 'Admin',
    status: 'Dipublikasikan',
    date: '27 Sep 2025',
    time: '09:15',
    views: '987',
  },
  {
    id: 3,
    image: '/images/ekonomi.jpg',
    title: 'Inflasi Bulan Ini Terkendali di Angka 2,1%',
    category: 'Ekonomi',
    author: 'Admin',
    status: 'Dipublikasikan',
    date: '26 Sep 2025',
    time: '16:45',
    views: '758',
  },
  {
    id: 4,
    image: '/images/politik.jpg',
    title: 'Rapat Paripurna Bahas RUU Perlindungan Data Pribadi',
    category: 'Politik',
    author: 'Admin',
    status: 'Draft',
    date: '26 Sep 2025',
    time: '14:20',
    views: '-',
  },
  {
    id: 5,
    image: '/images/daerah.jpg',
    title: 'Hujan Lebat Guyur Jakarta, Beberapa Titik Tergenang',
    category: 'Daerah',
    author: 'Admin',
    status: 'Dipublikasikan',
    date: '26 Sep 2025',
    time: '11:05',
    views: '623',
  },
]

export default function NewsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1000px]">
        <thead className="bg-slate-50">
          <tr className="border-b border-slate-200 text-left text-sm text-slate-600">
            <th className="px-5 py-4">No</th>

            <th className="px-5 py-4">Judul Berita</th>

            <th className="px-5 py-4">Kategori</th>

            <th className="px-5 py-4">Penulis</th>

            <th className="px-5 py-4">Status</th>

            <th className="px-5 py-4">Tanggal</th>

            <th className="px-5 py-4">Dilihat</th>

            <th className="px-5 py-4">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {news.map((item, index) => (
            <NewsRow key={item.id} news={item} number={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
