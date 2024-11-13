import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Header from './Header'
import Sidebar from './Sidebar'

function DefaultLayout({ children }) {
  const cx = classNames.bind(styles)
  console.log(styles);
  
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout
