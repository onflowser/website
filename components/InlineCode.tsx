import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { SizedBox } from './SizedBox'
import { theme } from '../styles/theme'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export type InlineCodeProps = {
  children: string
}

export function InlineCode(props: InlineCodeProps) {
  const [isCopied, setCopied] = useState(false)
  const timeoutRef = useRef<any>()

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    if (isCopied) {
      timeoutRef.current = setTimeout(() => {
        setCopied(false)
      }, 1000)
    }
  }, [isCopied])

  return (
    <Container>
      {props.children}
      <SizedBox width={theme.spacing.sm} />
      <CopyToClipboard onCopy={() => setCopied(true)} text={props.children}>
        {isCopied ? (
          <CopyIcon src='/images/check.svg' />
        ) : (
          <CopyIcon src='/images/copy.svg' />
        )}
      </CopyToClipboard>
    </Container>
  )
}

const Container = styled.code`
  background: ${(props) => props.theme.color.darkGrey};
  color: ${(props) => props.theme.color.light};
  border-radius: ${(props) => props.theme.radius.md};
  padding: ${(props) => props.theme.spacing.sm};
  width: 250px;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSize.sm};
`

const CopyIcon = styled.img`
  width: 10px;
  cursor: pointer;
  transform: scale(1.4);
  transition: 0.2s ease-in-out all;

  &:hover {
    transform: scale(1.6);
  }
`
