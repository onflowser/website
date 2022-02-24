import React from 'react'
import { PageMeta } from './PageMeta'

import styles from './styles.module.css'
import MainLayout from '../layouts/Main'

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  return (
    <MainLayout>
      <PageMeta title='Error' description='Oops! Something went wrong..' />

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
