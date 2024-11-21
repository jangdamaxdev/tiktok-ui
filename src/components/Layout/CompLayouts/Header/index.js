import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional

import styles from './Header.module.scss'
import Images from '~/assets/images'
import { Button, IconBtn } from '~/components/CompButton'
import MenuItems from '~/components/PopperContent/MenuItems'
import Search from '~/components/Search'

import { content, contentLogin } from '~/components/PopperContent/MenuItems/API_Fake'

const cx = classNames.bind(styles)

function Header() {
  const isLogin = true
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
          <MenuItems dataRender={contentLogin}>
            <div className={cx('avatar')}>
              <img src={contentLogin.avatar} alt="" />
            </div>
          </MenuItems>
        </div>
      )
    } else {
      return (
        <div className={cx('actions')}>
          <Button text color={'#333'}>
            Upload
          </Button>
          <Button>Log in</Button>

          <MenuItems dataRender={content}>
            <IconBtn>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </IconBtn>
          </MenuItems>
        </div>
      )
    }
  }
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={Images.src} alt="Logo" />
        <Search width={'400px'} />
        <ActionComp />
      </div>
    </header>
  )
}
export default Header
