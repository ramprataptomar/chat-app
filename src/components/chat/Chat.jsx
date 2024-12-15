import React, { useEffect, useRef, useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const chat = () => {
  const [emoji, setEmoji] = useState(false);
  const [text, setText] = useState("");
  
  function addEmojiHandler(e){
    setText(prev => prev.concat(e.emoji));
  }
  function setTextHandler(e){
    setText(e.target.value);
  }

  function sendMeassageHandler(e){
    setText("");
    setEmoji(false);
  }
  
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior: "smooth"});
    console.log(text);
  }, [text])


  return (
    <div className='chat'>
      <div className='top'>
        <div className='chat-profile'>
          <img src='./avatar.png' alt=''></img>
          <div>
            <span>Ramji</span>
            <p>This is my profile.</p>
          </div>
        </div>
        <div className='icons'>
          <img src='./video.png'></img>
          <img src='./phone.png'></img>
          <img src='./info.png'></img>
        </div>
      </div>

      <div className='center'>
        <div className='receiver'>
          <img src='./avatar.png'></img>
          <p>hjgdshfjsdgfdjsgfjhdgsjs</p>
        </div>

        <div className='sender'>
          <p>hjgdshfjsdgfdjsgfjhdgsjs</p>
        </div>

        <div className='receiver'>
          <img src='./avatar.png'></img>
          <p>hjgdshfjsdgfdjsgfjhdgsjs Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sed ut nobis veritatis in, tempore amet ex. Adipisci animi, deleniti quod officia obcaecati repudiandae reprehenderit a voluptates, aliquam repellendus totam.</p>
        </div>

        <div className='sender'>
          <p>hjgdshfjsdgfdjsgfjhdgsjs Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quibusdam impedit aperiam officiis sit amet consequatur ipsa iusto beatae asperiores repellendus, obcaecati hic molestias perspiciatis magnam quia voluptatum, tenetur illo.</p>
        </div>

        <div className='receiver'>
          <img src='./avatar.png'></img>
          <p>hjgdshfjsdgfdjsgfjhdgsjs</p>
        </div>

        <div className='sender'>
          <p>hjgdshfjsdgfdjsgfjhdgsjs</p>
        </div>
        
        <div className='receiver'>
          <img src='./avatar.png'></img>
          <p>hjgdshfjsdgfdjsgfjhdgsjs</p>
        </div>

        <div className='sender'>
          <p>hjgdshfjsdgfdjsgfjhdgsjs</p>
        </div>

        <div className='receiver'>
          <img src='./avatar.png'></img>
          <p>geloooooooooo</p>
        </div>

        <div className='sender'>
          <p>tyyyuyyyyyyyyyyyyyyy</p>
        </div>

        <div className='receiver'>
          <img src='./avatar.png'></img>
          <p>hjgdshfjsdgfdjsgfjhdgsjs</p>
        </div>

        <div className='sender'>
          <p>hjgdshfjsdgfdjsgfjhdgsjs</p>
        </div>

        <div ref={endRef}></div>

      </div>

      <div >
        {emoji && <EmojiPicker width={770} height={350} theme={"dark"} onEmojiClick={addEmojiHandler} />}
      </div>

      <div className='bottom'>
        <img src='./img.png'></img>
        <img src='./camera.png'></img>
        <img src='./mic.png'></img>
        <input 
          type='text'
          placeholder='type a text'
          value={text}
          onChange={setTextHandler}
        ></input>
        <img src='emoji.png' onClick={() => setEmoji(prev => !prev)}></img>
        <button onClick={sendMeassageHandler}>Send</button>
      </div>
    </div>
  )
}

export default chat
