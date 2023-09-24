import styled from '@emotion/styled'
import React, { CSSProperties } from 'react'

type AutoplayVideoProps = {
  className?: string
  style?: CSSProperties
  src: string
}

export function AutoplayVideo(props: AutoplayVideoProps) {
  return (
    <Container
      muted={true}
      autoPlay={true}
      loop={true}
      className={props.className}
      style={props.style}
    >
      <source src={props.src} type='video/mp4' />
    </Container>
  )
}

const Container = styled.video`
  border-radius: ${(props) => props.theme.radius.md};
`
