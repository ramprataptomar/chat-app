import React from 'react'
import './detail.css'
import { auth, db } from '../../lib/firebase'
import { useChatStore } from '../../lib/chatStore'
import { useUserStore } from '../../lib/userStore'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Detail = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if(!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      })
      changeBlock();
    } catch (error) {
      console.log(error);
      
    }
    console.log('Block user clicked');
  }

  return (
    <div className='detail'>
      <div className='chat-profile'>
        <img src={ user?.avatar || './avatar.png'}></img>
        <span>{user?.username}</span>
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

        <button className='block-user' onClick={handleBlock}>
          {isCurrentUserBlocked ? "You are Blocked!" : isReceiverBlocked ? "User blocked": "Block user"}
        </button>
        <button className='log-out' onClick={() => auth.signOut()}>Log out</button>
      </div>
    </div>
  )
}

export default Detail
