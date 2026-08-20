interface FilterInputProps {
  value: string
  onChange: (value: string) => void
}

export const FilterInput = ({ value, onChange }: FilterInputProps) => {
  return (
    <label className="flex items-center gap-2 text-sm font-semibold">
      Filter
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by title or tag"
        className="rounded-md border border-gray-300 px-2 py-1 font-normal"
      />
    </label>
  )
}
