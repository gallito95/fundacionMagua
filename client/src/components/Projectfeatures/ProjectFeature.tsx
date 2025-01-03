import React from 'react';
import { Link } from 'react-router-dom';
import  "./ProjectFeature.scss"

const ProjectFeature = ({ title, description, image, link }) => {
  return (
    <article className="grid feature">
      <div className="feature__content" data-aos="fade-left" data-aos-duration="2000">
        <Link to={link}>
          <h3 className="feature__heading" data-aos="zoom-in-up" data-aos-duration="1000">
            {title}
          </h3>
          <div className='feature__flex'>
      <picture  className='feature__picture' data-aos="zoom-in-left" data-aos-duration="2000">
        <img  src={image} alt="Project visual" />
      </picture>
          <p className="feature__content" dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default ProjectFeature;