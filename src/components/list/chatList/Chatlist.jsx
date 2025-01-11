import React, { useEffect, useState } from 'react'
import './chatList.css'
import { useUserStore } from '../../../lib/userStore';
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import AddUser from './AddUser';
import { useChatStore } from '../../../lib/chatStore';

const Chatlist = () => {
  const [chats, setChats] = useState(null);
  const [addMode, setAddMode] = useState(false);
  const [input, setInput] = useState("");
  const { currentUser } = useUserStore();
  const { changeChat } = useChatStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
      const items = res?.data()?.chats;
      
      const promises = items?.map( async (item) => {
        const chatRef = doc(db, "users", item.receiverId);
        const chatSnap = await getDoc(chatRef);
        
        const user = chatSnap?.data();
  
        return {...item, user};
      });

      const chatData = await Promise.all(promises);
 
      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
    });

    return () => unSub();
  }, [currentUser.id]); 
  
  const handleSelect = async (chat) => {
    const userChats = chats.map((item) => {
      const { user, ...rest} = item;
      return rest;
    })

    const chatIndex = userChats.findIndex(
      (item) => item.chatId === chat.chatId
    );

    userChats[chatIndex].isSeen = true;
    
    const userChatsRef = doc(db, "userchats", currentUser.id);
    
    try {
      await updateDoc(userChatsRef, {
        chats: userChats,
      })

      changeChat(chat?.chatId, chat?.user);
    } catch (error) {
      console.log(error);
    }
  }

  const fileterdChats = chats?.filter(
    item => item?.user?.username?.toLowerCase()?.includes(input?.toLowerCase())
  )

  return (
    <div className='chatlist'>
      <div className='search'>
        <div className='searchbar'>
          <img src='./search.png' alt='Q'></img>
          <input type='text' placeholder='search' value={input} onChange={(e) => setInput(e.target.value)}></input>
        </div>  

        <img src={ addMode ? './minus.png' : './plus.png'} alt='+' className='plus'
             onClick={() => setAddMode((prev) => !prev)}>
        </img>
      </div>

      <div className='items'>
        {fileterdChats?.map((chat) => {
          return (
            <div className='item' 
              key={chat?.chatId} 
              onClick={() => handleSelect(chat)}
              style={{ backgroundColor: chat?.isSeen ? 'transparent' : '#5183fe' }}  
            >
              <img src={chat?.avatar || './avatar.png'} alt=''></img>
              <div className='username'>
                <span>{chat?.user.username}</span>
                <p>{chat?.lastMessage}</p>
              </div>
            </div>
          )
        })}
      </div>

      {addMode && <AddUser />}
    </div>
  )
}

export default Chatlist
