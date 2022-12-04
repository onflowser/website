import { Theme } from '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    spacing: {
      sm: string
      md: string
      lg: string
      xl: string
    }
    color: {
      dark: string
      grey: string
      darkGrey: string
      black: string
      light: string
      flow: string
      gold: string
    }
    fontSize: {
      sm: string
      md: string
      lg: string
      big: string
    }
    radius: {
      sm: string
      md: string
    }
    lineHeight: {
      md: string
    }
  }
}

export const theme: Theme = {
  spacing: {
    sm: '12px',
    md: '20px',
    lg: '40px',
    xl: '60px'
  },
  color: {
    dark: '#19202e',
    black: '#000000',
    light: '#FFFFFF',
    grey: '#FFFFFFB2',
    darkGrey: '#59678352',
    flow: '#16FF99',
    gold: '#FFDD62A0'
  },
  fontSize: {
    sm: '14px',
    md: '18px',
    lg: '36px',
    big: '55px'
  },
  radius: {
    sm: '7px',
    md: '10px'
  },
  lineHeight: {
    md: '26px'
  }
}
