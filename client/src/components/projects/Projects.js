import React from 'react'
import { Link } from 'react-router-dom'
import ProjectList from '../ProjectList/ProjectList'
import './projects.css'


const Philosophy = () => {


  return (
    <div className="block_filosofia">
      <section className="block container  "id="ourProjects">
        <header className="block__header">
          <h2 className="block_header_headline"> Our Projects</h2>
        </header>
        <ProjectList/>
        <Link to={'/projects'}><h3 className='projectListHeadline'> See all of our current Projects </h3></Link>
       
      </section>
    </div>
  )
}

export default Philosophy