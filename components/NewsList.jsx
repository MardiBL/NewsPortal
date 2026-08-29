import NewsCard from './NewsCard'

const news = [
  {
    image: '/images/ekonomi.jpg',
    category: 'Ekonomi',
    title: 'Pasar Saham Menguat di Tengah Perkembangan Ekonomi Global',
    description:
      'Pasar saham Indonesia kembali menunjukkan penguatan setelah adanya sentimen positif dari perkembangan ekonomi global.',
    author: 'Budi Santoso',
    time: '2 jam lalu',
    views: '10.5k',
  },
  {
    image: '/images/teknologi.jpg',
    category: 'Teknologi',
    title: 'Perkembangan Teknologi Digital Semakin Pesat',
    description:
      'Transformasi digital terus berkembang dan memberikan dampak besar terhadap kehidupan masyarakat Indonesia.',
    author: 'Rina Putri',
    time: '3 jam lalu',
    views: '8.7k',
  },
]

export default function NewsList() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      {news.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
    </div>
  )
}
