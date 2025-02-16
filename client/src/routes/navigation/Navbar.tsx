import { Outlet } from 'react-router'
import React from 'react'
import Logo from '../../Icons/logo.png'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import './navbar.scss'
import { useState } from 'react'


const Navbar  = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
        <nav>
          <div className='nav__container'>
          <a className="nav__brand" href="/"><img src={Logo}  alt="not working"/></a>
         
        
        <p 
        className="nav__content-text"> <span className="nav__context-span"> Fundación </span>Ecológica Maguá</p>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li ><a href="/#donation">Donate</a></li>
          <li>
            <NavLink to="/projects"> Projects</NavLink>
          </li>
          
          <li>
            <NavLink to="/volunteering"> Volunteering </NavLink>
          </li>
          <li>
            <NavLink to="/services"> Services</NavLink>
          </li>
          <li>
              <NavLink to="/about-us"> About us </NavLink>
          </li>
          <li className="nav__itemSocial"><SocialIcon bgColor="rgb(255, 150, 13)"  target="_blank"  style={{ width: '40px', height: '40px' }}  url="https://www.instagram.com/fundacionecologicamagua/" /></li>
        </ul>
        </div>
      </nav>
    <Outlet />
  </header>
  )
}

export default Navbar