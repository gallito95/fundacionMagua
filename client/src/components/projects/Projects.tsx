import React from 'react'
import { Link } from 'react-router-dom'
import ProjectList from '../ProjectList/ProjectList'
import './Projects.scss'


const Projects = () => {


  return (
    <div className="block_filosofia" id="projects">
      <section className="block container" >
        <header className="block__header">
          <h2 className="block_header_headline"> Our Projects</h2>
        </header>
        <ProjectList/>
        <Link to={'/projects'}><h3 className='projectListHeadline'> See all of our current Projects </h3></Link>
       
      </section>
    </div>
  )
}

export default Projects