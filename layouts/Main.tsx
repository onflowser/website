import React, { ReactElement } from 'react'
import Navigation from '../components/Navigation'
import { Footer } from '../components/Footer'
import styled from '@emotion/styled'

type Props = {
  children: ReactElement | ReactElement[]
}

function MainLayout({ children }: Props) {
  return (
    <Root>
      <div
        style={{
          maxWidth: '1200px',
          margin: 'auto'
        }}
      >
        <Navigation />
        <main style={{ position: 'relative', minHeight: '70vh' }}>
          {children}
        </main>
        <Footer />
      </div>
    </Root>
  )
}

const Root = styled.div`
  background: ${(props) => props.theme.color.dark};
`

export default MainLayout
