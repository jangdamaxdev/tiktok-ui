import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { faCheck, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import styles from './SCSS/Menu.module.scss'
import { useCSSProps } from '~/assets/CustomHooks'
const cx = classNames.bind(styles)

function Menu({ W = '30rem', children, dataRender, ...propsTippy }) {
  const [content, setContent] = useState([dataRender.EN])
  const [checkProps, setCheckProps] = useState({})
  const navigate = useNavigate()
  const currentMenu = content[content.length - 1]
  const actions = {
    handleBack() {
      setContent((preHis) => preHis.slice(0, preHis.length - 1))
    },
    handleReset() {
      setContent((pre) => [pre[0]])
    },
    children(item) {
      setContent((preHis) => [...preHis, item.children])
    },
    langID(item) {
      setContent([dataRender[item.langID]])
    },
    check(item) {
      setCheckProps((pre) => ({ ...pre, ...item.check }))
    },
    to(item) {
      navigate(item.to)
    },
    confirm(item) {
      alert(item.confirm)
    },
  }
  const handleSelect = (item) => {
    const key = Object.keys(actions).find((key) => item[key])
    key && actions[key](item)
  }

  const Heading = () => {
    if (currentMenu.heading) {
      return (
        <div className={cx('heading')} onClick={actions.handleBack}>
          <span className={cx('icon')}>{<FontAwesomeIcon icon={faChevronLeft} />}</span>
          <h4 className={cx('title')}>{currentMenu.heading}</h4>
        </div>
      )
    }
  }

  const getIcon = (field) => {
    if (field.icon) {
      return field.icon
    } else if (field.check) {
      const [[key, value]] = Object.entries(field.check)
      const icon = checkProps[key] === value ? <FontAwesomeIcon icon={faCheck} /> : ''

      return icon
    }
    return false
  }

  return (
    <div ref={useCSSProps({ W })}>
      <Tippy
        {...propsTippy}
        onHide={actions.handleReset}
        render={(attrs) => (
          <div tabIndex="-1" {...attrs} className={cx('menuWrapper')}>
            {Heading()}
            <div className={cx('contents')}>
              {currentMenu.content &&
                currentMenu.content.map((item, index) => (
                  <li key={index} className={cx(item?.className)} onClick={() => handleSelect(item)}>
                    <span className={cx('icon')}>{getIcon(item)}</span>
                    <h4 className={cx('title')}>{item.title}</h4>
                  </li>
                ))}
            </div>
          </div>
        )}
      >
        {/* Tippy require a block tag, not allow a Comp */}
        <div>{React.Children.only(children)}</div>
      </Tippy>
    </div>
  )
}
Menu.propTypes = {
  W: PropTypes.string,
  children: PropTypes.node.isRequired,
  dataRender: PropTypes.object,
}
export default Menu
