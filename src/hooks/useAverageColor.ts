import { useEffect, useState } from 'react'
import { FastAverageColor } from 'fast-average-color'

const fac = new FastAverageColor()
const FALLBACK_COLOR = '#000'

export const useAverageColor = (imageUrl: string) => {
  const [color, setColor] = useState<string | null>(null)

  useEffect(() => {
    fac
      .getColorAsync(imageUrl, { crossOrigin: 'anonymous' })
      .then((result) => setColor(result.hex))
      .catch(() => setColor(FALLBACK_COLOR))
  }, [imageUrl])

  return color
}
