import { MainLayout } from '../layouts/Main'
import { useGithub } from '../lib/use-github'
import React, { useEffect, useState } from 'react'
import { getPlatformName, OsPlatformName } from '../lib/utils'
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
  const { latestRelease, winAsset, macArmAsset, macX64Asset } = useGithub()
  const [platform, setPlatform] = useState<OsPlatformName>('MacOS')

  useEffect(() => {
    setPlatform(getPlatformName())
  }, [])

  if (platform === 'Linux') {
    return (
      <div>
        <Notice>🚧 Linux is currently not yet supported. 🚧</Notice>
        <Notice>
          If you would benefit from adding Linux support, tell us here:{' '}
          <ExternalLink href='https://github.com/onflowser/flowser/discussions/142'>
            github.com/onflowser/flowser/discussions/142
          </ExternalLink>
        </Notice>
      </div>
    )
  }

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
        Download directly
        <SizedBox height={theme.spacing.sm} />
        {platform === 'Windows' ? (
          <PrimaryLink href={winAsset?.browser_download_url} download>
            Download for Windows
          </PrimaryLink>
        ) : (
          <div style={{ display: 'flex' }}>
            <PrimaryLink href={macArmAsset?.browser_download_url} download>
              Download for Apple Silicon
            </PrimaryLink>
            <SizedBox width={10} />
            <PrimaryLink href={macX64Asset?.browser_download_url} download>
              Download for Apple Intel
            </PrimaryLink>
          </div>
        )}
        <SizedBox height={theme.spacing.md} />
        <ReleaseLink href={latestRelease?.url}>
          {latestRelease?.tagName ?? '-'}
        </ReleaseLink>
      </InstallMethod>
    </div>
  )
}

const Description = styled.p`
  color: ${(props) => props.theme.color.grey};
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: ${(props) => props.theme.lineHeight.lg};
`

const Notice = styled(Description)`
  color: ${(props) => props.theme.color.light};
`

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
