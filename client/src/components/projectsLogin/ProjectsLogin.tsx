import React, { useContext } from 'react'
import BlogHeader from '../blogHeader/BlogHeader.tsx'
import { useState } from 'react'
import { Navigate } from 'react-router'
import  './ProjectsLogin.scss'
import { UserContext } from '../../context/UserContext.tsx'


const ProjectsLogin = () => {

const [username, setUsername] = useState("")
const [password , setPassword] = useState("")
const [redirect, setRedirect] = useState(false)
const {userInfo, setUserInfo} = useContext(UserContext)
 
const login = async (e: React.FormEvent): Promise<void> => {
e.preventDefault();
const response = await fetch('http://localhost:4000/projects/login', {
    method: 'POST',
    body: JSON.stringify({username, password}), 
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

if(redirect) {
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
        value={username}
        onChange={e => setUsername(e.target.value)}/>
        
        <input 
        type="password" 
        placeholder='Password'
        value={password}
        onChange={e=> setPassword(e.target.value)}/>
        
        <button className='loginButton'> Login</button>
       </form>

      
        </div>
  )
}

export default ProjectsLogin