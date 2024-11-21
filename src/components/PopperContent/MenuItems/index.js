import { useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { faCheck, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import styles from './MenuItems.module.scss'
import Popper from '~/components/Popper'
const cx = classNames.bind(styles)

function MenuItems({ children, width, dataRender }) {
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
        <div className={cx('back')} onClick={actions.handleBack}>
          <span>{<FontAwesomeIcon icon={faChevronLeft} />}</span>
          <h4 className={cx('title', 'heading')}>{currentMenu.heading}</h4>
        </div>
      )
    }
  }

  const divRef = useRef()
  useLayoutEffect(() => {
    divRef.current?.style.setProperty('--width', width)
    return () => {
      divRef.current?.style.removeProperty('--width')
    }
  }, [width])

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
    <Tippy
      interactive
      delay={[0, 500]}
      placement="bottom-end"
      onHide={actions.handleReset}
      render={(attrs) => (
        <div tabIndex="-1" {...attrs}>
          <Popper>
            <div ref={divRef} className={cx('MenuItems')}>
              {Heading()}
              {currentMenu.content &&
                currentMenu.content.map((item, index) => (
                  <li 
                  key={index} 
                  className={cx(item?.className)}
                  onClick={() => handleSelect(item)}>
                    <span>{getIcon(item)}</span>
                    <h4 className={cx('title')}>{item.title}</h4>
                  </li>
                ))}
            </div>
          </Popper>
        </div>
      )}
    >
      {/* Tippy require a block tag, not allow a Comp */}
      <div>{children}</div>
    </Tippy>
  )
}

export default MenuItems
