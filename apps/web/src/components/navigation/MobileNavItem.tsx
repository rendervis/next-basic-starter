'use client'
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'

// third party imports
import cx from 'clsx'
import { checkActiveNavItem } from './DesktopNavItem'

type Props = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}
export function MobileNavItem({ href, children, onClick }: Props) {
  const pathname = usePathname()

  let isActive = checkActiveNavItem(href, pathname)
  return (
    <li
      className={cx(
        'flex w-full border-l-4 py-2 pl-3 pr-4 text-base font-medium capitalize',
        isActive
          ? 'border-primary-500 bg-gray-100 text-gray-700'
          : 'border-transparent text-gray-500'
      )}
      onClick={onClick}
    >
      {children}
    </li>
  )
}
export function MobileNavItemLink({ href, children, onClick }: Props) {
  return (
    <MobileNavItem href={href} onClick={onClick}>
      <NextLink href={href}>{children}</NextLink>
    </MobileNavItem>
  )
}
