import type { CategoryOrder } from '../utils/sortCategories'

interface CategorySortSelectProps {
  value: CategoryOrder
  onChange: (order: CategoryOrder) => void
}

export const CategorySortSelect = ({
  value,
  onChange,
}: CategorySortSelectProps) => {
  return (
    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
      Sort categories
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as CategoryOrder)}
        className="rounded-full border border-slate-300 px-3 py-1.5 font-normal text-slate-900 transition-colors outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
      >
        <option value="default">Default</option>
        <option value="az">A–Z</option>
        <option value="za">Z–A</option>
      </select>
    </label>
  )
}
