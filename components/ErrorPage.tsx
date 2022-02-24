import React from 'react'
import Head from 'next/head'
import { PageMeta } from './PageMeta'

import styles from './styles.module.css'
import MainLayout from '../layouts/Main'

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  const title = 'Error'

  return (
    <MainLayout>
      <PageMeta />

      <Head>
        <meta property='og:site_name' content={title} />
        <meta property='og:title' content={title} />

        <title>{title}</title>
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Error Loading Page</h1>

          {statusCode && <p>Error code: {statusCode}</p>}

          <img src='/error.png' alt='Error' className={styles.errorImage} />
        </main>
      </div>
    </MainLayout>
  )
}
