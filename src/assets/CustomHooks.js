import { useEffect, useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
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
useCSSProps.propTypes = {
  props: PropTypes.string.isRequired,
}

function useDebounce(onTimeout = (value) => console.log('realValue: ', value), value, delayTime = 500) {
  // const [realValue, setRealValue] = useState(value)

  useEffect(() => {
    const timeID =
      value &&
      setTimeout(() => {
        onTimeout(value)
      }, delayTime) // Waiting for onTimeout()
    return () => clearTimeout(timeID)
  }, [value])

  // return realValue
}
useDebounce.propTypes = {
  onTimeout: PropTypes.func,
  value: PropTypes.string.isRequired,
  delayTime: PropTypes.number,
}
export { useCSSProps, useDebounce }
