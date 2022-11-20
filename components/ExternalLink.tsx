import React, { ReactElement } from 'react'
import styled from '@emotion/styled'

export type ExternalLinkProps = {
  children: ReactElement | string
  href: string
}
export function ExternalLink(props: ExternalLinkProps) {
  return (
    <Container target='_blank' href={props.href}>
      {props.children}
    </Container>
  )
}

const Container = styled.a`
  color: ${(props) => props.theme.color.light};
  text-decoration: underline;
`
