import * as React from 'react'
const paths = require('./paths')

const Icon = ({name, size, fill, width, height, ...props}) => {
  name = name || 'warning'
  size = size || '1em'
  fill = fill || 'currentColor'
  const path = paths[name]

  return (
    <svg {...props}
      width={width || size}
      height={height || size}
      fill={fill}
      data-id={`geomicon-${name}`}
      viewBox='0 0 32 32'>
      <path d={path} />
    </svg>
  )
}

export default Icon
