export function FormField({ label, required = false, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-semibold text-slate-600">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      {children}
    </div>
  )
}

export function Input(props) {
  return (
    <input
      {...props}
      className="
        h-9
        w-full
        rounded-md
        border
        border-slate-200
        bg-white
        px-3
        text-[11px]
        text-slate-700
        outline-none
        transition
        placeholder:text-slate-300
        focus:border-blue-400
        focus:ring-2
        focus:ring-blue-100
      "
    />
  )
}

export function Select({ children, ...props }) {
  return (
    <select
      {...props}
      className="
        h-9
        w-full
        rounded-md
        border
        border-slate-200
        bg-white
        px-3
        text-[11px]
        text-slate-600
        outline-none
        focus:border-blue-400
        focus:ring-2
        focus:ring-blue-100
      "
    >
      {children}
    </select>
  )
}

export function Textarea(props) {
  return (
    <textarea
      {...props}
      className="
        min-h-[100px]
        w-full
        rounded-md
        border
        border-slate-200
        bg-white
        p-3
        text-[11px]
        text-slate-700
        outline-none
        placeholder:text-slate-300
        focus:border-blue-400
        focus:ring-2
        focus:ring-blue-100
      "
    />
  )
}
