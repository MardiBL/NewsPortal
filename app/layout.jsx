import './globals.css'

import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import BreakingNews from '@/components/BreakingNews'

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-900">
        {/* TOP BAR + NAVBAR STICKY */}
        <div className="sticky top-0 z-50">
          <TopBar />
          <Navbar />
        </div>

        {/* TICKER */}
        <BreakingNews />

        {/* PAGE */}
        {children}
      </body>
    </html>
  )
}
