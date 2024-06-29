import cx from 'clsx'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './SocialIcons'

type TIcon = React.ComponentType<{ className?: string }>

export type TSocialLinkComponent = React.ComponentType<
  React.ComponentPropsWithoutRef<any> & {
    href: string
    icon: TIcon
    ariaProps?: Record<string, unknown>
  }
>
interface ISocialMediaProfile {
  title: string
  href: string
  icon: TIcon
  ariaLabel: string
}

export const defaultSocialMediaProfiles = [
  {
    title: 'Facebook',
    href: 'https://facebook.com',
    icon: FacebookIcon,
    ariaLabel: 'Follow on Facebook',
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com',
    icon: InstagramIcon,
    ariaLabel: 'Follow on Instagram',
  },
  {
    title: 'Linkedin',
    href: 'https://linkedincom',
    icon: LinkedInIcon,
    ariaLabel: 'Follow on Linkedin',
  },
]

export function SocialMedia({
  className,
  SocialLinkComponent,
  socialMediaProfiles = defaultSocialMediaProfiles,
}: {
  className?: string
  SocialLinkComponent: TSocialLinkComponent
  socialMediaProfiles?: ISocialMediaProfile[]
}) {
  return (
    <ul
      role='list'
      className={cx(
        'flex gap-x-4',

        className
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <SocialLinkComponent
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.ariaLabel}
            icon={socialMediaProfile.icon}
          />
        </li>
      ))}
    </ul>
  )
}

export function MediaData({
  children,
  SocialLinkComponent,
}: {
  SocialLinkComponent: TSocialLinkComponent
  children?: React.ReactNode
}) {
  return (
    <div className='max-w-sm'>
      {children}
      <SocialMedia SocialLinkComponent={SocialLinkComponent} />
    </div>
  )
}
