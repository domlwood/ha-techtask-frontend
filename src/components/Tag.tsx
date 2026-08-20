import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
}

export const Tag = ({ children }: TagProps) => {
  return (
    <span className="rounded-full bg-(--card-color) px-2 py-0.5 text-xs font-medium text-white capitalize shadow-sm ring-1 ring-white/15">
      {children}
    </span>
  )
}
