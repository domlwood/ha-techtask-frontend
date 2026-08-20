import type { Resource } from '../types/resource'

export const podcastResource: Resource = Object.freeze({
  id: '001',
  category: 'Podcasts',
  title: 'Mindful Moments',
  thumbnail: 'https://example.com/photo.jpg',
  tags: ['wellbeing'],
  duration: 25,
  description: 'A calming podcast.',
  date_uploaded: '2025-07-10',
})

export const secondPodcastResource: Resource = Object.freeze({
  id: '007',
  category: 'Podcasts',
  title: 'Deep Focus',
  thumbnail: 'https://example.com/photo2.jpg',
  tags: ['focus'],
  duration: 40,
  description: 'A podcast for deep work sessions.',
  date_uploaded: '2025-07-20',
})

export const articleResource: Resource = Object.freeze({
  id: '008',
  category: 'Articles',
  title: 'The Science of Sleep',
  thumbnail: 'https://example.com/photo3.jpg',
  tags: ['sleep'],
  duration: 8,
  description: 'Research on how sleep affects health.',
  date_uploaded: '2025-06-22',
})

export const manyTagsResource: Resource = Object.freeze({
  id: '009',
  category: 'Recipes',
  title: 'Energy Boost Smoothie',
  thumbnail: 'https://example.com/photo4.jpg',
  tags: ['nutrition', 'energy', 'tips', 'breakfast', 'quick'],
  duration: 10,
  description: 'A quick and nutritious smoothie recipe.',
  date_uploaded: '2025-07-15',
})
