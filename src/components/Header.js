import classNames from 'classnames';
import DropDownMenu from './DropDownMenu'
import "./Header.scss"

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={classNames('header',isSticky ? 'sticky-header' : '')}>
      <DropDownMenu />
    </header>
  );
};


export default Header;