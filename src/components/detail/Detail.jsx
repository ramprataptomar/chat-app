import React from 'react'
import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className='chat-profile'>
        <img src='./avatar.png'></img>
        <span>Jane Doe</span>
        <p>lorem ipsum dolor sit</p>
      </div>

      <div className='setting'>
        <div className='chat-setting'>
          <div className='head-bar'>
              <span>Chat settings</span>
              <img src='./arrowDown.png'></img>
          </div>
        </div>

        <div className='privacy&help'>
          <div className='head-bar'>
              <span>Privacy & help</span>
              <img src='./arrowDown.png'></img>
          </div>
        </div>

        <div className='shared-photo'>
          <div className='head-bar'>
            <span>Shared photo</span>
            <img src='./arrowDown.png'></img>
          </div>
          <div className="grid-container">
            <img src='./avatar.png'></img>
            <img src='./avatar.png'></img>
            <img src='./avatar.png'></img>
            <img src='./avatar.png'></img>
          </div>
        </div>

        <button className='block-user'>Block user</button>
        <button className='log-out'>Log out</button>
      </div>
    </div>
  )
}

export default Detail
