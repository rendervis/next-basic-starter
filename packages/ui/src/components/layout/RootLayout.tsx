// package imports

function RootLayoutInner({
  navigationChildren,
  children,
  footerChildren,
}: {
  children: React.ReactNode
  navigationChildren?: React.ReactNode
  footerChildren?: React.ReactNode
}) {
  return (
    <>
      <header className='relative'>{navigationChildren}</header>
      <main className='flex h-full w-full flex-auto flex-col'>{children}</main>
      {footerChildren}
    </>
  )
}

export function RootLayout({
  navigationChildren,
  children,
  footerChildren,
}: {
  children: React.ReactNode
  navigationChildren?: React.ReactNode
  footerChildren?: React.ReactNode
}) {
  return (
    <RootLayoutInner
      navigationChildren={navigationChildren}
      footerChildren={footerChildren}
    >
      {children}
    </RootLayoutInner>
  )
}
