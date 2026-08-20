import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
}

export const Tag = ({ children }: TagProps) => {
  return (
    <span className="rounded-full bg-(--card-color) px-2 py-0.5 text-xs text-white capitalize">
      {children}
    </span>
  )
}
