import styled from '@emotion/styled'
import React, { ReactElement } from 'react'

export type LandingSectionProps = {
  title: string
  description: string
  children: ReactElement
}

export function Section(props: LandingSectionProps) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.theme.spacing.lg} 0;
`

const Title = styled.h2`
  color: ${(props) => props.theme.color.light};
  font-size: ${(props) => props.theme.fontSize.lg};
  text-align: center;
  max-width: 400px;
  margin-bottom: 0;
`

const Description = styled.p`
  color: ${(props) => props.theme.color.grey};
  max-width: 600px;
  text-align: center;
  line-height: ${(props) => props.theme.lineHeight.md};
`
