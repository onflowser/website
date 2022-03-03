import React from 'react'
import Image, { ImageProps } from 'next/image'
import MainLayout from '../layouts/Main'
import Cover from '../components/Cover'

// images
import teamImage from '../public/images/team.svg'
import jernejImage from '../public/images/jernej.png'
import bartImage from '../public/images/bartolomej.png'
import monikaImage from '../public/images/monika.png'
import { PageMeta } from '../components/PageMeta'
import { Parallax } from 'react-scroll-parallax'
import { ParallaxProps } from 'react-scroll-parallax/dist/components/Parallax/types'
import useResize from '../lib/use-resize'

function About() {
  const [width] = useResize()
  const imageProps: Partial<ImageProps> = {
    height: width < 500 ? 800 : 500,
    objectFit: 'contain',
    placeholder: 'blur'
  }
  const parallaxProps: ParallaxProps = {
    speed: 10,
    scale: [0.8, 1]
  }
  return (
    <MainLayout>
      <PageMeta
        title='Flowser - About Us'
        description='How did Flowser came to be ? Learn about who is behind the Flowser team and why did we choose to make this tool.'
      />
      <Cover foregroundImageSrc={teamImage} />

      <div className='plain-text'>
        <h1>HELLO!</h1>
        <h4>
          We are happy to see you here 👋
          <br />
          Meet the people behind the Flowser:
        </h4>
      </div>

      <Parallax {...parallaxProps}>
        <div className='about-one-person'>
          <Image src={jernejImage} alt="Jernej's avatar" {...imageProps} />
          <h2>Jernej</h2>
          <p>
            <Link href='mailto:jernej.gololicic@gmail.com'>E-mail</Link> |{' '}
            <Link href='https://github.com/jgololicic'>Github</Link> |{' '}
            <Link href='https://www.linkedin.com/in/jernej-gololi%C4%8Di%C4%8D-8a296925/'>
              Linkedin
            </Link>
          </p>
        </div>
      </Parallax>

      <Parallax {...parallaxProps}>
        <div className='about-one-person'>
          <Image src={bartImage} alt="Bartolomej's avatar" {...imageProps} />
          <h2>Bartolomej</h2>
          <p>
            <Link href='mailto:bartolomej.kozorog@gmail.com'>E-mail</Link> |{' '}
            <Link href='https://github.com/bartolomej'>Github</Link> |{' '}
            <Link href='https://www.linkedin.com/in/bartolomej/'>Linkedin</Link>
          </p>
        </div>
      </Parallax>

      <Parallax {...parallaxProps}>
        <div className='about-one-person'>
          <Image src={monikaImage} alt="Monika's avatar" {...imageProps} />
          <h2>Monika</h2>
          <p>
            <Link href='mailto:monika.hribersek@gmail.com'>E-mail</Link> |{' '}
            <Link href='https://github.com/monikaxh'>Github</Link> |{' '}
            <Link href='https://www.linkedin.com/in/monikahribersek/'>
              Linkedin
            </Link>
          </p>
        </div>
      </Parallax>
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
