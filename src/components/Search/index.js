import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useLayoutEffect, useRef, useState } from 'react'

import SearchResult from '~/components/SearchResult'

import styles from './Search.module.scss'

import { searchContent } from '~/assets/FakeAPI'
const cx = classNames.bind(styles)
function Search({ width }) {
  const [relatedKeys, setRelatedKeys] = useState([])
  const [relatedAccounts, setRelatedAccounts] = useState([])
  const divRef = useRef()
  useLayoutEffect(() => {
    divRef.current?.style.setProperty('--SearchWidth', width)
    return () => {
      divRef.current?.style.removeProperty('--SearchWidth')
    }
  })

  // API
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
  return (
    <div ref={divRef}>
      <Tippy
        interactive
        // visible={relatedKeys.length > 0}
        render={(attrs) => (
          <div className={cx('searchResult')} tabIndex="-1" {...attrs}>
            <SearchResult {...searchContent} />
          </div>
        )}
      >
        <div className={cx('search')}>
          <input
            // value={relatedKeys}
            type="text"
            placeholder="Search accounts and videos"
          />
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
    </div>
  )
}

export default Search
