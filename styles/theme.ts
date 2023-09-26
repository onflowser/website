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
      lightGold: string
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
      lg: string
    }
    breakpoints: {
      mobile: string
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
    gold: '#FFDD62A0',
    lightGold: '#FFDD6230'
  },
  fontSize: {
    sm: '16px',
    md: '22px',
    lg: '40px',
    big: '60px'
  },
  radius: {
    sm: '7px',
    md: '10px'
  },
  lineHeight: {
    md: '26px',
    lg: '30px'
  },
  breakpoints: {
    mobile: '1100px'
  }
}

export function getPixelValue(value: string): number {
  return Number(value.replace('px', ''))
}
