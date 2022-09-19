import { Avatar } from '@mui/material'
import React from 'react'

function Story({image, profileSrc, title}) {
  return (
    <div className='story' style={{backgroundImage: `url(${image})`}}>
        <Avatar src={profileSrc} className='story-avatar'/>
        <h4>{title}</h4>
    </div>
  )
}

export default Story