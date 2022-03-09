import React from 'react'
import MainLayout from '../layouts/Main'
import Cover from '../components/Cover'

// images
import flowserImage from '../public/images/flowser.svg'
import { Parallax } from 'react-scroll-parallax'
import { PageMeta } from '../components/PageMeta'

function Index() {
  return (
    <MainLayout>
      <PageMeta
        title='Flowser - Flow GUI Browser'
        description='Flowser (Stands for Flow Browser) is a convenient development tool for #Flow blockchain, which starts and indexes flow emulator or testnet blockchains 🤙.'
      />

      <Cover foregroundImageSrc={flowserImage} />

      <div className='presentation'>
        <div className='presentation-content-wrap'>
          <div className='title-with-image'>
            <h1>FLOW GUI BROWSER</h1>
            <Parallax speed={10} translateX={[-20, 0]}>
              <img
                className='geometric-circle'
                src='./images/geometric-circle.svg'
                alt=''
              />
            </Parallax>
          </div>
          <div className='presentation-content'>
            <div className='presentation-content-text'>
              <h4 className='h4-margin'>
                Easily start your local Flow network and inspect the state.
                Flowser is your development inspection tool giving you
                confidence your smart contracts are behaving as intended and it
                brings the world of transactions and blocks in beautiful colours
                making it easy to understand.
              </h4>
              <a className='button' href='https://docs.flowser.dev'>
                QUICK START
              </a>
            </div>

            <div className='image-with-graphic'>
              <Parallax speed={10} translateX={[-20, 0]} translateY={[-10, 0]}>
                <img
                  className='geometric-dots'
                  src='./images/geometric-dots.svg'
                  alt=''
                />
              </Parallax>
              <Parallax speed={5} scale={[0.9, 1.1]}>
                <img
                  style={{ borderRadius: 10 }}
                  className='flowser-screen'
                  src='./images/presentation.png'
                  alt=''
                />
              </Parallax>
            </div>
          </div>
        </div>
      </div>

      <div className='benefits'>
        <div className='benefits-wrap'>
          <div className='benefits-left'>
            <h2>KEY BENEFITS</h2>
            <h4 className='h4-margin'>
              Flowser offers a lot of functionalities that gives you power to
              inspect any Flow network. But it doesn’t stop here, Flowser is not
              just another scanner tool, it allows you to manage your local Flow
              network and inspect its state.
            </h4>
            <a className='button' href='https://docs.flowser.dev'>
              START FLOWSING NOW
            </a>
          </div>

          <div className='benefits-right'>
            <div className='benefits-right-box'>
              <img src='./images/inspect.svg' alt='' />
              <div className='benefits-right-box-text'>
                <h3>Inspect Storage</h3>
                <p>
                  You can use Flowser to inspect account storage, it visually
                  gives you access to see what is stored in the account.
                </p>
              </div>
            </div>

            <div className='benefits-right-box'>
              <img src='./images/browse.svg' alt='' />
              <div className='benefits-right-box-text'>
                <h3>Browse Network</h3>
                <p>
                  Browse transactions, blocks, contracts, accounts and emulator
                  logs all from single place and in real time.
                </p>
              </div>
            </div>

            <div className='benefits-right-box'>
              <img src='./images/manage.svg' alt='' />
              <div className='benefits-right-box-text'>
                <h3>Manage Emulator</h3>
                <p>
                  Managing emulator has never been easier, you can set all
                  properties on the emulator and save it for later.
                </p>
              </div>
            </div>

            <div className='benefits-right-box'>
              <img src='./images/wallet.svg' alt='' />
              <div className='benefits-right-box-text'>
                <h3>Wallet Integration</h3>
                <p>
                  Flowser contains integration with dev wallet and uses FCL to
                  interact with the network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grey-white'>
        <div className='grey-white-wraper'>
          <div className='grey-white-content-left'>
            <h2>
              FLOWSER WILL <br />
              GET YOU THERE
            </h2>
            <p>
              Whether you are starting a complex project or just a simple test
              Flowser will make your development feel smooth and give you
              confidence in your code. Always expanding set of features will
              allow you to test different parts of your application, see if
              storage is updated as intended, see if your tests ran
              successfully, see if the FCL integration is working and your dev
              wallet is behaving, all that and more.
            </p>
          </div>

          <div className='grey-white-content-right'>
            <Parallax speed={10} scaleY={[0.7, 1.1]}>
              <img src='./images/geometric-zigzag.svg' alt='' />
            </Parallax>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Index
