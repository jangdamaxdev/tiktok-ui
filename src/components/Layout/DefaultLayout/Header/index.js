import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'
import Images from '~/assets/images'
function Header() {
  const cx = classNames.bind(styles)

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={Images.src} alt="Logo" />
        <div className={cx('search')}>
          <input type="text" placeholder="Search accounts and videos" />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading', 'invisible')} icon={faSpinner} />
          <span></span>
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  )
}

export default Header
