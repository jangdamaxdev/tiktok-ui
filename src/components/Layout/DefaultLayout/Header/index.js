import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'

import Tippy from '@tippyjs/react/headless'
// import 'tippy.js/dist/tippy.css' // optional

import styles from './Header.module.scss'
import Images from '~/assets/images'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import SearchResult from '~/components/ContentPopper/SearchResult'
const cx = classNames.bind(styles)

function Header() {
  const [relatedKeys, setRelatedKeys] = useState([])
  const [relatedAccounts, setRelatedAccounts] = useState([])
  // const handleInput = () => {
  //   useEffect(()=> {
  //    const callAPI = fetch('API', '{header}')
  //     .then(response => response.json())
  //     .then(data => {
  //       setRelatedKeys(data.relatedKeys)
  //       setRelatedAccounts(data.relatedAccounts)
  //   })
  // ,[relatedKeys])
  //}


  // DATA STRUCTURE
    // relatedKeys = ['ReactJS VN', 'ReactJS Việt Nam bị chủ sở hữu cũ bán', 'ReactJS Việt Nam không còn chất lượng']
    // relatedAccounts = [
    //   {
    //     avatar: require('~/assets/images/10.gif'), // Handle static link
    //     username: { name: 'Tham gia nhóm ReactJS Việt Nam', check: true },
    //     nickname: 'Nhóm ReactJS',
    //   },
    //   {
    //     avatar: require('~/assets/images/14.gif'), // Handle static link
    //     username: { name: 'New ReactJS Việt Nam', check: false },
    //     nickname: 'ReactJS Việt Nam - Private',
    //   }
    // ]

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={Images.src} alt="Logo" />

        <Tippy
          interactive
          visible={relatedKeys.length > 0}
          render={(attrs) => (
            <div className={cx('box')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
              <SearchResult relatedKeys={relatedKeys} relatedAccounts={relatedAccounts} />
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>

        <div className={cx('actions')}>ACtion Button</div>
      </div>
    </header>
  )
}

export default Header
