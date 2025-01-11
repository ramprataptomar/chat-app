import { create } from 'zustand'
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,

  fetchUserInfo: async (uid) => {
    if(!uid) return set( { currentUser: null, isLoading: false } );

    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        console.log('No such document!');
        set( { currentUser: null, isLoading: false } );
        return;
      }

      set( { currentUser: docSnap.data(), isLoading: false } );

    } catch (error) {
      console.error(error);
      set( { currentUser: null, isLoading: false } );
    }
  }

}))
