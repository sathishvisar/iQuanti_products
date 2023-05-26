import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './CustomButton.scss'

const CustomButton = ({ onClick, text, label, variant = 'contained', color = 'primary', fullWidth = false }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (<div className={classNames('btn-container', fullWidth ? 'full-width' : '')}>
        <button
            className={classNames(
              'btn',
              variant === 'contained' ? 'btn-contained' : 'btn-outlined',
              fullWidth ? 'full-width' : '',
              color === 'primary' ? 'color-primary' : 'color-secondary'
            )}
            onClick={handleClick}>
                {text}
        </button>
        {label && <span className='btn-label'>{label}</span>}
    </div>)
}

CustomButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  fullWidth: PropTypes.bool
}

export default CustomButton
