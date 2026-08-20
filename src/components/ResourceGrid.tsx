import { useResourceGrid } from '../hooks/useResourceGrid'
import type { Resource } from '../types/resource'
import { CategorySortSelect } from './CategorySortSelect'
import { FilterInput } from './FilterInput'
import { ResourceCard } from './ResourceCard'

interface ResourceGridProps {
  resources: Resource[]
}

export const ResourceGrid = ({ resources }: ResourceGridProps) => {
  const { query, setQuery, order, setOrder, categories, grouped } =
    useResourceGrid(resources)

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-end gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <FilterInput value={query} onChange={setQuery} />
        <CategorySortSelect value={order} onChange={setOrder} />
      </div>

      {categories.length === 0 ? (
        <p
          role="status"
          aria-live="polite"
          className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center text-slate-500 italic"
        >
          No results. Try a different search.
        </p>
      ) : (
        categories.map((category) => (
          <section key={category} className="mb-10">
            <div className="mb-4 flex items-baseline gap-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                {category}
              </h2>
              <span className="text-sm font-medium text-slate-400">
                {grouped[category]?.length}{' '}
                {grouped[category]?.length === 1 ? 'resource' : 'resources'}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-4">
              {grouped[category]?.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  )
}
