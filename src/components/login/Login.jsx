import React, { useState } from 'react'
import './login.css'
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, addDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase'
// import upload from '../../lib/upload.js';
// import uploadToCloudinary from '../../lib/cloudinary';

function Login() {
    const [avatar, setAvatar] = useState({file: "", url: ""});
    const [loading, setLoading] = useState(false);   
    
    function fileHandler(e){
        setAvatar("");
        const file = e.target.files[0];
        const name = file.name;
        
        if(!name.endsWith(".jpg") && !name.endsWith(".jpeg") && !name.endsWith(".png")){
            toast.error("not valid format");
            
            setAvatar("");
            return;
        }

        setAvatar({
            file: file,
            url: URL.createObjectURL(file)
        });
        toast.success("Uploaded");
    }

    const signInHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const {email, password} = Object.fromEntries(formData);

        try {
            await signInWithEmailAndPassword(auth, email, password);

            toast.success("Signed In successfully");

        } catch (error) {
            console.log(error);
            
            toast.error("User not found", error)
        }
        finally{
            setLoading(false);
        }
    }

    const signUpHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const {username, email, password} = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            
            // console.log("upload 1");
            // const imgURL = await uploadToCloudinary(avatar.url);
            // const imgURL = await upload(avatar.file);
            // console.log("upload 2");

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                // avatar: imgURL,
                id: res.user.uid,
                blocked: [],
            });

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: [],
            });
            
            toast.success("Registration successful");

        } catch (error) {
            console.log(error);
            
            toast.error("Something went wrong!!!")
        }
        finally{
            setLoading(false);
        }
    }

  return (
    <div className='create-account'>
      <div className='login'>
        <h2>Welcome back,</h2>
        <form onSubmit={(e) => signInHandler(e)}>
            <input 
                type='email'
                placeholder='email'
                name='email'>
            </input>
            <input 
                type='password'  
                placeholder='password'
                name='password'>
            </input>
            <button disabled={loading}>{ loading ? "Loading..." : "Sign In" }</button>
        </form>
      </div>

      <div className='separator'>
      </div>

      <div className='signup'>
        <h2>Create Account,</h2>
        <form onSubmit={(e) => signUpHandler(e)}>
            <label htmlFor='file'>
                <img src={avatar.url || './avatar.png'} accept="image/*" alt=''></img>
                Upload an image
            </label>
            <input type='file'
                id='file'
                style={{display: "none"}}
                onChange={fileHandler}>
            </input>
            <input 
                type='text'
                placeholder='username'
                name='username'>
            </input>
            <input 
                type='email'
                placeholder='email'
                name='email'>
            </input>
            <input 
                type='password'  
                placeholder='password'
                name='password'>
            </input>
            
            <button disabled={loading}>{ loading ? "Loading..." : "Sign Up" }</button>
        </form>
      </div>
    </div>
  )
}

export default Login;