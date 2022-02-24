import React from 'react'
import MainLayout from '../layouts/Main'

function About() {
  return (
    <MainLayout>
      <div className='page-welcome'>
        <img
          className='page-welcome-img, page-welcome-img-team'
          src='./images/team.png'
          alt=''
        />
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
          <Link href='mailto:jernej.gololicic@gmail.com'>E-mail</Link> |{' '}
          <Link href='https://github.com/jgololicic'>Github</Link> |{' '}
          <Link href='https://www.linkedin.com/in/jernej-gololi%C4%8Di%C4%8D-8a296925/'>
            Linkedin
          </Link>
        </p>
      </div>

      <div className='about-one-person'>
        <img src='./images/bartolomej.svg' alt='' />
        <h2>Bartolomej</h2>
        <p>
          <Link href='mailto:bartolomej.kozorog@gmail.com'>E-mail</Link> |{' '}
          <Link href='https://github.com/bartolomej'>Github</Link> |{' '}
          <Link href='https://www.linkedin.com/in/bartolomej/'>Linkedin</Link>
        </p>
      </div>

      <div className='about-one-person'>
        <img src='./images/monika.svg' alt='' />
        <h2>Monika</h2>
        <p>
          <Link href='mailto:monika.hribersek@gmail.com'>E-mail</Link> |{' '}
          <Link href='https://github.com/monikaxh'>Github</Link> |{' '}
          <Link href='https://www.linkedin.com/in/monikahribersek/'>
            Linkedin
          </Link>
        </p>
      </div>
    </MainLayout>
  )
}

const Link = ({ href, children }) => {
  return (
    <a target='_blank' href={href}>
      {children}
    </a>
  )
}

export default About
