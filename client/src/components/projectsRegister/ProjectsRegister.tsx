import React from 'react'
import BlogHeader from '../blogHeader/BlogHeader.tsx'
import { useState } from 'react'
import './ProjectRegister.scss'

export default function RegisterPage() {
 const [username, setUsername] = useState("")
 const [password, setPassword] =useState('')
  

const register = async (e:React.FormEvent): Promise<void>  => {
 
    e.preventDefault();
  const response = await fetch('http://localhost:4000/projects/register', {
    method: 'POST',
    body: JSON.stringify({username, password}), 
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
                value={username} 
                onChange={e => setUsername(e.target.value)}/>
        <input type="password"
               placeholder='Password' 
               value={password} 
               onChange={e => setPassword(e.target.value)}/>
        
        <button className='loginButton'> Register</button>
       </form>
        </div>
  )
}

