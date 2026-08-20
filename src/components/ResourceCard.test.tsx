import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ResourceCard } from './ResourceCard'
import { manyTagsResource, podcastResource } from '../test/fixtures'

describe('ResourceCard', () => {
  it('renders the title, thumbnail, and duration', () => {
    render(<ResourceCard resource={podcastResource} />)

    expect(screen.getByText('Mindful Moments')).toBeInTheDocument()
    expect(screen.getByAltText('Mindful Moments')).toHaveAttribute(
      'src',
      'https://example.com/photo.jpg',
    )
    expect(screen.getByText('25 min')).toBeInTheDocument()
  })

  it('renders at most 3 tags even when given more than 3', () => {
    render(<ResourceCard resource={manyTagsResource} />)

    expect(screen.getByText('nutrition')).toBeInTheDocument()
    expect(screen.getByText('energy')).toBeInTheDocument()
    expect(screen.getByText('tips')).toBeInTheDocument()
    expect(screen.queryByText('breakfast')).not.toBeInTheDocument()
    expect(screen.queryByText('quick')).not.toBeInTheDocument()
  })
})
