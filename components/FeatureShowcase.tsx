import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { SizedBox } from './SizedBox'
import { useWindowSize } from 'react-use'
import { getPixelValue, theme } from '../styles/theme'
import { useParallax } from 'react-scroll-parallax'

export type FeatureShowcaseProps = {
  title: string
  description: string
  imageSrc: string
  iconSrc: string
  imageOnRight?: boolean
}

export function FeatureShowcase(props: FeatureShowcaseProps) {
  const { width } = useWindowSize()
  const [isMobile, setMobile] = useState(false)
  const backgroundParallax = useParallax<HTMLDivElement>({
    opacity: [0.4, 1.4]
  })

  useEffect(() => {
    setMobile(width <= getPixelValue(theme.breakpoints.mobile))
  }, [width])

  if (props.imageOnRight || isMobile) {
    return (
      <Container ref={backgroundParallax.ref}>
        <SizedBox width={50} />
        <Background style={{ transform: 'scaleX(-1)' }} />
        <TextSection>
          <Icon src={props.iconSrc} />
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
        </TextSection>
        <SizedBox width={30} height={30} />
        <ImageSection>
          <Image alt={props.title} src={props.imageSrc} />
        </ImageSection>
      </Container>
    )
  }

  return (
    <Container ref={backgroundParallax.ref}>
      <Background />
      <ImageSection>
        <Image alt={props.title} src={props.imageSrc} />
      </ImageSection>
      <SizedBox width={30} />
      <TextSection>
        <Icon src={props.iconSrc} />
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </TextSection>
      <SizedBox width={50} />
    </Container>
  )
}

const width = 1200
const height = 700

const Container = styled.div`
  position: relative;
  height: ${height}px;
  width: ${width}px;
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column-reverse;
    height: unset;
    width: 100%;
  }
`

const Icon = styled.img`
  height: 50px;
  width: 50px;
`

const Title = styled.h2`
  color: ${(props) => props.theme.color.light};
  font-size: ${(props) => props.theme.fontSize.md};
  margin-bottom: 0;
`

const Description = styled.p`
  color: ${(props) => props.theme.color.grey};
  line-height: ${(props) => props.theme.lineHeight.md};
  font-size: ${(props) => props.theme.fontSize.sm};
`

const ImageSection = styled.div`
  flex: 2;
`

const TextSection = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
`

function Background(props: { style?: React.CSSProperties }) {
  const [y2] = useState(Math.random() * 700)
  return (
    <BackgroundSvg
      style={props.style}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width={width}
        height={height}
        rx='40'
        fill='url(#background_gradient)'
      />
      <defs>
        <linearGradient
          id='background_gradient'
          x1='1319'
          y1='871'
          x2='300'
          y2={y2}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#77582B' />
          <stop offset='0.5' stopColor='#472853' stopOpacity='0.5'>
            <animate
              attributeName='offset'
              values='0.5; 0.75; 0.5;'
              dur='6s'
              repeatCount='indefinite'
            ></animate>
          </stop>
          <stop offset='0.94582' stopColor='#19202E00' />
        </linearGradient>
      </defs>
    </BackgroundSvg>
  )
}

const BackgroundSvg = styled.svg`
  position: absolute;
  z-index: -1;
  height: ${height}px;
  width: ${width}px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`
