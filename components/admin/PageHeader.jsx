export default function PageHeader({
  title,
  description,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-bold text-slate-800">{title}</h1>

        {description && (
          <p className="mt-1 text-[11px] text-slate-400">{description}</p>
        )}
      </div>

      {buttonText && (
        <button
          type="button"
          onClick={onButtonClick}
          className="rounded-md bg-blue-600 px-4 py-2 text-[11px] font-medium text-white shadow-sm transition hover:bg-blue-700"
        >
          + {buttonText}
        </button>
      )}
    </div>
  )
}
