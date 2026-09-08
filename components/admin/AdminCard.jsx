export default function AdminCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-lg border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  )
}
