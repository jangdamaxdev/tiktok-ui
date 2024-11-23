import styles from './SearchResult.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function SearchResult({ relatedKeys, relatedAccounts }) {
  // DATA STRUCTURE
  // relatedKeys = ['key word 1', 'key word 2', 'key word 3']

  const navigate = useNavigate()
  return (
    <>
      <div className={cx('relatedKeys')}>
        {relatedKeys?.map((title, index) => (
          <li key={index}>
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <h4 className={cx('title')}>{title}</h4>
          </li>
        ))}
      </div>

      <label>Accounts</label>
      <div className={cx('relatedAccounts')}>
        {relatedAccounts?.map((item) => (
          <li key={item.id} onClick={() => navigate(`/@${item.nickname}`)}>
            <img className={cx('Avatar')} src={item.avatar} alt="Avatar" />

            <div className={cx('acccountDetails')}>
              <h4 className={cx('username')}>
                {item.full_name}
                {item.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
              </h4>
              <p className={cx('nickname')}>{item.nickname || item.full_name}</p>
            </div>
          </li>
        ))}
        <div className={cx('viewAll')}>
          <p onClick={() => navigate('/search')}>View all results for "{relatedKeys[0]}"</p>
        </div>
      </div>
    </>
  )
}

export default SearchResult
