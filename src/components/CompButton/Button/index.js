import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useCSSProps } from '~/assets/Helpers'

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
  onClick = () => {
    console.log('Button component Onclick...')
  },
  children = 'Button',
}) {
  let Comp = 'button'
  const attributes = disabled ? {} : { onClick }

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
