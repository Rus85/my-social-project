import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

  return (

    <div className={s.item}>
      <img src='https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg' />
      {props.message}

      <div>
        <span>like</span>
        {props.like}
      </div>
    </div>

  )
}


export default Post;