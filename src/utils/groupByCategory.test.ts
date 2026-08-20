import { describe, expect, it } from 'vitest'
import { groupByCategory } from './groupByCategory'

describe('groupByCategory', () => {
  it('returns an empty object when given no resources', () => {
    expect(groupByCategory([])).toEqual({})
  })
})
