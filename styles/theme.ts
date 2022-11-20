import { Theme } from '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    spacing: {
      sm: string
      md: string
      lg: string
    }
    color: {
      dark: string
      grey: string
      light: string
      flow: string
      gold: string
    }
  }
}

export const theme: Theme = {
  spacing: {
    sm: '10px',
    md: '20px',
    lg: '50px'
  },
  color: {
    dark: '#19202e',
    light: '#FFFFFF',
    grey: '#FFFFFFB2',
    flow: '#16FF99',
    gold: '#FFDD6266'
  }
}
