interface FilterInputProps {
  value: string
  onChange: (value: string) => void
}

export const FilterInput = ({ value, onChange }: FilterInputProps) => {
  return (
    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
      Filter
      <div className="relative">
        <svg
          className="pointer-events-none absolute top-1/2 left-2.5 h-4 w-4 -translate-y-1/2 text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.35-4.35" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search by title or tag"
          className="rounded-full border border-slate-300 py-1.5 pr-3 pl-8 font-normal text-slate-900 transition-colors outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
        />
      </div>
    </label>
  )
}
