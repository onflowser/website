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
import { FeatureShowcase } from '../components/FeatureShowcase'
import { Section } from '../components/Section'

function Index() {
  const { latestRelease } = useGithub()
  const [platform, setPlatform] = useState<OsPlatformName>('MacOS')

  useEffect(() => {
    setPlatform(getPlatformName())
  }, [])

  return (
    <MainLayout>
      <PageMeta
        title='Flowser - Supercharged development #onFlow blockchain'
        description='Flowser is first-of-its-kind development tool for Flow blockchain. It does the heavy work of managing blockchain emulator, inspecting the current state, interacting with the network and much more!'
      />

      <LandingSection>
        <SizedBox height={`calc(${theme.spacing.lg} * 3)`} />

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

      <SizedBox height={`calc(${theme.spacing.lg} * 5)`} />

      <Section
        title='Simple and transparent project development'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit iaculis imperdiet amet, purus egestas odio lectus. Parturient arcu eleifend eget cursus tempor purus.'
      >
        <FeatureShowcase
          title='Superpower of a snapshot'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit iaculis imperdiet amet, purus egestas odio lectus. Parturient arcu eleifend eget cursus tempor purus.'
          imageSrc='/images/snapshot.png'
          iconSrc='/images/snapshot_icon.svg'
        />
      </Section>

      <Section
        title='First GUI #onFlow'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit iaculis imperdiet amet, purus egestas odio lectus. Parturient arcu eleifend eget cursus tempor purus.'
      >
        <FeatureShowcase
          title='Easy-breezy Storage Inspection'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit iaculis imperdiet amet, purus egestas odio lectus. Parturient arcu eleifend eget cursus tempor purus.'
          imageSrc='/images/storage.png'
          iconSrc='/images/storage_icon.svg'
          imageOnRight
        />
      </Section>
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
  line-height: ${(props) => props.theme.lineHeight.md};
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
  animation: 3s ease-in-out infinite float;

  @keyframes float {
    0% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(-10px) scale(1.1);
    }
    100% {
      transform: translateY(5px);
    }
  }
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
