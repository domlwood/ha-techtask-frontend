import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  startIcon?: ReactNode
  onClick?: () => void
  className?: string
}

export const Button = ({
  children,
  startIcon,
  onClick,
  className = '',
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-black shadow-sm transition-all duration-150 hover:bg-white/90 hover:shadow-md active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none ${className}`}
    >
      {startIcon}
      {children}
    </button>
  )
}
