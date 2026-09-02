import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-900">
        {/* TOP BAR + NAVBAR STICKY */}
        <div className=" sticky top-0 z-50">
          <TopBar />
          <Navbar />
        </div>

        {/* TICKER */}
        {/* <div className="flex items-center justify-center min-h-screen bg-red-400">
          Not Fount "jsajkdajasn"
        </div> */}
        {/* PAGE */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
