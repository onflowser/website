import React, { ReactElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navigation() {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <Link href='/'>
          <div className='navbar-logo'>
            <img src='images/flowser-logo.svg' alt='' />
            <span>Flowser</span>
          </div>
        </Link>

        <div className='navbar-content-right'>
          <NavLink route='/blog'>BLOG</NavLink>
          <NavLink route='/about'>ABOUT</NavLink>
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
