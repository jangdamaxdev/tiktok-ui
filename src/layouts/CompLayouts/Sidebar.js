import classNames from 'classnames/bind'
import styles from './SCSS/Sidebar.module.scss'

const cx = classNames.bind(styles)
function Sidebar({ children }) {
  return <aside className={cx('wrapper')}>{children}</aside>
}

export default Sidebar
