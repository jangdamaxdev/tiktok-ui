import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useCSSProps } from '~/assets/CustomHooks'

const cx = classNames.bind(styles)
function Button({
  W = '10rem',
  C = 'red',
  R = '0.5rem',
  outline = false,
  disabled = false,
  className,
  invi,
  text = false,
  href, //  'https://github.com'
  to, // '/route'
  children = 'Button',
  ...attributes
}) {
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
  return (
    <Comp
      className={cx('wrapper', className, { outline, disabled, text, invi })}
      ref={useCSSProps({ W, C, R })}
      {...attributes}
    >
      {children}
    </Comp>
  )
}

export default Button
