import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/Main'

// images
import { PageMeta } from '../components/PageMeta'
import styled from '@emotion/styled'
import { InlineCode } from '../components/InlineCode'
import { Button } from '../components/Button'
import { SizedBox } from '../components/SizedBox'
import { theme } from '../styles/theme'
import { getPlatformName, OsPlatformName } from '../lib/utils'
import { ExternalLink } from '../components/ExternalLink'
import { useGithub } from '../lib/use-github'

function Index() {
  const { latestRelease } = useGithub()
  const [platform, setPlatform] = useState<OsPlatformName>('Linux')

  useEffect(() => {
    setPlatform(getPlatformName())
  }, [])

  return (
    <MainLayout>
      <PageMeta
        title='Flowser - Flow GUI Browser'
        description='Flowser (Stands for Flow Browser) is a convenient development tool for #Flow blockchain, which starts and indexes flow emulator or testnet blockchains 🤙.'
      />

      <LandingSection>
        <SizedBox height={theme.spacing.lg} />

        <Title>
          Supercharged development <FlowHashTag>#onFlow</FlowHashTag>{' '}
          <FlowLogo src='/images/flow_logo.svg' alt='Flow blockchain logo' />{' '}
          blockchain
        </Title>
        <Description>
          Flowser is your graphical development inspection tool. It is giving
          you confidence, your smart contracts are behaving as intended, and
          brings the world of transactions and blocks in beautiful colours
          making it easy to understand.
        </Description>

        <SizedBox height={theme.spacing.xl} />

        {platform === 'Linux' ? (
          <div>
            <Notice>🚧 Linux is currently not yet supported. 🚧</Notice>
            <Notice>
              If you would benefit from adding Linux support, tell us here:{' '}
              <ExternalLink href='https://github.com/onflowser/flowser/discussions/142'>
                github.com/onflowser/flowser/discussions/142
              </ExternalLink>
            </Notice>
          </div>
        ) : (
          <div>
            <InstallMethod>
              Run with Flow CLI
              <SizedBox height={theme.spacing.sm} />
              <InlineCode>flow flowser</InlineCode>
            </InstallMethod>

            <SizedBox height={theme.spacing.md} />
            <OrText>or</OrText>
            <SizedBox height={theme.spacing.md} />

            <InstallMethod>
              Download directly
              <SizedBox height={theme.spacing.sm} />
              <Button
                onClick={() => {
                  window.open(latestRelease.url, '_blank')
                }}
              >
                Download for {platform}
              </Button>
              <SizedBox height={theme.spacing.md} />
              <ReleaseLink href={latestRelease?.url}>
                {latestRelease?.tagName ?? '-'}
              </ReleaseLink>
            </InstallMethod>
          </div>
        )}
      </LandingSection>
    </MainLayout>
  )
}

const LandingSection = styled.div`
  max-width: 700px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  color: ${(props) => props.theme.color.light};
  font-size: ${(props) => props.theme.fontSize.big};
  font-weight: normal;
`

const Description = styled.p`
  color: ${(props) => props.theme.color.grey};
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: 26px;
`

const Notice = styled(Description)`
  color: ${(props) => props.theme.color.light};
`

const FlowHashTag = styled.span`
  color: ${(props) => props.theme.color.flow};
`

const FlowLogo = styled.img`
  vertical-align: middle;
  height: 50px;
`

const InstallMethod = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.color.light};
`

const OrText = styled.div`
  color: ${(props) => props.theme.color.grey};
`

const ReleaseLink = styled(ExternalLink)`
  color: ${(props) => props.theme.color.grey} !important;
`

export default Index
