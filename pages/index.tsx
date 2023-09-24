import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/Main'

// images
import { PageMeta } from '../components/PageMeta'
import styled from '@emotion/styled'
import { InlineCode } from '../components/InlineCode'
import { PrimaryLink } from '../components/PrimaryLink'
import { SizedBox } from '../components/SizedBox'
import { theme } from '../styles/theme'
import { getPlatformName, OsPlatformName } from '../lib/utils'
import { ExternalLink } from '../components/ExternalLink'
import { useGithub } from '../lib/use-github'
import { FeatureShowcase } from '../components/FeatureShowcase'
import { Section } from '../components/Section'

function Index() {
  const { latestRelease, winAsset, macArmAsset, macX64Asset } = useGithub()
  const [platform, setPlatform] = useState<OsPlatformName>('MacOS')

  useEffect(() => {
    setPlatform(getPlatformName())
  }, [])

  function renderDownloadOptions() {
    if (platform === 'Linux') {
      return (
        <div>
          <Notice>🚧 Linux is currently not yet supported. 🚧</Notice>
          <Notice>
            If you would benefit from adding Linux support, tell us here:{' '}
            <ExternalLink href='https://github.com/onflowser/flowser/discussions/142'>
              github.com/onflowser/flowser/discussions/142
            </ExternalLink>
          </Notice>
        </div>
      )
    }

    return (
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
          {platform === 'Windows' ? (
            <PrimaryLink href={winAsset?.browser_download_url} download>
              Download for Windows
            </PrimaryLink>
          ) : (
            <div style={{ display: 'flex' }}>
              <PrimaryLink href={macArmAsset?.browser_download_url} download>
                Download for Apple Silicon
              </PrimaryLink>
              <SizedBox width={10} />
              <PrimaryLink href={macX64Asset?.browser_download_url} download>
                Download for Apple Intel
              </PrimaryLink>
            </div>
          )}
          <SizedBox height={theme.spacing.md} />
          <ReleaseLink href={latestRelease?.url}>
            {latestRelease?.tagName ?? '-'}
          </ReleaseLink>
        </InstallMethod>
      </div>
    )
  }

  return (
    <MainLayout>
      <PageMeta
        title='Flowser - Supercharged development #onFlow blockchain'
        description='Flowser is first-of-its-kind development tool for Flow blockchain. It does the heavy work of managing blockchain emulator, inspecting the current state, interacting with the network and much more!'
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

        {renderDownloadOptions()}
      </LandingSection>

      <SizedBox height={theme.spacing.xl} />

      <Section
        title='Simple and transparent web3 development'
        description="Developing a modern website is a very transparent process - you make some changes and those get immediately reflected on your local development preview. But that's not the case with most today's web3 dev tools."
      >
        <FeatureShowcase
          title='Superpower of a snapshot'
          description='Snapshots are a way to save the state of your local blockchain and later jump back to it. All of that is available right from the GUI!'
          videoSrc='https://docs.flowser.dev/snapshots.mp4'
          iconSrc='/images/snapshot_icon.svg'
        />
      </Section>

      <Section
        title='First GUI dev tool #onFlow'
        description='Flowser gives you a complete real-time overview of your local blockchain without needing to manually execute various Flow CLI commands and Cadence scripts.'
      >
        <FeatureShowcase
          title='Easy-breezy Storage Inspection'
          description="Each Flow account stores owned data (e.g. NFTs, Fungible tokens,...) in it's storage. Flowser exposes that within a simple and intuitive UI."
          videoSrc='https://docs.flowser.dev/detailed-info.mp4'
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
  line-height: ${(props) => props.theme.lineHeight.lg};
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
