import React, { ReactElement } from 'react'
import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'
import useDarkMode from 'use-dark-mode'

type Props = {
  children: ReactElement | ReactElement[]
}

function MainLayout({ children }: Props) {
  const darkMode = useDarkMode(false, { classNameDark: 'dark-mode' })

  return (
    <>
      <Navigation />
      <main style={{ position: 'relative' }}>{children}</main>
      <Footer isDarkMode={darkMode.value} toggleDarkMode={darkMode.toggle} />
    </>
  )
}
export default MainLayout
