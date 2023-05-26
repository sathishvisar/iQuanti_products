import classNames from 'classnames'
import PropTypes from 'prop-types'
import DropDownMenu from './DropDownMenu'
import './Header.scss'

import React, { useState, useEffect } from 'react'

const Header = (props) => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={classNames('header', isSticky ? 'sticky-header' : '')}>
      <DropDownMenu
        selectedOption={props.selectedOption}
        handleFilterChange={props.handleFilterChange}/>
    </header>
  )
}

Header.propTypes = {
  selectedOption: PropTypes.string,
  handleFilterChange: PropTypes.func
}

export default Header
