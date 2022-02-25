import { useEffect, useState } from 'react'

export default function useResize() {
  const [width, setWidth] = useState<number>()
  const [height, setHeight] = useState<number>()

  function onResize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return [width, height]
}
