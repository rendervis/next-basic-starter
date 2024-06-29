import cx from 'clsx'
import { cn } from '../lib/utils'

type ContainerProps<T extends React.ElementType> = {
  as?: T
  className?: string
  children: React.ReactNode
  parentClass?: string
}

export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>) {
  let Component = as ?? 'div'

  return (
    <Component className={cx('mx-auto w-full px-6 lg:max-w-5xl lg:px-8')}>
      <div
        className={cn('max-w-2xl relative mx-auto lg:max-w-none', className)}
      >
        {children}
      </div>
    </Component>
  )
}
