import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ResourceCard } from './ResourceCard'
import { podcastResource } from '../test/fixtures'

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
})
