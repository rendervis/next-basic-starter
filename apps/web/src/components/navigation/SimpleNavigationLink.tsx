import NextLink from 'next/link'

// packages imports
import { cn } from '@repo/ui/lib/utils'

export function SimpleNavigationLink({
  href,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NextLink> & {
  href: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <>
      <NextLink
        href={href}
        className={cn('transition hover:text-neutral-950', className)}
        {...props}
      >
        {children}
      </NextLink>
    </>
  )
}
