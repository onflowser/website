import * as React from 'react'
import * as types from 'lib/types'
import Image from 'next/image'
import { PageMeta } from './PageMeta'
import image from '../public/404.png'
import styles from './styles.module.css'

export const Page404: React.FC<types.PageProps> = ({ pageId, error }) => {
  return (
    <>
      <PageMeta
        title='Page not found'
        description="Oops! Looks like this page doesn't exist."
      />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 style={{ textAlign: 'center' }}>Page Not Found</h1>

          {error ? (
            <p>{error.message}</p>
          ) : (
            <p>Oops! Looks like this page doesn't exist.</p>
          )}

          <Image
            src={image}
            alt='404 Not Found'
            height={400}
            objectFit='contain'
            className={styles.errorImage}
          />
        </main>
      </div>
    </>
  )
}
