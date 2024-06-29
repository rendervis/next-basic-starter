import NextLink from 'next/link'

export function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof NextLink> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <NextLink className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </NextLink>
  )
}
