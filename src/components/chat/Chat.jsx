import React, { useEffect, useRef, useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';
import { useUserStore } from '../../lib/userStore';

const chat = () => {
  const [emoji, setEmoji] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState();

  const { user, chatId, isCurrentUserBlocked, isReceiverBlocked } = useChatStore();
  const {currentUser} = useUserStore();
  
  function addEmojiHandler(e){
    setText(prev => prev.concat(e.emoji));
  }
  function setTextHandler(e){
    setText(e.target.value);
  }

  async function sendMeassageHandler(e){

    if (text == "") return; 
    
    try {
      await updateDoc(doc(db, "chats", chatId), { 
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
        })
      });

      const userIds = [currentUser.id, user.id];

      userIds.forEach( async (id) => {
        const userChatsRef = doc(db, "userchats", currentUser.id);
        const userChatsSnapshot = await getDoc(userChatsRef)

        if(userChatsSnapshot.exists()){
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId
          );

          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });

    }
    catch (err) { 
           console.log(err);
    }
    finally{
      setText("");
    }
  }
  
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior: "smooth"});
  }, [text])

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    }
  }, [chatId]);
  
  return (
    <div className='chat'>
      <div className='top'>
        <div className='chat-profile'>
          <img src='./avatar.png' alt=''></img>
          <div>
            <span>{user?.username}</span>
            <p>This is {user?.username} profile.</p>
          </div>
        </div>
        <div className='icons'>
          <img src='./video.png'></img>
          <img src='./phone.png'></img>
          <img src='./info.png'></img>
        </div>
      </div>

      <div className='center'>
        { chat?.messages.map((message, index) => (
            <div 
              key={index} 
              className={`${message.senderId === currentUser.id ? 'sender' : 'receiver'}`}
            >
              { message.senderId !== currentUser.id && <img src='./avatar.png'></img>}
              <p>{message.text}</p>
            </div>
          ))
        }

        <div ref={endRef}></div>
      </div>

      <div >
        {emoji && <EmojiPicker width={770} height={350} theme={"dark"} onEmojiClick={addEmojiHandler} disabled={isCurrentUserBlocked || isReceiverBlocked}/>}
      </div>

      <div className='bottom'>
        <img src='./img.png'></img>
        <img src='./camera.png'></img>
        <img src='./mic.png'></img>
        <input 
          type='text'
          placeholder={ isCurrentUserBlocked || isReceiverBlocked ? "you can not type a message " : "type a text"}
          value={text}
          onChange={setTextHandler}
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        ></input>
        <img src='emoji.png' onClick={() => setEmoji(prev => !prev)}></img>
        <button onClick={sendMeassageHandler} disabled={isCurrentUserBlocked || isReceiverBlocked}>Send</button>
      </div>
    </div>
  )
}

export default chat
