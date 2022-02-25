import React, { ReactElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useResize from '../lib/use-resize'

function Navigation() {
  const [width] = useResize()
  const isSmall = width < 400
  return (
    <div className='nav-bar'>
      <Link href='/'>
        <a>
          <img
            style={{ width: isSmall ? 80 : 200 }}
            src={isSmall ? './images/logo.svg' : './images/logo_with_text.svg'}
            alt=''
          />
        </a>
      </Link>
      <div className='nav-bar-links'>
        <NavLink href='/about'>About us</NavLink>
        <NavLink
          target='_blank'
          href='https://github.com/onflowser/flowser#-get-started'
        >
          Quick start
        </NavLink>
        <NavLink href='/blog'>Blog</NavLink>
      </div>
    </div>
  )
}

type NavLinkProps = {
  href: string
  target?: string
  children: string | ReactElement | ReactElement[]
}

const NavLink = ({ href, children, ...rest }: NavLinkProps) => {
  const router = useRouter()
  const isCurrent = router.route === href

  const classes = [isCurrent ? 'nav-bar-link__current' : '']

  return (
    <div className={classes.join(' ')}>
      <Link {...rest} href={href}>
        {children}
      </Link>
    </div>
  )
}

export default Navigation
