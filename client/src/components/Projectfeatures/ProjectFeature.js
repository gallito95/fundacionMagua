import React from 'react';
import { Link } from 'react-router-dom';



const ProjectFeature = ({ title, description, image, link }) => {


  const truncatedContent = `${description.substring(0, 500)}...`;

  return (
    
    <article className="grid grid--1x2 feature ">
    
        <div className="feature__content" data-aos="fade-left" data-aos-duration="2000">
        <Link to={link}>
          <h3 className="feature__heading" data-aos="zoom-in-up" data-aos-duration="1000">
            {title}
          </h3>
          <p className="feature__content">{truncatedContent}</p>
          </Link>
        </div>
        <picture className='feature__picture' data-aos="zoom-in-left" data-aos-duration="2000">
            <img  src={image} alt="Alt text" />
          </picture>
          
    </article>
  
  );
};

export default ProjectFeature;