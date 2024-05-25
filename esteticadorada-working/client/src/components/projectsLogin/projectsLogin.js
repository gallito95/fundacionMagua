import React, { useContext } from 'react'
import BlogHeader from '../blogHeader/blogHeader'
import { useState } from 'react'
import { Navigate } from 'react-router'
import  './projectsLogin.css'
import { UserContext } from '../../UserContext'

const blogLogin = () => {

const [Username, setUsername] = useState("")
const [Password , setPassword] = useState("")
const [Redirect, setRedirect] = useState(false)
const {setUserInfo} = useContext(UserContext)
 
async function login (e) {
e.preventDefault();
const response = await fetch('http://localhost:4000/projects/login', {
    method: 'POST',
    body: JSON.stringify({Username, Password}), 
    headers: {'Content-type' : 'application/json'},
    credentials: 'include', //cookies speichern
   });
   if(response.ok) {
    response.json().then(userInfo => {
      setUserInfo(userInfo)

      setRedirect(true);
    })
  
   }
   else{
    alert('wrong credentials')
   }
}

if(Redirect) {
  return <Navigate to={'/projects'} />
}

return (
    
    <div className='login__Container'>
      <BlogHeader/>
      <form className="form" onSubmit={login}>
      <p> Login</p>
      
        <input 
        type="text" 
        placeholder='Username'
        value={Username}
        onChange={e => setUsername(e.target.value)}/>
        
        <input 
        type="password" 
        placeholder='Password'
        value={Password}
        onChange={e=> setPassword(e.target.value)}/>
        
        <button className='loginButton'> Login</button>
       </form>

      
        </div>
  )
}

export default blogLogin