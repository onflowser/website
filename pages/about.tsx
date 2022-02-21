import React from 'react'
import Link from 'next/link'

function About() {
  return (
    <>
      <div className='navbar'>
        <div className='navbar-content'>
          <Link href='/'>
            <div className='navbar-logo'>
              <img src='images/flowser-logo.svg' alt='' />
              <span>Flowser</span>
            </div>
          </Link>

          <div className='navbar-content-right'>
            <div className='navbar-links'>
              <a
                target='_blank'
                href='https://github.com/onflowser/flowser#-get-started'
              >
                QUICK START
              </a>
              <img src='images/tutorials.svg' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='plain-text'>
        <h1>HELLO!</h1>
        <h4>
          We are happy to see you here 👋
          <br />
          Meet the people behind the Flowser:
        </h4>
      </div>

      <div className='about-one-person'>
        <img src='./images/jernej.svg' alt='' />
        <h2>Jernej</h2>
        <p>
          <a href='mailto:jernej.gololicic@gmail.com'>E-mail</a> |{' '}
          <a href='https://github.com/jgololicic'>Github</a> |{' '}
          <a href='https://www.linkedin.com/in/jernej-gololi%C4%8Di%C4%8D-8a296925/'>
            Linkedin
          </a>
        </p>
      </div>

      <div className='about-one-person'>
        <img src='./images/bartolomej.svg' alt='' />
        <h2>Bartolomej</h2>
        <p>
          <a href='mailto:bartolomej.kozorog@gmail.com'>E-mail</a> |{' '}
          <a href='https://github.com/bartolomej'>Github</a> |{' '}
          <a href='https://www.linkedin.com/in/bartolomej/'>Linkedin</a>
        </p>
      </div>

      <div className='about-one-person'>
        <img src='./images/monika.svg' alt='' />
        <h2>Monika</h2>
        <p>
          <a href='mailto:monika.hribersek@gmail.com'>E-mail</a> |{' '}
          <a href='https://github.com/monikaxh'>Github</a> |{' '}
          <a href='https://www.linkedin.com/in/monikahribersek/'>Linkedin</a>
        </p>
      </div>

      <div className='footer'>
        <img src='./images/footer-logo.png' alt='' />
      </div>
    </>
  )
}

export default About
