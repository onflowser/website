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
      <Background src='/images/background.png' />
      <Content>
        <div style={{ position: 'relative', zIndex: 100 }}>
          <Navigation />
          <main style={{ position: 'relative', minHeight: '70vh' }}>
            {children}
          </main>
          <Footer />
        </div>
      </Content>
    </Root>
  )
}

const Root = styled.div`
  background: ${(props) => props.theme.color.dark};
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`

const Background = styled.img`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
`

const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  @media (max-width: 1200px) {
    padding: 0 ${(props) => props.theme.spacing.md};
  }
`

export default MainLayout
