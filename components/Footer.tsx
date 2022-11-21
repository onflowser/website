import * as React from 'react'
import styled from '@emotion/styled'
import { SizedBox } from './SizedBox'
import { theme } from '../styles/theme'
import { ExternalLink } from './ExternalLink'

export const Footer = () => {
  return (
    <Container>
      <SizedBox height={theme.spacing.xl} />

      <a href='https://flowser.dev/'>
        <Logo src='/images/logo_big.png' alt='' />
      </a>

      <SizedBox height={theme.spacing.lg} />

      <div>
        <ExternalLink href='https://twitter.com/onflowser'>
          <img src='/images/twitter.svg' alt='' />
        </ExternalLink>
        <SizedBox width={theme.spacing.sm} inline />
        <ExternalLink href='mailto:info.flowser@gmail.com'>
          <img src='/images/email.svg' alt='' />
        </ExternalLink>
        <SizedBox width={theme.spacing.sm} inline />
        <ExternalLink href='https://github.com/onflowser/flowser'>
          <img src='/images/git.svg' alt='' />
        </ExternalLink>
      </div>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacing.lg} 0;
`

const Logo = styled.img`
  max-width: 200px;
`
