import NextLink from 'next/link'

export function FooterCopyright() {
  return (
    <div className='mb-6 mt-8 flex justify-center gap-x-6 gap-y-4 pt-6'>
      <p className='text-xs text-neutral-300'>
        © Client Name 2024.{' '}
        <span>
          Project backed by{' '}
          <NextLink
            href='https://www.rendernext.eu/'
            target='_blank'
            className='underline'
          >
            rendernext
          </NextLink>
        </span>
      </p>
    </div>
  )
}
