import React from 'react'
import LikeButton from './likebutton'
import "./postcard.css"

const PostCard = ({profilepicture,username,content}) => {
  return (
    <div className='postcard'>
      
        <img src={profilepicture} alt={username} />
        <h2 >{username}</h2>
        <p>{content}</p>
      
      <LikeButton/>
    </div>
  )
}

export default PostCard