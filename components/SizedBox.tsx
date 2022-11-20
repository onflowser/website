import React from 'react'

export type SizedBoxProps = {
  width?: number | string
  height?: number | string
  inline?: boolean
}

export function SizedBox({ width, height, inline = false }: SizedBoxProps) {
  return (
    <div
      style={{ width, height, display: inline ? 'inline-block' : 'block' }}
    ></div>
  )
}
