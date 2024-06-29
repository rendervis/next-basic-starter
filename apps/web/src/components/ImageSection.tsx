import NextImage from 'next/image'
import landingHeroImage from '@/images/image_icon.svg'
import { cn } from '@repo/ui/lib/utils'

export function ImageSection({
  className,
  children,
  ...props
}: {
  className?: string
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn('relative', className)} {...props}>
      {children}
      <div className='absolute left-1/2 top-1/2 h-[272px] w-[272px] -translate-x-1/2 -translate-y-1/2 transform'>
        <NextImage
          src={landingHeroImage}
          alt='Hero Image'
          className='object-cover object-center'
          quality={100}
          priority
        />
      </div>
    </section>
  )
}
