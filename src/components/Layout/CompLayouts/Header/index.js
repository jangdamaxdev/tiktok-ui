import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import Tippy from '@tippyjs/react/headless'

import styles from './Header.module.scss'
import Images from '~/assets/images'
import { Button, IconBtn } from '~/components/CompButton'
import MenuItems from '~/components/PopperContent/MenuItems'
import Search from '~/components/Search'
import Popper from '~/components/Popper'

const cx = classNames.bind(styles)

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={Images.src} alt="Logo" />

        <Search width={'400px'} />

        <div className={cx('actions')}>
          <Button text color={'#333'}>
            Upload
          </Button>
          <Button>Log in</Button>
          {/* MENU ITEMS */}
          <Tippy
            interactive
            delay={[0,500]}
            placement="bottom-end"
            render={(attrs) => (
              <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                <Popper>
                  <MenuItems />
                </Popper>
              </div>
            )}
          >
            {/* Tippy require a block tag, not allow a Comp */}
            <div>
              <IconBtn>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </IconBtn>
            </div>
          </Tippy>
        </div>
      </div>
    </header>
  )
}
export default Header
