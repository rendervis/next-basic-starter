'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

// third party imports
import cx from 'clsx'

// project imports
import { MobileNavigation } from './MobileNavigation'
import { DesktopNavigation } from './DesktopNavigation'
import { Logo } from '../Logo'

// types
export type TNavigationItem = {
  name: string
  href: string
  categories?: TCategory[]
}

type TCategory = {
  name: string
  href?: string
  children?: TChild[]
}

type TChild = {
  name: string
  href: string
}

// constants
export const mainNavigation: TNavigationItem[] = [
  {
    name: 'acasă',
    href: '/',
    categories: undefined,
  },
  {
    name: 'produse',
    href: '/produse',
    categories: [
      { name: 'miez de nucă', href: '/produse/miez-de-nuca' },
      { name: 'ulei', href: '/produse/ulei' },
    ],
  },
  { name: 'despre', href: '/despre' },
  { name: 'contact', href: '/contact' },
]

export function MainNavigationBar() {
  const path = usePathname()
  return (
    <>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-16 justify-between'>
          <div className='absolute left-0 ml-2 sm:hidden'>
            {/* Mobile menu button */}
            <MobileNavigation navigation={mainNavigation} />
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <NextLink
              href='/'
              aria-label='Home'
              className='inline-flex h-[64px] w-[64px] cursor-pointer items-center'
            >
              <Logo
                className={cx('h-12 w-12', path === '/plata' && 'md:hidden')}
              />
            </NextLink>
            <div className='hidden sm:flex sm:flex-1 sm:justify-center'>
              <DesktopNavigation navigation={mainNavigation} />
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 mr-2 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            {/* Profile dropdown */}
          </div>
        </div>
      </div>
    </>
  )
}
