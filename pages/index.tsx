import React from 'react'
import MainLayout from '../layouts/Main'

// images
import { PageMeta } from '../components/PageMeta'
import styled from '@emotion/styled'

function Index() {
  return (
    <MainLayout>
      <PageMeta
        title='Flowser - Flow GUI Browser'
        description='Flowser (Stands for Flow Browser) is a convenient development tool for #Flow blockchain, which starts and indexes flow emulator or testnet blockchains 🤙.'
      />

      <LandingSection>TODO: add content</LandingSection>
    </MainLayout>
  )
}

const LandingSection = styled.div``

export default Index
