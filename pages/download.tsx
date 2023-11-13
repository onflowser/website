import { MainLayout } from '../layouts/Main'
import {
  AppAssetMetadata,
  FlowserArch,
  FlowserPlatform,
  useGithub
} from '../lib/use-github'
import React, { useEffect, useState } from 'react'
import { ExternalLink } from '../components/ExternalLink'
import { SizedBox } from '../components/SizedBox'
import { theme } from '../styles/theme'
import { InlineCode } from '../components/InlineCode'
import { PrimaryLink } from '../components/PrimaryLink'
import styled from '@emotion/styled'

function Download() {
  return (
    <MainLayout>
      <Title>Download Flowser desktop app</Title>

      <SizedBox height={theme.spacing.lg} />

      <DownloadOptions />
    </MainLayout>
  )
}

const Title = styled.h1`
  color: ${(props) => props.theme.color.light};
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: normal;
  text-align: center;
`

function DownloadOptions() {
  const { latestRelease, assets } = useGithub()
  const currentPlatform = useCurrentPlatform()

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
        Download directly for {getPlatformName(currentPlatform)}
        <SizedBox height={theme.spacing.sm} />
        <div style={{ display: 'flex', columnGap: '10px' }}>
          {currentPlatform === 'linux' ? (
            <CurrentPlatformAssetLink assets={assets} arch='amd64' />
          ) : (
            <CurrentPlatformAssetLink assets={assets} arch='x64' />
          )}
          <CurrentPlatformAssetLink assets={assets} arch='arm64' />
        </div>
        <SizedBox height={theme.spacing.md} />
        <ReleaseLink href={latestRelease?.url}>
          {latestRelease?.tagName ?? '-'}
        </ReleaseLink>
      </InstallMethod>
    </div>
  )
}

function getPlatformName(platform: FlowserPlatform) {
  switch (platform) {
    case 'win':
      return 'Windows'
    case 'mac':
      return 'MacOS'
    case 'linux':
      return 'Linux'
  }
}

function useCurrentPlatform(): FlowserPlatform {
  const [platform, setPlatform] = useState<FlowserPlatform>('mac')

  function getDefaultPlatform() {
    const { platform } = window.navigator
    switch (true) {
      case platform.includes('Mac'):
        return 'mac'
      case platform.includes('Win'):
        return 'win'
      case platform.includes('Linux'):
        return 'linux'
      default:
        return 'mac'
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const platformOverride = urlParams.get('platform')

    if (platformOverride) {
      setPlatform(platformOverride as FlowserPlatform)
    } else {
      setPlatform(getDefaultPlatform)
    }
  }, [])

  return platform
}

type DownloadButtonProps = {
  assets: AppAssetMetadata[]
  arch: FlowserArch
  title?: string
}

function CurrentPlatformAssetLink(props: DownloadButtonProps) {
  const currentPlatform = useCurrentPlatform()
  const metadata = props.assets.find(
    (e) => e.platform === currentPlatform && e.arch === props.arch
  )

  if (!metadata) {
    return null
  }

  function formatArch() {
    if (currentPlatform === 'mac') {
      switch (metadata.arch) {
        case 'x64':
          return 'Intel'
        case 'arm64':
          return 'Apple Silicon'
      }
    } else {
      return metadata.arch
    }
  }

  return (
    <PrimaryLink
      href={metadata.asset.browser_download_url}
      style={{ width: 150 }}
      download
    >
      {formatArch()}
    </PrimaryLink>
  )
}

const InstallMethod = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.color.light};
`

const OrText = styled.div`
  text-align: center;
  color: ${(props) => props.theme.color.grey};
`

const ReleaseLink = styled(ExternalLink)`
  color: ${(props) => props.theme.color.grey} !important;
`

export default Download
