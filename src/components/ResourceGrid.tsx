import { groupByCategory } from '../utils/groupByCategory'
import type { Resource } from '../types/resource'
import { ResourceCard } from './ResourceCard'

interface ResourceGridProps {
  resources: Resource[]
}

export const ResourceGrid = ({ resources }: ResourceGridProps) => {
  const grouped = groupByCategory(resources)

  return (
    <div>
      {Object.entries(grouped).map(([category, categoryResources]) => (
        <section key={category} className="mb-8">
          <h2 className="mb-4 text-3xl font-semibold">{category}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:lg:grid-cols-3 lg:grid-cols-4">
            {categoryResources?.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
