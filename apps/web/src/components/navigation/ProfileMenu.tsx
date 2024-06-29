/* eslint-disable @next/next/no-img-element */
'use client'
import { Fragment } from 'react'

// third party
import { Menu, Transition } from '@headlessui/react'
import cx from 'clsx'

export function ProfileMenu() {
  return (
    <Menu as='div' className='relative ml-3'>
      <div>
        <Menu.Button className='focus:ring-primary-500 relative inline-flex rounded-md border border-transparent p-1 text-sm       text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset'>
          <span className='absolute -inset-1.5' />
          <span className='sr-only'>Open user menu</span>
          <img
            className='h-7 w-7 rounded-full'
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <Menu.Item>
            {({ active }) => (
              <a
                href='#'
                className={cx(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                Your Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href='#'
                className={cx(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                Settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href='#'
                className={cx(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
