import React from 'react'
import './userInfo.css'
import { useUserStore } from '../../../lib/userStore'

const Userinfo = () => {
  const { currentUser } = useUserStore();
  return (
    <div>
      <div className='userinfo'>
        <div className='user'>
          <img src={currentUser.avatar || './avatar.png'}></img>
          <p>{currentUser.username}</p>
        </div>
        <div className='icons'>
          <img src='./more.png'></img>
          <img src='./video.png'></img>
          <img src='./edit.png'></img>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      </div>
    </div>
    
  )
}

export default Userinfo
