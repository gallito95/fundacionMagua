import React, { useContext, useEffect, useState } from "react";
import BlogHeader from "../blogHeader/BlogHeader.tsx";
import { AuthContext } from "../../context/authContext.js";
import { useLocation, useNavigate } from "react-router";
import './PostPage.scss'
import axios from "axios"

type Post = {
  title: string;
  desc: string;
  img: string;

}

const Postpage = () => {
  const [post, setPost] = useState<Partial<Post>>({})
  const { currentUser } = useContext(AuthContext);


  const location = useLocation()
  const navigate = useNavigate()

  const postID = location.pathname.split("/")[2]
  console.log(postID)

  const handleEdit =  async () => {
    navigate("/projects/edit/", { state: post });

  }

  const handleDelete = async () => {
    try{
      await axios.delete(`https://ecomagua.org/api/posts/${postID}`)
      navigate("/projects")
     }catch(err){
       console.log(err)
     }
  }

  
 
  useEffect(() => {
     const fetchData = async () => {
      try{
       const res = await axios.get(`https://ecomagua.org/api/posts/${postID}`)
       setPost(res.data)
      }catch(err){
        console.log(err)
      }
     };
     fetchData();
  }, [postID])

  console.log(post.img)
  
  
  return (
    <div className="post-page">
  <BlogHeader/>
  <h2 className="head__title">{post.title}</h2>
 
    <div className="image">
    <img src={`https://ecomagua.org/api/uploads/${post?.img}`} alt="Post Image" />

      </div>
       <div>
   {currentUser && currentUser.id ? (
  <div className="edit"> 
    <button className="postButton" onClick={handleEdit}> edit </button>
    <button className="postButton" onClick={handleDelete}> delete</button>
  </div>
) : null}

    </div>
  
    <div className="postPagecontent">
      <p dangerouslySetInnerHTML={{ __html: post.desc || "" }}></p>
      </div>
   </div>
  );
}
export default Postpage