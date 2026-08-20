import { useEffect, useState } from 'react'
import { FastAverageColor } from 'fast-average-color'

const fac = new FastAverageColor()

export const useAverageColor = (imageUrl: string) => {
  const [color, setColor] = useState('#000')

  useEffect(() => {
    fac
      .getColorAsync(imageUrl, { crossOrigin: 'anonymous' })
      .then((result) => setColor(result.hex))
      .catch(() => {})
  }, [imageUrl])

  return color
}
