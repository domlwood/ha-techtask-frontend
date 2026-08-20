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
    <label className="flex items-center gap-2 text-sm font-semibold">
      Sort categories
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as CategoryOrder)}
        className="rounded-md border border-gray-300 px-2 py-1 font-normal"
      >
        <option value="default">Default</option>
        <option value="az">A–Z</option>
        <option value="za">Z–A</option>
      </select>
    </label>
  )
}
