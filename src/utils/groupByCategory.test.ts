import { describe, expect, it } from 'vitest'
import { groupByCategory } from './groupByCategory'
import type { Resource } from '../types/resource'

const podcastResource: Resource = {
  id: '001',
  category: 'Podcasts',
  title: 'Mindful Moments',
  thumbnail: 'https://example.com/photo.jpg',
  tags: ['wellbeing'],
  duration: 25,
  description: 'A calming podcast.',
  date_uploaded: '2025-07-10',
}

describe('groupByCategory', () => {
  it('returns an empty object when given no resources', () => {
    expect(groupByCategory([])).toEqual({})
  })

  it('groups a single resource under its category', () => {
    expect(groupByCategory([podcastResource])).toEqual({
      Podcasts: [podcastResource],
    })
  })
})
