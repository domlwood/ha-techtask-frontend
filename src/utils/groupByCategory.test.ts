import { describe, expect, it } from 'vitest'
import { groupByCategory } from './groupByCategory'
import {
  articleResource,
  podcastResource,
  secondPodcastResource,
} from '../test/fixtures'

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

  it('splits resources across categories correctly', () => {
    expect(groupByCategory([podcastResource, articleResource])).toEqual({
      Podcasts: [podcastResource],
      Articles: [articleResource],
    })
  })
})
