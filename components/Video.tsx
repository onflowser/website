import styled from '@emotion/styled'
import React, { LegacyRef } from 'react'

type AutoplayVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string
  videoRef: LegacyRef<HTMLVideoElement>
}

export function AutoplayVideo(props: AutoplayVideoProps) {
  const { src, videoRef, ...videoProps } = props
  return (
    <Container
      ref={videoRef}
      muted={true}
      autoPlay={true}
      loop={true}
      {...videoProps}
    >
      <source src={src} type='video/mp4' />
    </Container>
  )
}

const Container = styled.video`
  border-radius: ${(props) => props.theme.radius.md};
  object-fit: cover;
`
