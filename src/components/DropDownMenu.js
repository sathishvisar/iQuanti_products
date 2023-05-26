import React, { useState, useEffect, useRef } from 'react'
import "./DropDownMenu.scss"

import IconDone from "./icons/IconDone"

const DropDownMenu = (props) => {
  const {selectedOption, handleFilterChange} = props;
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
        Toggle Dropdown
      </span>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {selectedOption === option && <IconDone />} {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
