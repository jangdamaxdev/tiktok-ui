import { useLayoutEffect, useRef } from 'react'

function useCSSProps(props) {
  const ref = useRef()

  useLayoutEffect(() => {
    for (let prop in props) {
      props[prop] && ref.current?.style.setProperty(`--${prop}`, props[prop])
    }
    return () => {
      for (let prop in props) {
        ref.current?.style.removeProperty(`--${prop}`)
      }
    }
  }, [props])
  return ref
}

export { useCSSProps }
