import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useCSSProps } from '~/assets/Helpers'

const cx = classNames.bind(styles)
function Button({
  outline = false,
  disabled = false,
  text = false,
  href, //  'https://github.com'
  to, // '/route'
  onClick = () => {
    console.log('Button component Onclick...')
  },
  children = 'Button',
  ...props
}) {
  // DATA STRUCTURE (default)
  //  const props = {
  //   color : 'red',
  //   width : '100px',
  //   radius : '5px'
  //   }
  // debugger
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
    <Comp className={cx('wrapper', { outline, disabled, text })} ref={useCSSProps(props)} {...attributes}>
      {children}
    </Comp>
  )
}

export default Button
