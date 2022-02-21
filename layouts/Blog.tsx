import React, { ReactElement } from 'react'
import Navigation from '../components/Navigation'

type Props = {
  children: ReactElement | ReactElement[]
}

function BlogLayout({ children }: Props) {
  return (
    <>
      <Navigation />
      <main style={{ position: 'relative', minHeight: '80vh' }}>
        {children}
      </main>
    </>
  )
}
export default BlogLayout
