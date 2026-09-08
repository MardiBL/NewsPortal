export default function StatusBadge({ status }) {
  const styles = {
    Published: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    PUBLISHED: 'bg-emerald-50 text-emerald-600 border-emerald-100',

    Draft: 'bg-slate-100 text-slate-500 border-slate-200',
    DRAFT: 'bg-slate-100 text-slate-500 border-slate-200',

    Pending: 'bg-amber-50 text-amber-600 border-amber-100',
    PENDING: 'bg-amber-50 text-amber-600 border-amber-100',

    Approved: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    APPROVED: 'bg-emerald-50 text-emerald-600 border-emerald-100',

    Active: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    ACTIVE: 'bg-emerald-50 text-emerald-600 border-emerald-100',

    Inactive: 'bg-red-50 text-red-500 border-red-100',
    INACTIVE: 'bg-red-50 text-red-500 border-red-100',
  }

  return (
    <span
      className={`inline-flex rounded-full border px-2 py-0.5 text-[8px] font-medium ${
        styles[status] || 'border-slate-200 bg-slate-50 text-slate-500'
      }`}
    >
      {status}
    </span>
  )
}
