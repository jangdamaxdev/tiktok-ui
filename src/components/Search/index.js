import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'

import styles from './Search.module.scss'
import SearchResult from '~/components/SearchResult'
import { useCSSProps, useDebounce } from '~/assets/CustomHooks'
import { IconBtn } from '~/components/CompButton'
import { getUserTiktok } from '~/APIs/Requests'
import routesConfig from '~/config/routes'

const cx = classNames.bind(styles)
function Search({ W = '40rem' }) {
  const [input, setInput] = useState('')
  const [result, setResult] = useState()
  const [showresult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const inputRef = useRef()
  const actions = {
    clear() {
      // console.log('running actions.clear()')
      setInput('')
      setResult()
      setShowResult(false)
      inputRef.current.focus()
    },
    input(e) {
      const valueInput = e.target.value.replace(/\s+/g, ' ')
      !valueInput.startsWith(' ') && setInput(valueInput)
      valueInput === '' && setResult()
    },
    clickOut() {
      setShowResult(false)
    },
    search() {
      navigate(routesConfig.search)
    },
    callAPI(keyword) {
      setLoading(true)
      getUserTiktok({
        keyword,
        // onBefore:(path, params) => {
        // logic updatepath = '/users/search'
        // logic updateparams = {
        //       q: keyword,
        //       type: 'more',
        //     }
        // return [ updatepath ,  updateparams  ]
        // },
        onSuccess: (response) => {
          setResult(response.data)
          setShowResult(true)
          setLoading(false)
        },
      })
    },
  }

  useDebounce(actions.callAPI, input, 800)
  console.log(`render main Comp Search >> input:${input}.`)

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
            value={input}
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

          <IconBtn
            W="4.6rem"
            className={cx('search-btn')}
            onClick={actions.search}
            onMouseDown={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </IconBtn>
        </div>
      </Tippy>
    </div>
  )
}

export default Search
