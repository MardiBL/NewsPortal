import Sidebar from '@/components/admin/Sidebar'
import Header from '@/components/admin/Header'

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <div className="ml-60">
        <Header />

        <main className="p-8">{children}</main>
      </div>
    </div>
  )
}
