import { describe, expect, it } from 'vitest'
import { filterResources } from './filterResources'
import {
  articleResource,
  podcastResource,
  secondPodcastResource,
} from '../test/fixtures'

const resources = [articleResource, podcastResource, secondPodcastResource]

describe('filterResources', () => {
  it('returns all resources when the search term is empty', () => {
    expect(filterResources(resources, '')).toEqual(resources)
  })

  it('matches resources by title, case-insensitively', () => {
    expect(filterResources(resources, 'deep focus')).toEqual([
      secondPodcastResource,
    ])
  })

  it('matches resources by tag, case-insensitively', () => {
    expect(filterResources(resources, 'WELLBEING')).toEqual([podcastResource])
  })
})
