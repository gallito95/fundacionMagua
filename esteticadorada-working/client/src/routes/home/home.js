import React from 'react'
import { Outlet } from 'react-router'
import Hero from '../../components/hero/Hero'
import Projects from '../../components/projects/Projects';
import References from '../../components/references/References';
import Donation from '../../components/donation/Donation';
import Footer from '../../components/footer/Footer';
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