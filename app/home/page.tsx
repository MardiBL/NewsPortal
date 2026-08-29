import HeroNews from '@/components/HeroNews'
import LatestNews from '@/components/LatestNews'
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
