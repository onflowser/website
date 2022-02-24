import React from 'react'
import Image from 'next/image'
import flowserImage from '../public/images/flowser.png'
import backgroundImage from '../public/images/cover-bg.png'

function Cover({ imageSrc = flowserImage }) {
  return (
    <div className='page-welcome' style={{ position: 'relative' }}>
      <div
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <Image layout='fill' objectFit='cover' src={backgroundImage} />
      </div>
      <div style={{ position: 'relative', height: 400, width: 500 }}>
        <Image objectFit='contain' layout='fill' src={imageSrc} alt='' />
      </div>
    </div>
  )
}

export default Cover
