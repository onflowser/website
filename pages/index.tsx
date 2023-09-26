import React from 'react'
import { MainLayout } from '../layouts/Main'

// images
import { PageMeta } from '../components/PageMeta'
import styled from '@emotion/styled'
import { SizedBox } from '../components/SizedBox'
import { theme } from '../styles/theme'
import { FeatureShowcase } from '../components/FeatureShowcase'
import { Section } from '../components/Section'
import { AutoplayVideo } from '../components/Video'
import { PrimaryLink } from '../components/PrimaryLink'
import Link from 'next/link'
import { MacbookMockup } from '../components/MacbookMockup'

function Index() {
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

        <Link href='/download'>
          <PrimaryLink>Download desktop app</PrimaryLink>
        </Link>

        <SizedBox height={theme.spacing.lg} />

        <MacbookMockup>
          <HeroVideo src='/videos/hero-demo.mp4' />
        </MacbookMockup>
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

const HeroVideo = styled(AutoplayVideo)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 -45px;
  border-radius: 0;
`

const LandingSection = styled.div`
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  color: ${(props) => props.theme.color.light};
  font-size: ${(props) => props.theme.fontSize.big};
  font-weight: normal;
  max-width: 700px;
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

export default Index
