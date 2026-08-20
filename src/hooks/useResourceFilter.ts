import { useMemo, useState } from 'react'
import { filterResources } from '../utils/filterResources'
import type { Resource } from '../types/resource'

export const useResourceFilter = (resources: Resource[]) => {
  const [query, setQuery] = useState('')
  const filteredResources = useMemo(
    () => filterResources(resources, query),
    [resources, query],
  )

  return { query, setQuery, filteredResources }
}
