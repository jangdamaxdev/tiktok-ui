import images from '~/assets/images'
import classNames from 'classnames/bind'

import styles from './Image.module.scss'
import { useCSSProps } from '~/assets/Helpers'

const cx = classNames.bind(styles)

function Image({ src, W, H, R, cFallback, className, alt = 'Image alt' }) {
  // const size = src ? 'customSize' : 'fallbackSize'

  return (
    <img
      ref={useCSSProps({ W, H, R })}
      src={src || cFallback || images.default}
      className={cx('customSize', className)}
      alt={alt}
    />
  )
}

export default Image
