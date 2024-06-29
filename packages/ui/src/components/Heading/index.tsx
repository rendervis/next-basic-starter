// third party imports
import { VariantProps, cva } from 'class-variance-authority'

// package imports
import { cn } from '../../lib/utils'
import { Container } from '../Container'

const variants = cva('', {
  variants: {
    size: {
      md: 'text-xl font-bold md:text-2xl',
      lg: 'text-2xl font-bold md:text-4xl',
      xl: 'text-4xl font-bold md:text-6xl',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    size: 'md',
    align: 'center',
  },
})

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
  className?: string
} & VariantProps<typeof variants>

export function Heading({
  size,
  align,
  className,
  children,
  as = 'h6',
  ...rest
}: HeadingProps) {
  const Component = as

  return (
    <Component className={cn(variants({ size, align }), className)} {...rest}>
      {children}
    </Component>
  )
}

export function HeadingSection({
  title,
  description,
  sectionClassName,
  headingClassName,
}: {
  title: React.ReactNode
  description?: React.ReactNode
  sectionClassName?: string
  headingClassName?: string
}) {
  return (
    <Container
      as='section'
      className={cn('flex w-full flex-col', sectionClassName)}
    >
      <Heading as='h1' size='lg' className={headingClassName}>
        {title}
      </Heading>
      <p className='mx-auto mt-6 max-w-3xl text-lg font-light text-gray-400'>
        {description}
      </p>
    </Container>
  )
}
