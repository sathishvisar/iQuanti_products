import React from 'react'
import PropTypes from 'prop-types'

const IconArrowDown = ({ width = 14, height = 14, color = '#15DB95' }) => {
  const svgPath = 'M0.1542969,6.8614502l11.5,11c0.1933594,0.1845703,0.4980469,0.1845703,0.6914063,0l11.5-11	c0.1474609-0.1411133,0.1943359-0.3579102,0.1181641-0.5473633C23.8881836,6.1241455,23.7041016,6.0001221,23.5,6.0001221h-2	c-0.1279297,0-0.2509766,0.0488281-0.34375,0.137207L12,14.8111572L2.84375,6.1373291	C2.7509766,6.0489502,2.6279297,6.0001221,2.5,6.0001221h-2c-0.2041016,0-0.3881836,0.1240234-0.4638672,0.3139648	C-0.0400391,6.50354,0.0068359,6.7203369,0.1542969,6.8614502z'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
      <path d={svgPath} fill={color} />
    </svg>
  )
}

IconArrowDown.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string
}

export default IconArrowDown
