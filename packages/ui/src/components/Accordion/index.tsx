'use client'
import React, { ReactNode, Fragment, forwardRef, useId } from 'react'

// third party
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import ChevronUpIcon from '@heroicons/react/24/solid/ChevronUpIcon'

// package imports
import { cn } from '../../lib/utils'

// types
type AccordionProps = Readonly<{
  children?: ReactNode
  className?: string

  /**
   * Specify whether an individual AccordionItem should be disabled
   */
  disabled?: boolean

  /**
   * The accordion title.
   */
  title: ReactNode
  /**
   * The callback function to render the expand button.
   * Can be a React component class.
   */
  renderToggle?: (props: any, ref?: any) => React.ReactNode | JSX.Element
}>

const defaultRenderToggle = forwardRef<HTMLButtonElement, any>(
  function DefRenderTog(props, ref) {
    return <button type='button' {...props} ref={ref} />
  }
)

export function Accordion({
  children,
  className,
  disabled = false,
  title = 'title',
  renderToggle,
}: AccordionProps) {
  const Toggle = renderToggle || defaultRenderToggle
  const id = useId()
  return (
    <Disclosure as='div'>
      {({ open }) => (
        <>
          <DisclosureButton as={Fragment}>
            <Toggle
              disabled={disabled}
              aria-controls={`accordion-button-${id}`}
              aria-expanded={open}
              className={cn(
                'text-primary-900 flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none',
                className
              )}
              type='button'
            >
              <span>{title}</span>
              <ChevronUpIcon
                className={`${open ? 'rotate-180 transform' : ''} text-primary-500 h-5 w-5`}
              />
            </Toggle>
          </DisclosureButton>
          <DisclosurePanel as='ul' className='space-y-1 px-4 text-sm'>
            {disabled
              ? React.Children.toArray(children).map((child) => {
                  return React.cloneElement(child as React.ReactElement, {
                    disabled,
                  })
                })
              : children}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
