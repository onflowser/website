import React from 'react'
import styled from '@emotion/styled'

export type ExternalLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export function ExternalLink(props: ExternalLinkProps) {
  return <Container target='_blank' {...props} />
}

const Container = styled.a`
  color: ${(props) => props.theme.color.light};
  text-decoration: underline;
  transition: 0.2s ease-in-out all;
  &:hover {
    transform: scale(1.1);
  }
`
