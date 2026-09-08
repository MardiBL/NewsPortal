export default function AdminTable({ columns, children, footer }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          {/* HEADER */}
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              {columns.map((column) => (
                <th
                  key={column}
                  className="whitespace-nowrap px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-wide text-slate-500"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>{children}</tbody>
        </table>
      </div>

      {/* FOOTER */}
      {footer && (
        <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3">
          {footer}
        </div>
      )}
    </div>
  )
}
