import React, { useContext } from 'react'
import {Link, redirect} from 'react-router-dom'
import { useEffect } from 'react'

import './blogHeader.scss'

const blogHeader = () => {
    

  return (
    <header >
            <div className='blogHeaderContainer'>
             <div className='categoryContainer'>
            <h3>Categories:</h3>
            <div className="blogLinkContainer">
            <Link to="/projects/"> All </Link>
            <Link to="/projects/?cat=education"> Education </Link>
            <Link to="/projects/?cat=mangrove"> Mangrove</Link>
            <Link to="/projects/?cat=scuba">Scuba Diving</Link>
            <Link to="/projects/?cat=unicorn">Project Unicorn</Link>
            <Link to="/projects/?cat=corals">Corals</Link>
            <Link to="/projects/?cat=other">Other</Link>
            </div>
            </div>
            </div>
           
          </header>
  )
}

export default blogHeader