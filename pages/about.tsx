import React from 'react'
import Image, { ImageProps } from 'next/image'
import MainLayout from '../layouts/Main'
import Cover from '../components/Cover'

// images
import teamImage from '../public/images/team.svg'
import jernejImage from '../public/images/jernej.svg'
import bartImage from '../public/images/bartolomej.svg'
import monikaImage from '../public/images/monika.svg'

function About() {
  return (
    <MainLayout>
      <Cover imageSrc={teamImage} />

      <div className='plain-text'>
        <h1>HELLO!</h1>
        <h4>
          We are happy to see you here 👋
          <br />
          Meet the people behind the Flowser:
        </h4>
      </div>

      <div className='about-one-person'>
        <Avatar src={jernejImage} alt="Jernej's avatar" />
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
        <Avatar src={bartImage} alt="Bartolomej's avatar" />
        <h2>Bartolomej</h2>
        <p>
          <Link href='mailto:bartolomej.kozorog@gmail.com'>E-mail</Link> |{' '}
          <Link href='https://github.com/bartolomej'>Github</Link> |{' '}
          <Link href='https://www.linkedin.com/in/bartolomej/'>Linkedin</Link>
        </p>
      </div>

      <div className='about-one-person'>
        <Avatar src={monikaImage} alt="Monika's avatar" />
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

type AvatarProps = ImageProps

const Avatar = ({ ...rest }: AvatarProps) => {
  // TODO: convert to png and use placeholder='blur'
  return <Image {...rest} />
}

const Link = ({ href, children }) => {
  return (
    <a target='_blank' href={href}>
      {children}
    </a>
  )
}

export default About
