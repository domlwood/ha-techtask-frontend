import { useState } from 'react'
import { groupByCategory } from '../utils/groupByCategory'
import { sortCategories, type CategoryOrder } from '../utils/sortCategories'
import type { Resource, ResourceCategory } from '../types/resource'
import { CategorySortSelect } from './CategorySortSelect'
import { ResourceCard } from './ResourceCard'

interface ResourceGridProps {
  resources: Resource[]
}

export const ResourceGrid = ({ resources }: ResourceGridProps) => {
  const [order, setOrder] = useState<CategoryOrder>('default')
  const grouped = groupByCategory(resources)
  const categories = sortCategories(
    Object.keys(grouped) as ResourceCategory[],
    order,
  )

  return (
    <div>
      <CategorySortSelect value={order} onChange={setOrder} />

      {categories.map((category) => (
        <section key={category} className="mb-8">
          <h2 className="mb-4 text-3xl font-semibold">{category}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-4">
            {grouped[category]?.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
