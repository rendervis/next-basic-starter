import Link from 'next/link'

import { Container } from '@repo/ui/src/components/Container'

export default function NotFound() {
  return (
    <Container className='flex h-full items-center pt-24 sm:pt-32 lg:pt-40'>
      <div className='flex max-w-xl flex-col items-center text-center'>
        <p className='font-display text-4xl font-semibold text-neutral-950 sm:text-5xl'>
          404
        </p>
        <h1 className='font-display mt-4 text-2xl font-semibold text-neutral-950'>
          Page not found
        </h1>
        <p className='mt-2 text-sm text-neutral-600'>
          This page does not exist.
        </p>
        <Link
          href='/'
          className='mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700'
        >
          Go to landing page
        </Link>
      </div>
    </Container>
  )
}
