import React, { useState, useEffect, useRef } from 'react'
import "./DropDownMenu.scss"

import IconArrowDown from "./icons/IconArrowDown"
import IconDoneBold from "./icons/IconDoneBold"

const DropDownMenu = (props) => {
  const { selectedOption, handleFilterChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    'APR Min',
    'APR Max',
    'Monthly Payment',
    'Origination Fee'
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    handleFilterChange(option)
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <span className="dropdown-button" onClick={toggleDropdown}>
        Sort by <IconArrowDown width={10} height={10} color={'#fff'} />
      </span>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {selectedOption === option && <IconDoneBold />} {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
