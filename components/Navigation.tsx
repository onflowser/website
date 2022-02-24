import React, { ReactElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navigation() {
  return (
    <div className='nav-bar'>
      <Link href='/'>
        <a>
          <img src='./images/logo_with_text.svg' alt='' />
        </a>
      </Link>
      <div className='nav-bar-links'>
        <NavLink href='/about'>About us</NavLink>
        <Link href='https://github.com/onflowser/flowser#-get-started'>
          Quick start
        </Link>
        <NavLink href='/blog'>Blog</NavLink>
      </div>
    </div>
  )
}

type NavLinkProps = {
  href: string
  children: string | ReactElement | ReactElement[]
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const router = useRouter()
  const isCurrent = router.route === href

  const classes = [isCurrent && 'nav-bar-link__current']

  return (
    <div className={classes.join(' ')}>
      <Link href={href}>{children}</Link>
    </div>
  )
}

export default Navigation
