import * as React from 'react'
import styled from '@emotion/styled'
import { SizedBox } from './SizedBox'
import { theme } from '../styles/theme'
import { useGithub } from '../lib/use-github'

export const Footer = () => {
  const { latestRelease } = useGithub()
  return (
    <Container>
      <a href='https://flowser.dev/'>
        <img src='/images/logo_big.png' alt='' />
      </a>
      <SizedBox height={theme.spacing.md} />

      <Version>
        <a target='_blank' href={latestRelease?.url}>
          {latestRelease?.tagName ?? '-'}
        </a>
      </Version>

      <SizedBox height={theme.spacing.lg} />

      <div>
        <a href='https://twitter.com/onflowser' target='_blank'>
          <img src='/images/twitter.svg' alt='' />
        </a>
        <SizedBox width={theme.spacing.sm} inline />
        <a href='mailto:info.flowser@gmail.com' target='_blank'>
          <img src='/images/email.svg' alt='' />
        </a>
        <SizedBox width={theme.spacing.sm} inline />
        <a href='https://github.com/onflowser/flowser' target='_blank'>
          <img src='/images/git.svg' alt='' />
        </a>
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

const Version = styled.div`
  color: ${(props) => props.theme.color.grey};
`
