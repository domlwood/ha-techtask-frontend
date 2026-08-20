import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useResourceFilter } from './useResourceFilter'
import { articleResource, podcastResource } from '../test/fixtures'

describe('useResourceFilter', () => {
  it('exposes all resources when the query is empty', () => {
    const { result } = renderHook(() =>
      useResourceFilter([articleResource, podcastResource]),
    )

    expect(result.current.filteredResources).toEqual([
      articleResource,
      podcastResource,
    ])
  })

  it('narrows filteredResources as the query changes', () => {
    const { result } = renderHook(() =>
      useResourceFilter([articleResource, podcastResource]),
    )

    act(() => {
      result.current.setQuery('sleep')
    })

    expect(result.current.query).toBe('sleep')
    expect(result.current.filteredResources).toEqual([articleResource])
  })
})
