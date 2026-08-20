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

const secondPodcastResource: Resource = {
  id: '007',
  category: 'Podcasts',
  title: 'Deep Focus',
  thumbnail: 'https://example.com/photo2.jpg',
  tags: ['focus'],
  duration: 40,
  description: 'A podcast for deep work sessions.',
  date_uploaded: '2025-07-20',
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

  it('keeps two resources of the same category together', () => {
    expect(groupByCategory([podcastResource, secondPodcastResource])).toEqual({
      Podcasts: [podcastResource, secondPodcastResource],
    })
  })
})
