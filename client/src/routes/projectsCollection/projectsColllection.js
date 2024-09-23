import React, { useEffect , useState} from 'react'
import './projecrsCollection.css'
import Header from '../../components/blogHeader/blogHeader'
import Post from '../../components/blogPost/blogPost'
import { Route, Routes } from 'react-router-dom'
import ProjectList from '../../components/ProjectList/ProjectList'


const blog = () => {
  // const [posts, setPosts] = useState([])
  // useEffect(() => {
  //  fetch 
  // ('http://localhost:4000/projects/post').then(
  //   response => {
  //   response.json().then(posts => {
  //    setPosts(posts);
  //   });
  // });
  // }, []);
  

  return (
    <Routes>
      <Route index element={
        <main>
          <Header />
          <ProjectList/>
          {/* {posts.length > 0 && posts.map(post => (
            <Post {...post}/>
  ))} */}

        
        </main>
      } />


    </Routes>

  )
}

export default blog