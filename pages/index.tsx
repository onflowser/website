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
          title='Get Interactive'
          description='The simplest way to interact with the Flow blockchain. We build a dynamic UI for executing scripts or transactions.'
          videoSrc='/videos/interactions.mp4'
          iconSrc='/images/cursor_click.svg'
        />
      </Section>

      <Section
        title='Must have dev tool #onFlow'
        description='Flowser gives you a complete real-time overview of your local blockchain without needing to manually execute various Flow CLI commands and Cadence scripts.'
      >
        <FeatureShowcase
          title='Data at your fingertips'
          description='View all the blockchain data in a consolidated GUI. No more running around, just Flowse.'
          videoSrc='/videos/data-view-demo.mp4'
          iconSrc='/images/block.svg'
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
