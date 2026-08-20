import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  startIcon?: ReactNode
  onClick?: () => void
}

export const Button = ({ children, startIcon, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-black"
    >
      {startIcon}
      {children}
    </button>
  )
}
