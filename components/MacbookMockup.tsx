import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

type MacbookMockupProps = {
  children: ReactNode
}

export function MacbookMockup(props: MacbookMockupProps) {
  return (
    <Container>
      <Image src='/images/macbook-mockup.png' alt='' />
      <ContentWrapper>{props.children}</ContentWrapper>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const Image = styled.img`
  width: 100%;
`

const ContentWrapper = styled.div`
  position: absolute;
  top: 15px;
  bottom: 83px;
  left: 128px;
  right: 130px;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
