import React, { useContext } from 'react'
import {Link, redirect} from 'react-router-dom'
import { useEffect } from 'react'
import { UserContext } from '../../UserContext'
import './blogHeader.css'

const blogHeader = 
  ({ isBlogPage }) => {
    const { userInfo, setUserInfo } = useContext(UserContext);
  
    console.log('isBlogPage (blog.js):', true);
  useEffect(() => {
    fetch('http://localhost:4000/projects/profile' , {
      credentials: 'include', 
    }).then(response => {
     response.json().then(userInfo =>{
       setUserInfo(userInfo);
     })

    });
  }, []);


  function logout() {
    fetch('http://localhost:4000/projects/logout', {
      credentials: 'include',
      method: 'POST',
    })
    .then(response => {
      if (response.ok) {
        // Wenn die Abmeldung erfolgreich war, setze userInfo auf null
        setUserInfo(null);
        
        // Führe den Redirect durch
        window.location.href = 'http://localhost:3000/projects';
      } else {
        // Handle Fehler hier, falls erforderlich
        console.error('Logout fehlgeschlagen');
      }
    })
    .catch(error => {
      // Handle Netzwerkfehler oder andere Ausnahmen hier
      console.error('Fehler beim Logout:', error);
    });
  }

  const username = userInfo?.Username;

  

  return (
    <header className={`blogHeader ${isBlogPage ? 'whiteText' : ''}`} >
            <Link to="/projects" className='ourprojects'>Our Projects</Link>
            <nav className='blogHeader__nav'>
              {username && (
                <>
                <Link to="/projects/create"> Create new post</Link>
                <a onClick={logout}> Logout</a>
                </>
              )}
              {!username &&
              (
                <>
                 <Link to="/projects/login">Login</Link> 
              <Link to="/projects/register">Register</Link>
                </>
              )}
             
            </nav>
          </header>
  )
}

export default blogHeader