import { useMemo, useState } from 'react'
import { groupByCategory } from '../utils/groupByCategory'
import { sortCategories, type CategoryOrder } from '../utils/sortCategories'
import { useResourceFilter } from './useResourceFilter'
import type { Resource, ResourceCategory } from '../types/resource'

export const useResourceGrid = (resources: Resource[]) => {
  const [order, setOrder] = useState<CategoryOrder>('default')
  const { query, setQuery, filteredResources } = useResourceFilter(resources)

  const grouped = useMemo(
    () => groupByCategory(filteredResources),
    [filteredResources],
  )

  const categories = useMemo(
    () => sortCategories(Object.keys(grouped) as ResourceCategory[], order),
    [grouped, order],
  )

  return { query, setQuery, order, setOrder, categories, grouped }
}
