import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import SearchResult from '~/components/SearchResult'

import styles from './Search.module.scss'

import { useCSSProps, useDebounce } from '~/assets/Helpers'
import { IconBtn } from '~/components/CompButton'
import { useNavigate } from 'react-router-dom'
const cx = classNames.bind(styles)
function Search({ W = '40rem' }) {
  const [input, setInput] = useState()
  const [result, setResult] = useState()
  const [showresult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const inputRef = useRef()
  const actions = {
    clear() {
      console.log('running actions.clear()')
      setInput()
      setResult()
      setShowResult(false)
      inputRef.current.value = ''
      inputRef.current.focus()
    },
    input() {
      const valueInput = inputRef.current.value.trim().replace(/\s+/g, ' ')
      valueInput ? setInput(valueInput) : actions.clear()
    },
    clickOut() {
      setShowResult(false)
    },
    search() {
      navigate('/search')
    },
    callAPI(realInput) {
      setLoading(true)
      const response = fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${realInput}&type=less`)
        .then((res) => res.json())
        .then((res) => {
          setResult(res?.data)
          setShowResult(true)
          setLoading(false)
        })
        .catch((error) => console.log('Error: ', error))
    },
  }

  useDebounce(actions.callAPI, input, 800)

  return (
    <div ref={useCSSProps({ W })}>
      <Tippy
        interactive
        visible={showresult && !!result}
        onClickOutside={actions.clickOut}
        render={(attrs) => (
          <div className={cx('searchResult')} tabIndex="-1" {...attrs}>
            {result && (
              <SearchResult relatedKeys={[`${input}`, `${input} demo 2`, `${input} demo 3`]} relatedAccounts={result} />
            )}
          </div>
        )}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            onChange={actions.input}
            onFocus={() => setShowResult(true)}
            type="text"
            placeholder="Search accounts and videos"
          />
          {input && !loading && (
            <IconBtn W="2.5rem" onClick={actions.clear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </IconBtn>
          )}
          {loading && (
            <IconBtn W="2.5rem" className={cx({ loading })}>
              <FontAwesomeIcon icon={faSpinner} />
            </IconBtn>
          )}
          <span></span>

          <IconBtn W="4.6rem" className={cx('search-btn')} onClick={actions.search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </IconBtn>
        </div>
      </Tippy>
    </div>
  )
}

export default Search
