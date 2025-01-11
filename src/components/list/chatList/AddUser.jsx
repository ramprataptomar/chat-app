import React, { useState } from 'react'
import './addUser.css'
import { arrayUnion, collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import toast from 'react-hot-toast';
import { useUserStore } from '../../../lib/userStore';

const AddUser = () => {
    const [user, setUser] = useState(null);
    const {currentUser} = useUserStore();

    const handleSearch = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");

        try {
            const userRef = collection(db, "users");
            
            const q = query(userRef, where("username", "==", username));

            const querySnapshot = await getDocs(q);
 
            if(!querySnapshot.empty){
                setUser(querySnapshot.docs[0].data());
            }
            else{
              toast.error("No user found!!!");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const addUserHandler = async () => {
      const chatRef = collection(db, "chats");
      const userChatsRef = collection(db, "userchats");

      try {
        const newChatRef = doc(chatRef);

        await setDoc(newChatRef, {
          createdAt: serverTimestamp(),
          messages: [],
        });
        
        await updateDoc(doc(userChatsRef, user.id), {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: "",
            receiverId: currentUser.id,
            updatedAt: Date.now(),
          }),
        });

        await updateDoc(doc(userChatsRef, currentUser.id), {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: "",
            receiverId: user.id,
            updatedAt: Date.now(),
          }),
        });

      } catch (error) {
        console.log(error);
      }
      finally{
        setUser(null);
        toast.success("User added successfully!");
      }
    }

  return (
    <div className='addUser-container'>
      <form className='search' onSubmit={handleSearch}>
        <input type='text' placeholder='search' name='username'></input>
        <button>Search</button>
      </form>

      {user && <div className='user'>
        <div className='detail'>
            <img src={user.avatar || './avatar.png'}></img>
            <p>{user.username}</p>
        </div>
        <button onClick={addUserHandler}>Add</button>
      </div>}
    </div>
  )
}

export default AddUser
