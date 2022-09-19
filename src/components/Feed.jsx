import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post 
        profilePic={'https://media-exp1.licdn.com/dms/image/C4D03AQHq_qW1JFLeDg/profile-displayphoto-shrink_200_200/0/1612823208191?e=1652918400&v=beta&t=mrVaazeWZ3qmb-1DSo7I-wsOOXrlDnedsEoQQfiMhpQ'}
        message={'This WORKS!'}
        timestamp={'This is timestamp'}
        username={'Milagros Ribas'}
        image={'https://previews.123rf.com/images/annaav/annaav1712/annaav171200284/92171118-ni%C3%B1a-jugando-con-un-perro-jack-russell-terrier-en-la-naturaleza-d%C3%ADa-de-verano.jpg'}
        />
        <Post />
        <Post />
    </div>
  )
}

export default Feed