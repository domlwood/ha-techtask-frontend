import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ResourceCard } from './ResourceCard'
import { useAverageColor } from '../hooks/useAverageColor'
import { manyTagsResource, podcastResource } from '../test/fixtures'

vi.mock('../hooks/useAverageColor', () => ({
  useAverageColor: vi.fn(),
}))

describe('ResourceCard', () => {
  afterEach(() => {
    vi.mocked(useAverageColor).mockReset()
  })

  it('renders the title, thumbnail, and duration', () => {
    vi.mocked(useAverageColor).mockReturnValue('#abcdef')

    render(<ResourceCard resource={podcastResource} />)

    expect(screen.getByText('Mindful Moments')).toBeInTheDocument()
    expect(screen.getByAltText('Mindful Moments')).toHaveAttribute(
      'src',
      'https://example.com/photo.jpg',
    )
    expect(screen.getByText('25 min')).toBeInTheDocument()
  })

  it('renders at most 3 tags even when given more than 3', () => {
    vi.mocked(useAverageColor).mockReturnValue('#abcdef')

    render(<ResourceCard resource={manyTagsResource} />)

    expect(screen.getByText('nutrition')).toBeInTheDocument()
    expect(screen.getByText('energy')).toBeInTheDocument()
    expect(screen.getByText('tips')).toBeInTheDocument()
    expect(screen.queryByText('breakfast')).not.toBeInTheDocument()
    expect(screen.queryByText('quick')).not.toBeInTheDocument()
  })

  it('renders a loading skeleton instead of the card while the average color is still loading', () => {
    vi.mocked(useAverageColor).mockReturnValue(null)

    render(<ResourceCard resource={podcastResource} />)

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.queryByText('Mindful Moments')).not.toBeInTheDocument()
  })
})
