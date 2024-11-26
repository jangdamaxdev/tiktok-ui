import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import { useCSSProps } from '~/assets/CustomHooks'
import styles from './SCSS/Button.module.scss'
const cx = classNames.bind(styles)
function Button({
  W = '10rem',
  C = 'red',
  R = '0.5rem',
  outline = false,
  disabled = false,
  text = false,
  invi = false,
  className,
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
      {React.Children.only(children)}
    </Comp>
  )
}
Button.propTypes = {
  W: PropTypes.string,
  C: PropTypes.string,
  R: PropTypes.string,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.bool,
  invi: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
}
export default Button
