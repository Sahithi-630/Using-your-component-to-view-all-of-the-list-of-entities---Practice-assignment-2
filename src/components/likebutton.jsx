import React, { useState } from 'react'

const LikeButton = () => {
    const [like,setLike] = useState(false);

    const toggleLike = ()=>{
        setLike(!like)
        count+=1

    }
  return (
    <div>
      <button onClick={toggleLike} style={{backgroundColor:like?"red":"gray"}}>
        {like?"liked":"like"}
      </button>
    </div>
  )
}

export default LikeButton