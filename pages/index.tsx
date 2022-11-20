import React from 'react'
import MainLayout from '../layouts/Main'

// images
import { PageMeta } from '../components/PageMeta'

function Index() {
  return (
    <MainLayout>
      <PageMeta
        title='Flowser - Flow GUI Browser'
        description='Flowser (Stands for Flow Browser) is a convenient development tool for #Flow blockchain, which starts and indexes flow emulator or testnet blockchains 🤙.'
      />

    </MainLayout>
  )
}

export default Index
