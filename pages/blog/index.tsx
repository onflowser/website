import React from 'react'
import { domain } from 'lib/config'
import { resolveNotionPage } from 'lib/resolve-notion-page'
import { NotionPage } from 'components'
import BlogLayout from '../../layouts/Blog'
import { PageMeta } from '../../components/PageMeta'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage(props) {
  return (
    <BlogLayout>
      <NotionPage {...props} renderMetadata={false} />
      <PageMeta
        title='Flowser - Blog'
        description='Here we document our journey while developing Flowser.'
      />
    </BlogLayout>
  )
}
