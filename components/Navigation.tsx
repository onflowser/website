import React, { ReactElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { SizedBox } from './SizedBox'
import { theme } from '../styles/theme'

function Navigation() {
  return (
    <Container>
      <LeftSide>
        <Link href='/'>
          <a>
            <Logo src='/images/logo_big.png' alt='' />
          </a>
        </Link>
      </LeftSide>
      <RightSide>
        <NavLink href='/about'>About us</NavLink>
        <SizedBox width={theme.spacing.md} />
        <NavLink target='_blank' href='https://docs.flowser.dev'>
          Docs
        </NavLink>
        <SizedBox width={theme.spacing.md} />
        <NavLink href='/blog'>Blog</NavLink>
      </RightSide>
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.lg} 0;
`

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`

const RightSide = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.grey};
`

const Logo = styled.img`
  height: 30px;
`

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
