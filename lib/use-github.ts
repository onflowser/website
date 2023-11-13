import { useEffect, useState } from 'react'
import { Octokit } from 'octokit'
import { ReleaseAsset } from '@octokit/webhooks-types'

const octokit = new Octokit()

export type FlowserRelease = {
  tagName: string
  url: string
}

export function useGithub() {
  const [latestRelease, setLatestRelease] = useState<
    FlowserRelease | undefined
  >()
  const [assets, setAssets] = useState<ReleaseAsset[]>([])

  useEffect(() => {
    octokit
      .request('GET /repos/{owner}/{repo}/releases/latest', {
        owner: 'onflowser',
        repo: 'flowser'
      })
      .then((release) => {
        setAssets(release.data.assets as ReleaseAsset[])
        setLatestRelease({
          url: release.data.html_url,
          tagName: release.data.tag_name
        })
      })
  }, [])

  return {
    latestRelease,
    assets: assets
      .map((asset) => buildFlowserReleaseAsset(asset))
      .filter(Boolean)
  }
}

export type FlowserArch = 'arm64' | 'amd64' | 'x64'
export type FlowserPlatform = 'win' | 'mac' | 'linux'
export type FlowserExtension = 'deb' | 'exe' | 'dmg' | 'zip'

export type AppAssetMetadata = {
  arch: FlowserArch
  platform: FlowserPlatform
  extension: FlowserExtension
  asset: ReleaseAsset
}

function buildFlowserReleaseAsset(
  asset: ReleaseAsset
): AppAssetMetadata | undefined {
  const extensionDotIndex = asset.name.lastIndexOf('.')
  const extension = asset.name.slice(extensionDotIndex + 1, asset.name.length)
  const fileName = asset.name.slice(0, extensionDotIndex)
  const [appName, version, platform, arch] = fileName.split('-')

  const allowedExtensions = new Set(['deb', 'exe', 'dmg', 'zip'])

  if (!allowedExtensions.has(extension)) {
    return undefined
  }

  const allowedArch = new Set(['arm64', 'amd64', 'x64'])

  if (!allowedArch.has(arch)) {
    return undefined
  }

  return {
    arch: arch as FlowserArch,
    platform: platform as FlowserPlatform,
    extension: extension as FlowserExtension,
    asset
  }
}
