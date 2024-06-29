import { ImageSection } from '@/components/ImageSection'
import { Card } from '@repo/ui/components/Card'
import { HeadingSection } from '@repo/ui/components/Heading'
import { Container } from '@repo/ui/components/Container'

const LINKS = [
  {
    title: 'Docs',
    href: 'https://turbo.build/repo/docs',
    description: 'Find in-depth information about Turborepo features and API.',
  },
  {
    title: 'Learn',
    href: 'https://turbo.build/repo/docs/handbook',
    description: 'Learn more about monorepos with our handbook.',
  },
  {
    title: 'Templates',
    href: 'https://turbo.build/repo/docs/getting-started/from-example',
    description: 'Choose from over 15 examples and deploy with a single click.',
  },
  {
    title: 'Deploy',
    href: 'https://vercel.com/new',
    description:
      'Instantly deploy your Turborepo to a shareable URL with Vercel.',
  },
]

export default async function HomePage(): Promise<JSX.Element> {
  return (
    <>
      <ImageSection className='h-[384px] bg-gray-100 md:h-[768px]' />
      <HeadingSection
        sectionClassName='text-center mt-56'
        title='Expert Design and Unmatched Trust'
        description='Welcome to Interior Studio, where we transform your home into a sanctuary of style and comfort. Specializing in residential design, we bring synergy, trust, and a relaxed approach to every project.'
      />
      <Container
        as='section'
        className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'
      >
        {LINKS.map(({ title, href, description }) => (
          <Card href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </Container>
    </>
  )
}
