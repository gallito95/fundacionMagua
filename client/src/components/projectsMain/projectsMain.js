import React, { useState, useEffect } from 'react';
import {useLocation, Link } from 'react-router-dom';
import ProjectFeature from '../Projectfeatures/ProjectFeature';
import Project3 from '../../images/mangrove1500.webp';
import Project5 from '../../images/unicorn.jpg';
import Project1 from '../../images/project1.jpg';
import axios from 'axios';
import './projectsMain.scss';

const ProjectMain = () => {


  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verwende HTTPS und Port 443 (nicht nötig anzugeben, da es der Standardport ist)
        const res = await axios.get(`https://ecomagua.org/api/posts/`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);


  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <div className="projectsContainer">
      <h2 className="mHeadline">Our Projects</h2>
      <div className="postsM">
      {posts.slice(0, 3).map((post) => (
        <ProjectFeature
          key={post.id}
          title={post.title}
          description={truncateText(post.desc, 400)}
          image={post.img ? `https://ecomagua.org/api/uploads/${post?.img}` : ''}
          link={`/post/${post.id}`}
        />
      ))}
        <div className="see-all-projects">
        <i class="fa-solid fa-arrow-right"></i>
          <Link to="/projects" className="see-all-link">All of our Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
