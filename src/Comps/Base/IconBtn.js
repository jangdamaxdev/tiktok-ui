import React, { memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './SCSS/IconBtn.module.scss'
import { useCSSProps } from '~/assets/CustomHooks'

const cx = classNames.bind(styles)
function IconBtn({
  W = '4rem',
  C = '#333',
  R = '0.5rem',
  invi,
  disabled = false,
  className,
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
      {React.Children.only(children)}
    </Comp>
  )
}

IconBtn.propTypes = {
  W: PropTypes.string,
  C: PropTypes.string,
  R: PropTypes.string,
  disabled: PropTypes.bool,
  invi: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
}
export default IconBtn
