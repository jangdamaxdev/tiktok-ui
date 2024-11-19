import styles from './MenuItems.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'

import getContentAPI, { backIcon, checkIcon } from './API_Fake'
const cx = classNames.bind(styles)

function MenuItems() {
  const [history, setHistory] = useState(getContentAPI('EN'))
  const [darkMode, setDarkMode] = useState('AU')
  const currentMenu = history[history.length - 1]
  const handleSelect = (item) => {
    if (item.children) {
      setHistory((preHis) => [...preHis, item.children])
    } else if (item.langID) {
      setHistory(getContentAPI(item.langID))
    } else if (item.darkID) {
      setDarkMode(item.darkID)
    }
  }
  const handleBack = () => {
    setHistory((preHis) => preHis.slice(0, preHis.length - 1))
  }

  const Heading = () => {
    if (currentMenu.heading) {
      return (
        <div className={cx('back')} onClick={handleBack}>
          <span>{backIcon}</span>
          <h4 className={cx('title')}>{currentMenu.heading}</h4>
        </div>
      )
    }
  }
  return (
    <div className={cx('MenuItems')}>
      {Heading()}
      {currentMenu.content &&
        currentMenu.content.map((item, index) => (
          <li key={index} onClick={() => handleSelect(item)}>
            <span>{item?.icon}</span>
            <span>{item?.darkID === darkMode && checkIcon}</span>
            <h4 className={cx('title')}>{item.title}</h4>
          </li>
        ))}
    </div>
  )
}

export default MenuItems
