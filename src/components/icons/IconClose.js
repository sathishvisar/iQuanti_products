import React from 'react'
import PropTypes from 'prop-types'

const IconClose = ({ width = 20, height = 20, color = '#15DB95' }) => {
  const svgPath = 'M 2.75 2.042969 L 2.042969 2.75 L 2.398438 3.101563 L 7.292969 8 L 2.042969 13.25 L 2.75 13.957031 L 8 8.707031 L 12.894531 13.605469 L 13.25 13.957031 L 13.957031 13.25 L 13.605469 12.894531 L 8.707031 8 L 13.957031 2.75 L 13.25 2.042969 L 8 7.292969 L 3.101563 2.398438 Z'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
      <path d={svgPath} fill={color} />
    </svg>
  )
}

IconClose.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
}

export default IconClose
