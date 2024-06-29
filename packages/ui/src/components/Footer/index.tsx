// project imports
import { Container } from '../Container'
import { MediaData, TSocialLinkComponent } from '../SocialMedia'

const defaultNavigation = [
  {
    title: 'Suport',
    links: [
      { title: 'Prețuri', href: '/support/pricing' },
      { title: 'Ghiduri', href: '/support/guides' },
    ],
  },
  {
    title: 'Companie',
    links: [
      { title: 'Despre', href: '/despre' },
      { title: 'Parteneri', href: '/partners' },
      // { title: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'GDPR', href: '/gdpr' },
      { title: 'Termeni', href: '/terms' },
    ],
  },
]
interface INavigationLink {
  title: string
  href: string
}
interface INavigationSection {
  title: string
  links: INavigationLink[]
}

export type TLinkComponent = React.ComponentType<
  React.ComponentPropsWithoutRef<any> & {
    href: string
    children?: React.ReactNode
    className?: string
  }
>

function Navigation({
  LinkComponent,
  navigation,
}: {
  LinkComponent: TLinkComponent
  navigation: INavigationSection[]
}) {
  return (
    <nav>
      <ul role='list' className='flex flex-1 justify-start gap-8'>
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className='font-display text-sm font-semibold tracking-wider text-neutral-950'>
              {section.title}
            </div>
            <ul role='list' className='mt-4 text-sm text-neutral-700'>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className='mt-4'>
                  <LinkComponent
                    href={link.href}
                    className='transition hover:text-neutral-950'
                  >
                    {link.title}
                  </LinkComponent>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer({
  children,
  SocialLinkComponent,
  NavigationLinkComponent,
  footerNavigation = defaultNavigation,
}: {
  SocialLinkComponent: TSocialLinkComponent
  NavigationLinkComponent: TLinkComponent
  footerNavigation?: INavigationSection[]
  children?: React.ReactNode
}) {
  return (
    <>
      <Container as='footer' className='mt-24 sm:mt-32 lg:mt-40'>
        <div className='grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-2'>
          <div className='flex justify-center lg:justify-start'>
            <MediaData SocialLinkComponent={SocialLinkComponent} />
          </div>
          <Navigation
            LinkComponent={NavigationLinkComponent}
            navigation={footerNavigation}
          />
        </div>
        {children}
      </Container>
    </>
  )
}
