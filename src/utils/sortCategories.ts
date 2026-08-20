import type { ResourceCategory } from '../types/resource'

export type CategoryOrder = 'default' | 'az' | 'za'

const CATEGORY_ORDER: ResourceCategory[] = [
  'Podcasts',
  'Articles',
  'Newsletters',
  'Recipes',
  'Fitness',
  'Meditation',
]

export const sortCategories = (
  categories: ResourceCategory[],
  order: CategoryOrder,
) => {
  if (order === 'az') {
    return [...categories].sort((a, b) => a.localeCompare(b))
  }

  if (order === 'za') {
    return [...categories].sort((a, b) => b.localeCompare(a))
  }

  return [...categories].sort(
    (a, b) => CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b),
  )
}
