import { useState } from 'react'
import { groupByCategory } from '../utils/groupByCategory'
import { sortCategories, type CategoryOrder } from '../utils/sortCategories'
import { useResourceFilter } from '../hooks/useResourceFilter'
import type { Resource, ResourceCategory } from '../types/resource'
import { CategorySortSelect } from './CategorySortSelect'
import { FilterInput } from './FilterInput'
import { ResourceCard } from './ResourceCard'

interface ResourceGridProps {
  resources: Resource[]
}

export const ResourceGrid = ({ resources }: ResourceGridProps) => {
  const [order, setOrder] = useState<CategoryOrder>('default')
  const { query, setQuery, filteredResources } = useResourceFilter(resources)
  const grouped = groupByCategory(filteredResources)
  const categories = sortCategories(
    Object.keys(grouped) as ResourceCategory[],
    order,
  )

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-4">
        <FilterInput value={query} onChange={setQuery} />
        <CategorySortSelect value={order} onChange={setOrder} />
      </div>

      {categories.length === 0 ? (
        <p role="status" aria-live="polite" className="text-gray-600 italic">
          No results. Try a different search.
        </p>
      ) : (
        categories.map((category) => (
          <section key={category} className="mb-8">
            <h2 className="mb-4 text-3xl font-semibold">{category}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-4">
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
