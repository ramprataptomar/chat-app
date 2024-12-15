import React, { useState } from 'react'
import './login.css'

function Login() {
    const [avatar, setAvatar] = useState({
        file: "",
        url: ""
    })

    function fileHandler(e){
        const file = e.target.files[0];
        const extensions = [".jpg", ".jpeg", ".png"];

        console.log(file);
        for(let i in extensions){
            if(file?.name?.endsWith(i)){
                setAvatar({
                    file: file,
                    url: URL.createObjectURL(file)
                });
                return;
            }
        }
        
        alert("file is not of valid format")
        setAvatar("");
    }

  return (
    <div className='create-account'>
      <div className='login'>
        <h2>Welcome back,</h2>
        <form>
            <input 
                type='email'
                placeholder='Email'
                name='email'>
            </input>
            <input 
                type='password'  
                placeholder='password'
                name='password'>
            </input>
            <button>Sign In</button>
        </form>
      </div>

      <div className='separator'>
      </div>

      <div className='signup'>
        <h2>Create Account,</h2>
        <form>
            <input 
                type='text'
                placeholder='Username'
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
            <label htmlFor='file'>
                {   avatar.url 
                    ? <img src={avatar.url} accept="image/*"></img> 
                    : <img src='./avatar.png'></img>
                }
                <input 
                    type='file'
                    name='file'
                    onChange={fileHandler}>
                </input>
            </label>
            
            <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Login;