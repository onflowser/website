import React, { ReactElement } from 'react'
import Image, { ImageProps } from 'next/image'
import defaultBackgroundImage from '../public/images/cover-bg.png'

type Props = {
  title?: string
  icon?: string | ReactElement
  foregroundImageSrc?: string | ImageProps['src']
  backgroundImageSrc?: string | ImageProps['src']
  height?: number // height in vh units
}

function Cover({
  title,
  icon,
  height = 40,
  foregroundImageSrc,
  backgroundImageSrc = defaultBackgroundImage
}: Props) {
  const offset = 0.4
  return (
    <div
      style={{
        height: title ? `${height + offset * height}vh` : `${height}vh`
      }}
    >
      <div
        className='page-welcome'
        style={{
          position: 'relative',
          height: `${height}vh`,
          paddingLeft: 50,
          paddingRight: 50
        }}
      >
        <div
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {typeof backgroundImageSrc === 'string' ? (
            <img
              src={backgroundImageSrc}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <Image
              layout='fill'
              objectFit='cover'
              placeholder='blur'
              src={backgroundImageSrc}
            />
          )}
        </div>
        {foregroundImageSrc && (
          <div style={{ position: 'relative', height: 400, width: 500 }}>
            <Image
              objectFit='contain'
              layout='fill'
              src={foregroundImageSrc}
              alt=''
            />
          </div>
        )}
        {title && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: `-${offset * 100}%`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 80
              }}
            >
              {icon}
            </span>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cover
