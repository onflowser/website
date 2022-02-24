import React, { ReactElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navigation() {
  return (
    <div className='nav-bar'>
      <Link href='/'>
        <img src='./images/logo_with_text.svg' alt='' />
      </Link>
      <div className='nav-bar-links'>
        <Link href='/about'>About us</Link>
        <Link href='https://github.com/onflowser/flowser#-get-started'>
          Quick start
        </Link>
        <a href='/blog'>Blog</a>
      </div>
    </div>
  )
}

type NavLinkProps = {
  route: string
  children: string | ReactElement | ReactElement[]
}

const NavLink = ({ route, children }: NavLinkProps) => {
  const router = useRouter()
  const isCurrent = router.route === route

  const classes = ['navbar-links', isCurrent && 'navbar-links__current']

  return (
    <div className={classes.join(' ')}>
      <Link href={route}>{children}</Link>
    </div>
  )
}

export default Navigation
