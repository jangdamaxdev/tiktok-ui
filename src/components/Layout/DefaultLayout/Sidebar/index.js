import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)
function Sidebar({ children }) {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('content')}><p>Side bar</p>{children}</div>
    </aside>
  )
}

export default Sidebar
