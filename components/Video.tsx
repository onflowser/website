import styled from '@emotion/styled'
import React from 'react'

type AutoplayVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string
}

export function AutoplayVideo(props: AutoplayVideoProps) {
  const { src, ...videoProps } = props
  return (
    <Container muted={true} autoPlay={true} loop={true} {...videoProps}>
      <source src={src} type='video/mp4' />
    </Container>
  )
}

const Container = styled.video`
  border-radius: ${(props) => props.theme.radius.md};
  object-fit: cover;
`
