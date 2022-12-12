import React from 'react'
import styled from '@emotion/styled'
import is from '@sindresorhus/is'

export type ExternalLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  noUnderline?: boolean
}

export function ExternalLink(props: ExternalLinkProps) {
  return <Container target='_blank' {...props} />
}

const Container = styled.a<{ noUnderline?: boolean }>`
  color: ${(props) => props.theme.color.light};
  text-decoration: ${(props) => (props.noUnderline ? 'none' : 'underline')};
  transition: 0.2s ease-in-out all;
  &:hover {
    transform: scale(1.1);
  }
`
