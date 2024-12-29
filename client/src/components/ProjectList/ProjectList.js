import { React, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import '../ProjectList/projectList.scss';
import Project3 from '../../images/mangrove1500.webp';
import Project5 from '../../images/unicorn.jpg';
import Project1 from '../../images/project1.jpg';

const ProjectList = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://ecomagua.org/api/posts/${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  

  // Funktion zum Kürzen des Texts auf 300 Zeichen
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <div className="home">
      <div className="posts" >
        {posts.map((post) => (
          <div className="post" key={post.id} data-aos="flip-left" data-aos-duration="1500">
            <div className="projectListcontent">
              <Link className="link" to={`/post/${post.id}`}>
                <h1 className='projects__title'>{post.title}</h1>
                {post.img &&  <img src={`https://ecomagua.org/api/uploads/${post?.img}`} alt="" />}
              </Link>
              <p className="projects__content" dangerouslySetInnerHTML={{ __html: truncateText(post.desc, 500) }}></p>
         
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
