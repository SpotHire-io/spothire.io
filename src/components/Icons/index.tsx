import * as React from 'react'
const paths = require('./paths')

type Names =
  'bookmark' |
  'calendar' |
  'calendar' |
  'camera' |
  'chat' |
  'check' |
  'chevronDown' |
  'chevronLeft' |
  'chevronRight' |
  'chevronUp' |
  'clock' |
  'close' |
  'cloud' |
  'cog' |
  'compose' |
  'dribbble' |
  'expand' |
  'external' |
  'facebook' |
  'file' |
  'folder' |
  'geolocation' |
  'github' |
  'grid' |
  'heart' |
  'home' |
  'info' |
  'link' |
  'list' |
  'lock' |
  'mail' |
  'musicNote' |
  'next' |
  'no' |
  'pause' |
  'picture' |
  'pin' |
  'play' |
  'previous' |
  'refresh' |
  'repost' |
  'search' |
  'shoppingCart' |
  'skull' |
  'speakerVolume' |
  'speaker' |
  'star' |
  'tag' |
  'trash' |
  'triangleDown' |
  'triangleLeft' |
  'triangleRight' |
  'triangleUp' |
  'twitter' |
  'user' |
  'video' |
  'warning'

interface Props extends React.SVGProps<SVGSVGElement> {
  name?: Names
  size?: string | number
  fill?: string
  width?: string | number
  height?: string | number
}

const Icon: React.StatelessComponent<Props> = ({
  name = 'warning',
  size = '1em',
  fill = 'currentColor',
  width,
  height,
  ...props
}) => {
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
