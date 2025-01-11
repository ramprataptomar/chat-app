import Detail from "./components/detail/Detail"
import Chat from "./components/chat/Chat"
import List from "./components/list/List"
import Login from "./components/login/Login"
import toast, { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const {currentUser, isLoading, fetchUserInfo} = useUserStore();
  const {chatId} = useChatStore();

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => unSubcribe()// unsubscribe when unmounted

  }, [fetchUserInfo]);

  if(isLoading) return <div className="loading">Loading</div>
  
  return (
    <div className='container'>
      <Toaster position="top-right" reverseOrder={false} />
      {currentUser ? (
        <>
          <List/>
          { chatId && <Chat/> }
          { chatId && <Detail/> }
        </>
      ) : 
        <Login/>}
    </div>
  )
}

export default App;