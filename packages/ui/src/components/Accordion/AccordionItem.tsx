'use client'
import { ReactNode, useId } from 'react'

type AccordionItemProps = Readonly<{
  children?: ReactNode
  className?: string
}> &
  React.HTMLAttributes<HTMLLIElement>

export function AccordionItem({
  children,
  className,
  ...rest
}: AccordionItemProps) {
  const id = useId()

  return (
    <li className={className} id={`accordion-item-${id}`} {...rest}>
      {children}
    </li>
  )
}
