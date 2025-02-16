import React from 'react'
import { useContext } from 'react'
import './projects.scss'
import { AuthContext } from '../../context/AuthContext.tsx'
import { Route, Routes } from 'react-router-dom'
import ProjectList from '../../components/ProjectList/ProjectList.tsx'
import BlogHeader from '../../components/blogHeader/BlogHeader.tsx'
import Footer from '../../components/footer/Footer.tsx'


const blog = () => {
  const { currentUser, setCurrentUser, logout } = useContext(AuthContext);
  


  return (
    <Routes>
      <Route index element={
        <main>
           <div className='userFeatures'> {currentUser? <><a className='logout' onClick={logout}> Logout</a>
           <a href='/projects/create'> Create new Post</a></> :  <a href="/login"> Login</a> }
           </div>
          <BlogHeader/>
          <ProjectList/>
          <Footer/>
        </main>
      } />
    </Routes>

  )
}

export default blog