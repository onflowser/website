import React, { ReactElement } from 'react'
import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'

type Props = {
  children: ReactElement | ReactElement[]
}

function MainLayout({ children }: Props) {
  return (
    <>
      <Navigation />
      <main style={{ position: 'relative' }}>{children}</main>
      <Footer />
    </>
  )
}
export default MainLayout
