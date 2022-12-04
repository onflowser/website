import styled from '@emotion/styled'
import React, { ReactElement } from 'react'
import { SizedBox } from './SizedBox'

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
      <SizedBox height={30} />
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: calc(${(props) => props.theme.spacing.lg} * 2) 0;
`

const Title = styled.h2`
  color: ${(props) => props.theme.color.light};
  font-size: ${(props) => props.theme.fontSize.lg};
  text-align: center;
  max-width: 500px;
  margin-bottom: 0;
  font-weight: normal;
`

const Description = styled.p`
  color: ${(props) => props.theme.color.grey};
  max-width: 700px;
  text-align: center;
  line-height: ${(props) => props.theme.lineHeight.md};
  font-size: ${(props) => props.theme.fontSize.md};
`
