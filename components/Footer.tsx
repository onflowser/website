import * as React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <a className='logo-footer' href='https://flowser.dev/'>
          <img src='./images/logo-vertical-white.svg' alt='' />
        </a>

        <div className='social-icons'>
          <a href='https://twitter.com/onflowser' target='_blank'>
            <img src='./images/twitter.svg' alt='' />
          </a>
          <a href='mailto:info.flowser@gmail.com' target='_blank'>
            <img src='./images/email.svg' alt='' />
          </a>
          <a href='https://github.com/onflowser/flowser' target='_blank'>
            <img src='./images/git.svg' alt='' />
          </a>
        </div>
      </div>
    </div>
  )
}
