import HeroNews from '@/components/home/HeroNews'
import LatestNews from '@/components/home/LatestNews'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HeroNews />

      <LatestNews />

      <Footer />
    </main>
  )
}
