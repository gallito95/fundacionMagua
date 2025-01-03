import React from 'react'
import { Outlet } from 'react-router'
import Hero from '../../components/hero/Hero.tsx'
import Projects from '../../components/projectsMain/projectsMain';
import References from '../../components/references/References';
import Donation from '../../components/donation/Donation.tsx';
import Footer from '../../components/footer/Footer.tsx';
import './home.css'

const home = () => 

{
  return (
    <div className="app">
    <Hero/>
    <Projects/>
    <References/>
    <Donation/>
    <Footer/>
    <Outlet/>
  </div>
    
  )
}

export default home