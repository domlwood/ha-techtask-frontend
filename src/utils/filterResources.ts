import type { Resource } from '../types/resource'

export const filterResources = (resources: Resource[], query: string) => {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return resources
  }

  return resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(normalizedQuery) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)),
  )
}
