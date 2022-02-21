import React from 'react'
import MainLayout from '../layouts/Main'

function Index() {
  return (
    <MainLayout>
      <div className='plain-text'>
        <h1>Flow GUI Browser</h1>
        <h4>
          Easily start your local Flow network and inspect the state. Flowsers
          is your development inspection tool giving you confidence your smart
          contracts are behaving as intended and it brings the world of
          transactions and blocks in beautiful colors making it easy to
          understand.
        </h4>
      </div>

      <div className='background-all'>
        <img className='screen-1' src='images/transaction.png' alt='' />
        <h2>Flowser key benefits</h2>
        <p>
          Flowser offers a lot of functionalities that gives you power to
          inspect any FLow network. But it doesn't stop here, Flowser is not
          just another scanner tool, it allows you to manage your local Flow
          network and inspect its state.
        </p>

        <div className='icon-boxes'>
          <div className='icon-boxes-one'>
            <img src='images/inspect-storage.svg' alt='' />
            <h3>Inspect Storage</h3>
            <p>
              You can use Flowser to inspect account storage, it visually gives
              you access to see what is stored in the account.
            </p>
          </div>

          <div className='icon-boxes-one'>
            <img src='images/browse-network.svg' alt='' />
            <h3>Browse Network</h3>
            <p>
              Browse transactions, blocks, contracts, accounts and emulator logs
              all from single place and in real time.
            </p>
          </div>

          <div className='icon-boxes-one'>
            <img src='images/icon-1.svg' alt='' />
            <h3>Manage Emulator</h3>
            <p>
              Managing emulator has never been easier, you can set all
              properties on the emaultor and save it for later.
            </p>
          </div>

          <div className='icon-boxes-one'>
            <img src='images/wallet-integration.svg' alt='' />
            <h3>Wallet Integration</h3>
            <p>
              Flowser contains integration with dev wallet and uses FCL to
              interact with the <br />
              network.
            </p>
          </div>
        </div>

        <a
          className='button-full-width'
          target='_blank'
          href='https://github.com/onflowser/flowser#-get-started'
        >
          START FLOWSING NOW
        </a>
      </div>

      <div className='plain-text, plain-text-no-margin'>
        <h2>FLOWSER WILL GET YOU THERE</h2>
        <h4>
          Whether you are starting a complex project or just a simple test
          Flowser will make your development feel smooth and give you confidence
          in your code. Always expanding set of features will allow you to test
          different parts of your application, see if storage is updated as
          intended, see if your tests ran successfully, see if the FCL
          integration is working and your dev wallet is behaving, all that and
          more.
        </h4>
      </div>

      <div id='screen-animation'>
        <img src='images/gif1-blue-line.gif' alt='gif-different-screens' />
      </div>
    </MainLayout>
  )
}

export default Index
