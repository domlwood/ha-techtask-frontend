import type { Resource, ResourceCategory } from '../types/resource'

export const groupByCategory = (resources: Resource[]) => {
  const grouped: Partial<Record<ResourceCategory, Resource[]>> = {}

  for (const resource of resources) {
    const group = grouped[resource.category] ?? []
    group.push(resource)
    grouped[resource.category] = group
  }

  return grouped
}
