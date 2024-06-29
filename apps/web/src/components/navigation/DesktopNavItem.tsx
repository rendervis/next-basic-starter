'use client'
import { forwardRef } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

// packages imports
import { cn } from '@repo/ui/lib/utils'

type DesktopNavItemProps = {
  href: string
  isActive?: boolean
  children: React.ReactNode
  className?: string
}

function NavItem(
  { href, className, children }: DesktopNavItemProps,
  ref: React.Ref<HTMLAnchorElement>
) {
  const pathname = usePathname()

  let isActive = checkActiveNavItem(href, pathname)

  return (
    <li
      className={cn(
        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium capitalize hover:border-gray-300 hover:text-gray-700',
        isActive
          ? 'border-gray-100 font-bold text-gray-700'
          : 'border-transparent text-gray-500',
        className
      )}
    >
      <NextLink href={href || '#'} ref={ref} className=''>
        {children}
      </NextLink>
    </li>
  )
}

const DesktopNavItem = forwardRef<HTMLAnchorElement, DesktopNavItemProps>(
  NavItem
)
export { DesktopNavItem }

export function checkActiveNavItem(href: string, pathname: string) {
  if (!href) return false
  if (href.length > 1) {
    /** drop the first slash in href */
    const trimmedHref = href.slice(1)
    return pathname.includes(trimmedHref)
  }
  return pathname === href
}
