import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional

import styles from './Header.module.scss'
import Images from '~/assets/images'
import { Button, IconBtn } from '~/components/CompButton'
import Menu from '~/components/Menu'
import Search from '~/components/Search'

import { content, contentLogin } from '~/assets/FakeAPI'

const cx = classNames.bind(styles)

function Header() {
  const isLogin = false
  const ActionComp = () => {
    if (isLogin) {
      return (
        <div className={cx('actions')}>
          <Tippy content="Upload video">
            <div>
              <IconBtn>
                <FontAwesomeIcon icon={faCloudArrowUp} />
              </IconBtn>
            </div>
          </Tippy>

          <Tippy content="Message">
            <div>
              <IconBtn>
                <FontAwesomeIcon icon={faPaperPlane} />
              </IconBtn>
            </div>
          </Tippy>

          <Tippy content="Inbox">
            <div>
              <IconBtn>
                <FontAwesomeIcon icon={faMessage} />
              </IconBtn>
            </div>
          </Tippy>

          {/* avatar */}
          <Menu dataRender={contentLogin} interactive delay={[0, 500]} placement="bottom-end">
            <div className={cx('avatar')}>
              <img src={contentLogin.avatar} alt="" />
            </div>
          </Menu>
        </div>
      )
    } else {
      return (
        <div className={cx('actions')}>
          <Button text color={'#333'}>
            Upload
          </Button>
          <Button >Log in</Button>

          <Menu dataRender={content} interactive delay={[0, 500]} placement="bottom-end">
            <IconBtn >
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </IconBtn>
          </Menu>
        </div>
      )
    }
  }
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={Images.src} alt="Logo" />
        <Search width='40rem' />
        <ActionComp />
      </div>
    </header>
  )
}
export default Header
