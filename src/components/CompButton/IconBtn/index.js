import styles from './IconBtn.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useCSSProps } from '~/assets/Helpers'

const cx = classNames.bind(styles)
function IconBtn({
  disabled = false,
  href, //  'https://github.com'
  to, // '/route'
  onClick = () => {
    console.log('IconBtn component Onclick...')
  },
  children = 'Button',
  ...props
}) {
  // DATA STRUCTURE (default)
  //  const props = {
  //   width : '50px',
  //   color : 'red',
  // radius: '5px'
  //   }

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
  // Add props to CSS --variable 
  return (
    <Comp className={cx('wrapper', { disabled })} ref={useCSSProps(props)} {...attributes}>
      {children}
    </Comp>
  )
}

export default IconBtn
