import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { useCSSProps } from '~/assets/CustomHooks'

import styles from './SCSS/Image.module.scss'
import images from '~/assets/images'
const cx = classNames.bind(styles)

function Image({
  W = '5rem',
  H = '5rem',
  R = ', 0.5rem',
  src,
  cFallback = images.default,
  className,
  alt = 'Image alt',
  ...attributes
}) {
  // const size = src ? 'customSize' : 'fallbackSize'
  return (
    <img
      ref={useCSSProps({ W, H, R })}
      src={src || cFallback}
      className={cx('customSize', className)}
      alt={alt}
      {...attributes}
    />
  )
}
Image.propTypes = {
  W: PropTypes.string,
  H: PropTypes.string,
  R: PropTypes.string,
  src: PropTypes.string,
  cFallback: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
}
export default Image
