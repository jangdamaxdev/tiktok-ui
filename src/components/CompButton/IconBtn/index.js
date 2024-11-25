import styles from './IconBtn.module.scss'
import classNames from 'classnames/bind'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useCSSProps } from '~/assets/CustomHooks'

const cx = classNames.bind(styles)
function IconBtn({
  W = '4rem',
  C = '#333',
  R = '0.5rem',
  invi,
  className,
  disabled = false,
  href, //  'https://github.com'
  to, // '/route'  
  children = 'Button',
  ...attributes
}) {
  // console.log('render IconBtn');

  let Comp = 'button'
   attributes = disabled ? {} : attributes

  if (href) {
    attributes.href = href
    attributes.target = '_blank'
    Comp = 'a'
  } else if (to) {
    attributes.to = to
    Comp = Link
  }

  // Add props to CSS --variable
  return (
    <Comp className={cx('wrapper', className, { disabled, invi })} ref={useCSSProps({ W, C, R })} {...attributes}>
      {children}
    </Comp>
  )
}

export default memo(IconBtn)
