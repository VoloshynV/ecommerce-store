'use client'

import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MainNavProps {
  data: Category[]
}

export const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname()

  const routes = data.map(({ id, name }) => ({
    href: `/category/${id}`,
    label: name,
    isActive: pathname === `/category/${id}`,
  }))

  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
      {routes.map(({ href, label, isActive }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            isActive ? 'text-black' : 'text-neutral-500'
          )}>
          {label}
        </Link>
      ))}
    </nav>
  )
}
