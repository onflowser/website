import Head from 'next/head'
import * as React from 'react'
import * as config from '../lib/config'

type Props = {
  title: string
  description: string
  socialDescription?: string
  name?: string
  image?: string
  domain?: string
  canonicalUrl?: string
}

export const PageMeta: React.FC<Props> = ({
  title,
  description,
  socialDescription,
  image = '/social.gif',
  canonicalUrl = 'https://flowser.dev',
  name = 'Flowser',
  domain = 'https://flowser.dev'
}: Props) => {
  if (!socialDescription) {
    socialDescription = description
  }

  return (
    <Head>
      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
        </>
      )}

      <meta property='og:title' content={title} />
      <meta property='og:site_name' content={name} />

      <meta name='twitter:title' content={title} />
      <meta property='twitter:domain' content={domain} />

      {config.twitter && (
        <meta name='twitter:creator' content={`@${config.twitter}`} />
      )}

      {socialDescription && (
        <>
          <meta name='description' content={socialDescription} />
          <meta property='og:description' content={socialDescription} />
          <meta name='twitter:description' content={socialDescription} />
        </>
      )}

      {image ? (
        <>
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={image} />
          <meta property='og:image' content={image} />
        </>
      ) : (
        <meta name='twitter:card' content='summary' />
      )}

      {canonicalUrl && (
        <>
          <link rel='canonical' href={canonicalUrl} />
          <meta property='og:url' content={canonicalUrl} />
          <meta property='twitter:url' content={canonicalUrl} />
        </>
      )}

      <title>{title}</title>

      <meta name='theme-color' content='#B2AFE8' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={canonicalUrl} />
    </Head>
  )
}
