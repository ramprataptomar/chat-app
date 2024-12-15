import React, { useState } from 'react'
import './chatList.css'

const Chatlist = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className='chatlist'>
      <div className='search'>
        <div className='searchbar'>
          <img src='./search.png' alt='Q'></img>
          <input type='text' placeholder='search'></input>
        </div>  

        <img src={ addMode ? './minus.png' : './plus.png'} alt='+' className='plus'
             onClick={() => setAddMode((prev) => !prev)}>
        </img>
      </div>

      <div className='items'>
        <div className='item'>
          <img src='./avatar.png' alt=''></img>
          <div className='username'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className='item'>
          <img src='./avatar.png' alt=''></img>
          <div className='username'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className='item'>
          <img src='./avatar.png' alt=''></img>
          <div className='username'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className='item'>
          <img src='./avatar.png' alt=''></img>
          <div className='username'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className='item'>
          <img src='./avatar.png' alt=''></img>
          <div className='username'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className='item'>
          <img src='./avatar.png' alt=''></img>
          <div className='username'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className='item'>
          <img src='./avatar.png' alt=''></img>
          <div className='username'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className='item'>
          <img src='./avatar.png' alt=''></img>
          <div className='username'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className='item'>
          <img src='./avatar.png' alt=''></img>
          <div className='username'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className='item'>
          <img src='./avatar.png' alt=''></img>
          <div className='username'>
            <span>John Doe</span>
            <p>Hello</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Chatlist
