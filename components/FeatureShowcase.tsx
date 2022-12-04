import styled from '@emotion/styled'
import React from 'react'
import { SizedBox } from './SizedBox'

export type FeatureShowcaseProps = {
  title: string
  description: string
  imageSrc: string
  iconSrc: string
}

export function FeatureShowcase(props: FeatureShowcaseProps) {
  return (
    <Container>
      <Background />
      <LeftSide>
        <Image alt={props.title} src={props.imageSrc} />
      </LeftSide>
      <SizedBox width={30} />
      <RightSide>
        <Icon src={props.iconSrc} />
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </RightSide>
    </Container>
  )
}

const width = 1064
const height = 602

const Container = styled.div`
  position: relative;
  height: ${height}px;
  width: ${width}px;
  display: flex;
  align-items: center;
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
`

const LeftSide = styled.div`
  flex: 2;
`

const RightSide = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
`

function Background() {
  return (
    <svg
      style={{ position: 'absolute', height, width, zIndex: -1 }}
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
        fill='url(#paint0_linear_51_1335)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_51_1335'
          x1='1319'
          y1='871'
          x2='80.7868'
          y2='296.416'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#77582B' />
          <stop offset='0.567708' stopColor='#472853' stopOpacity='0.5' />
          <stop offset='0.94582' stopColor='#19202E' />
        </linearGradient>
      </defs>
    </svg>
  )
}
