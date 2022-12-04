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
  const macAssets = assets.filter((asset) => asset.name.includes('.dmg'))
  const winAsset = assets.find((asset) => asset.name.includes('win-x64-setup'))
  const macArmAsset = macAssets.find((asset) => asset.name.includes('arm64'))
  const macX64Asset = macAssets.find((asset) => asset.name.includes('x64'))

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

  return { latestRelease, macArmAsset, macX64Asset, winAsset }
}
