import styles from './SearchResult.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function SearchResult({ relatedKeys, relatedAccounts }) {
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
    <>
      <div className={cx('relatedKeys')}>
        {relatedKeys &&
          relatedKeys.map((title, index) => (
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
        {relatedAccounts &&
          relatedAccounts.map((accData, index) => (
            <li key={index}>
              <img className={cx('Avatar')} src={accData.avatar} alt="Avatar" />

              <div className={cx('acccountDetails')}>
                <h4 className={cx('username')}>
                  {accData.username.name}
                  {accData.username.check && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <p className={cx('nickname')}>{accData.nickname || accData.username.name}</p>
              </div>
            </li>
          ))}
        <div className={cx('viewAll')}>
          <p>View all results for "{relatedKeys[0]}"</p>
        </div>
      </div>
    </>
  )
}

export default SearchResult
