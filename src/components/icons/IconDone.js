import React from 'react'
import PropTypes from 'prop-types'

const IconDone = ({ width = 20, height = 20, color = '#15DB95' }) => {
  const svgPath = 'M 14.5 2.792969 L 5.5 11.792969 L 1.851563 8.148438 L 1.5 7.792969 L 0.792969 8.5 L 1.148438 8.851563 L 5.5 13.207031 L 15.207031 3.5 Z'

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
      <path d={svgPath} fill={color}/>
    </svg>
  )
}

IconDone.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
}

export default IconDone
