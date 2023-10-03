import React, { useEffect, useRef } from 'react'
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
import { useWindowSize } from 'react-use'

const heroVideoResolutionY = 780

function Index() {
  const { width } = useWindowSize()
  const heroVideoRef = useRef<HTMLVideoElement>()

  // For some reason it doesn't work to do inline conditional rendering (probably because of SSR),
  // so to avoid wasting too much time, just do this hacky thing instead.
  useEffect(() => {
    if (width < 700) {
      heroVideoRef.current.removeAttribute('height')
    } else {
      heroVideoRef.current.setAttribute('height', String(heroVideoResolutionY))
    }
  }, [width])

  return (
    <MainLayout>
      <PageMeta
        title='Flowser - Supercharged development #onFlow blockchain'
        description='Flowser is a user-friendly GUI development tool for Flow blockchain. It does the heavy work of managing blockchain emulator, indexing the blockchain, executing interactions and much more!'
      />

      <LandingSection>
        <Title>
          Supercharged development <FlowHashTag>#onFlow</FlowHashTag>{' '}
          <FlowLogo src='/images/flow_logo.svg' alt='Flow blockchain logo' />{' '}
          blockchain
        </Title>

        <Link href='/download'>
          <PrimaryLink>Download desktop app</PrimaryLink>
        </Link>

        <SizedBox height={theme.spacing.xl} />

        <HeroVideo
          videoRef={heroVideoRef}
          src='/videos/hero-demo.mp4'
          height={heroVideoResolutionY}
        />
      </LandingSection>

      <SizedBox height={theme.spacing.xl} />

      <Section
        title='Your gateway to Flow 🌊'
        description='Flowser guides you through your dev journey with an easy to use GUI.'
      >
        <FeatureShowcase
          title='Get Interactive'
          description='The simplest way to interact with the Flow blockchain. We build a dynamic UI for executing scripts or transactions.'
          videoSrc='/videos/interactions.mp4'
          iconSrc='/images/cursor_click.svg'
        />
      </Section>

      <Section
        title='Focusing on DX 🧑‍💻'
        description='Building a web3 product is hard enough, why also bother with all the hastles of local development?'
      >
        <FeatureShowcase
          title='Data at your fingertips'
          description='View all the blockchain data in a consolidated GUI. No more running around, just Flowse.'
          videoSrc='/videos/data-view-demo.mp4'
          iconSrc='/images/block.svg'
          imageOnRight
        />
      </Section>

      <Section
        title="We'd love your feedback 🙋"
        description='Any thoughts or questions on how to improve Flowser app are welcome.'
      >
        <PrimaryLink
          href='https://github.com/onflowser/flowser/issues/new/choose'
          target='_blank'
        >
          Submit feedback on Github
        </PrimaryLink>
      </Section>
    </MainLayout>
  )
}

const HeroVideo = styled(AutoplayVideo)`
  width: 100%;
  object-fit: cover;
  animation: glowing 2s infinite alternate;

  @media (min-width: 700px) {
    object-position: 0 -50px;
  }

  @keyframes glowing {
    0% {
      box-shadow: 2px 2px 15px 15px #ffdd6210;
    }
    50% {
      box-shadow: 2px 2px 20px 20px #ffdd6310;
    }
    100% {
      box-shadow: 2px 2px 15px 15px #ffdd6210;
    }
  }
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

  @media (max-width: 800px) {
    max-width: unset;
    font-size: ${(props) => props.theme.fontSize.lg};
  }
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
