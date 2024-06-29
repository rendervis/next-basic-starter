'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'

// third party imports
import {
  Popover,
  PopoverGroup,
  PopoverPanel,
  PopoverButton,
} from '@headlessui/react'
import cx from 'clsx'

// project imports
import { TNavigationItem } from './MainNavigationBar'
import { DesktopNavItem } from './DesktopNavItem'

export function DesktopNavigation({
  navigation,
}: {
  navigation: TNavigationItem[]
}) {
  const [activePage, setActivePage] = useState<string | undefined>(undefined)
  // const [isShowing, setIsShowing] = useState(false)
  let pathname = usePathname()

  let isShowing = false

  useEffect(() => {
    setActivePage(pathname)
  }, [])

  console.log('activePage=', activePage)
  return (
    <PopoverGroup className=''>
      <div className='flex h-full justify-center space-x-8'>
        {navigation.map((page) => {
          isShowing = Boolean(page.categories && page.categories.length > 0)

          return (
            <Popover
              key={page.name}
              className='relative flex items-center'
              onMouseEnter={() => {
                // if (page.categories && page.categories.length > 0) {
                //   setActivePage(page.href)
                // }
                setActivePage(page.href)
              }}
              onMouseLeave={() => {
                if (!pathname.includes(activePage || '')) {
                  setActivePage(undefined)
                }
              }}
            >
              {({ open, close }) => (
                <>
                  <div
                    className='relative'
                    onClick={() => {
                      if (!page.categories || page.categories.length === 0) {
                        setTimeout(() => setActivePage(undefined), 200)
                      }
                    }}
                  >
                    <PopoverButton as={DesktopNavItem} href={page.href}>
                      {page.name}
                    </PopoverButton>
                  </div>

                  <>
                    {isShowing && (
                      <PopoverPanel
                        static
                        className='absolute inset-x-0 top-full text-gray-500 sm:text-sm'
                        style={{ width: '100vw' }}
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          className='absolute inset-0 top-1/2 bg-white shadow'
                          aria-hidden='true'
                        />

                        <nav className='relative z-20 bg-stone-900 text-stone-100'>
                          <div className='mx-auto w-fit max-w-7xl'>
                            <div className='flex flex-wrap items-stretch justify-center'>
                              {page.categories?.map((category, categoryIdx) => (
                                <div
                                  key={category.name}
                                  className='flex-end flex flex-col'
                                >
                                  <NextLink
                                    href={category?.href || '#'}
                                    id={`desktop-category-heading-${categoryIdx}`}
                                    className={cx(
                                      'px-4 py-6 text-sm uppercase',
                                      {
                                        underline: pathname === category?.href,
                                      }
                                    )}
                                    onClick={() => {
                                      setActivePage(category?.href)
                                    }}
                                  >
                                    <span>{category.name}</span>
                                  </NextLink>
                                  <ul
                                    role='list'
                                    aria-labelledby={`desktop-category-heading-${categoryIdx}`}
                                    className={cx(
                                      '-mt-2 flex flex-col px-4 last:pb-6'
                                      // {
                                      //   hidden:
                                      //     Boolean(!category?.children) ||
                                      //     category.children?.length === 0,
                                      // }
                                    )}
                                  >
                                    {category.children?.map((item) => (
                                      <li key={item.name} className='flex'>
                                        <NextLink
                                          href={item.href}
                                          className='pb-2 hover:text-gray-200'
                                        >
                                          {item.name}
                                        </NextLink>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </nav>
                      </PopoverPanel>
                    )}
                  </>
                </>
              )}
            </Popover>
          )
        })}
      </div>
    </PopoverGroup>
  )
}
