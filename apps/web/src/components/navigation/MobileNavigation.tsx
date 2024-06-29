'use client'
import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

// third party
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// packages
import { cn } from '@repo/ui/lib/utils'
import { Accordion } from '@repo/ui/src/components/Accordion'

// project imports
import { MobileNavItem } from './MobileNavItem'
import { TNavigationItem } from './MainNavigationBar'
import { checkActiveNavItem } from './DesktopNavItem'

export function MobileNavigation({
  navigation,
}: {
  navigation: TNavigationItem[]
}) {
  let pathname = usePathname()
  const router = useRouter()
  return (
    <Disclosure as='nav' className='relative left-[8px] top-[12px] w-full'>
      {({ open, close }) => (
        <>
          <DisclosureButton className='focus:ring-primary-500 relative inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset'>
            <span className='absolute -inset-[1px]' />
            <span className='sr-only'>Open main menu</span>
            {open ? (
              <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
            ) : (
              <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
            )}
          </DisclosureButton>
          <DisclosurePanel className='absolute -left-[8px] top-[52px] z-20 w-screen bg-gray-50 shadow-[0_14px_35px_-32px] shadow-gray-800 sm:hidden'>
            {/* <ul className='space-y-1 pb-4 pt-2'>
              {navigation.map((item) => (
                <MobileNavItem key={item.name} href={item.href}>
                  {item.name}
                </MobileNavItem>
              ))}
            </ul> */}

            {navigation.map((page) => {
              let isPageActive = checkActiveNavItem(page.href, pathname)
              return (
                <div key={page.href}>
                  {!page.categories ? (
                    <DisclosureButton as='button' className='flex w-full'>
                      <MobileNavItem
                        href={page.href}
                        onClick={() => {
                          router.push(page.href)
                        }}
                      >
                        {page.name}
                      </MobileNavItem>
                    </DisclosureButton>
                  ) : (
                    <Accordion
                      title={page.name}
                      className={cn(
                        'flex w-full justify-between border-l-4 py-2 pl-3 pr-4 text-base font-medium capitalize focus:outline-none',
                        isPageActive
                          ? 'border-primary-500 bg-gray-100 text-gray-700'
                          : 'border-transparent text-gray-500'
                      )}
                    >
                      {page.categories?.map((category, categoryIdx) => {
                        return (
                          <div key={category.href}>
                            <li
                              onClick={() => {
                                router.push(category.href || '#')
                                close()
                              }}
                              className={cn(
                                'cursor-pointer py-1 text-sm uppercase',
                                {
                                  underline: pathname === category?.href,
                                }
                              )}
                            >
                              {category.name}
                            </li>

                            <ul
                              role='list'
                              aria-labelledby={`mobile-category-heading-${categoryIdx}`}
                              className={cn('-mt-2 flex flex-col px-4', {
                                hidden:
                                  Boolean(!category?.children) ||
                                  category.children?.length === 0,
                              })}
                            >
                              {category.children?.map((item) => (
                                <li key={item.href} className='flex'>
                                  <NextLink
                                    href={item.href}
                                    className='hover:text-gray-200'
                                  >
                                    {item.name}
                                  </NextLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </Accordion>
                  )}
                </div>
              )
            })}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
