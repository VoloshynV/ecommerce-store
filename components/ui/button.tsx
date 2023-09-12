import { cn } from '@/lib/utils'
import React, { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        className={cn(
          'w-auto rounded-full bg-black border-transparent px-5 py-4 disabled:cursor-pointer disabled:opacity-50 text-white font-semibold hover:opacity-75 transition',
          className
        )}
        ref={ref}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
