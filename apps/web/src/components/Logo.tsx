import NextImage from 'next/image'

// packages imports
import { cn } from '@repo/ui/lib/utils'

export function Logo({ className, src }: { className?: string; src?: string }) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <NextImage
        width={40}
        height={40}
        className='inline-flex h-full w-auto object-contain'
        src={src || '/logo.svg'}
        alt='Logo'
      />
    </div>
  )
}
