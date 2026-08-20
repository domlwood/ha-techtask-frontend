import { describe, expect, it } from 'vitest'
import { sortCategories } from './sortCategories'

describe('sortCategories', () => {
  it('orders categories alphabetically in az mode', () => {
    expect(
      sortCategories(['Podcasts', 'Articles', 'Meditation'], 'az'),
    ).toEqual(['Articles', 'Meditation', 'Podcasts'])
  })

  it('orders categories reverse-alphabetically in za mode', () => {
    expect(
      sortCategories(['Articles', 'Meditation', 'Podcasts'], 'za'),
    ).toEqual(['Podcasts', 'Meditation', 'Articles'])
  })

  it('orders categories by the brief-defined order in default mode, regardless of input order', () => {
    expect(
      sortCategories(['Meditation', 'Podcasts', 'Articles'], 'default'),
    ).toEqual(['Podcasts', 'Articles', 'Meditation'])
  })
})
