import { useEffect, useState } from 'react'
import { Octokit } from 'octokit'

const octokit = new Octokit()

export type FlowserRelease = {
  tagName: string
  url: string
}

export function useGithub() {
  const [latestRelease, setLatestRelease] = useState<
    FlowserRelease | undefined
  >()

  useEffect(() => {
    octokit
      .request('GET /repos/{owner}/{repo}/releases/latest', {
        owner: 'onflowser',
        repo: 'flowser'
      })
      .then((release) => {
        setLatestRelease({
          url: release.data.html_url,
          tagName: release.data.tag_name
        })
      })
  }, [])

  return { latestRelease }
}
