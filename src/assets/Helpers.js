import { useEffect, useLayoutEffect, useRef, useState } from 'react'

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
function useDebounce(callback, value, delayTime) {
  // const [realValue, setRealValue] = useState(value)

  useEffect(() => {
    const timeID =
      value &&
      setTimeout(() => {
        callback(value)
      }, delayTime) // Waiting for callback
    return () => clearTimeout(timeID)
  }, [value])

  // return realValue
}

export { useCSSProps, useDebounce }
