import React from 'react'
import BlogHeader from '../blogHeader/blogHeader'
import { useState } from 'react'
import './projectRegister.css'

export default function RegisterPage() {
 const [Username, setUsername] = useState("")
 const [Password, setPassword] =useState('')
  

 async function register(e) {
 
    e.preventDefault();
  const response = await fetch('http://localhost:4000/projects/register', {
    method: 'POST',
    body: JSON.stringify({Username, Password}), 
    headers: {'Content-type' : 'application/json'}
   });

   if (response.status === 200){
    alert('registration sucessful');
   } else{
    alert('registation failed');
   }

  
 }
  return (
    <div className='projectRegister__Container'>
      <BlogHeader/>
      <form className="form" onSubmit={register}>
        <p> Register</p>
      
        <input type="text" 
                placeholder='Username'
                value={Username} 
                onChange={e => setUsername(e.target.value)}/>
        <input type="password"
               placeholder='Password' 
               value={Password} 
               onChange={e => setPassword(e.target.value)}/>
        
        <button className='loginButton'> Register</button>
       </form>
        </div>
  )
}

