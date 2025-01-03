import React from 'react'
import './Hero.scss'
import Factpanel from '../factPanel/FactPanel.tsx'


const Hero = () => {
  return (
    <div className='heroContainer'>
    <section className="block block--dark block--skewed-left hero">
      <img/>
      <div className="container grid grid--1x2">
        <header className="block__header hero__content">
          <h2 data-aos="fade-right" data-aos-duration="2000" id="hero__heading" className=" block__heading " >   Conservation and Restoration </h2>
           
          <h1 id="hero__tagline" className=" hero__tagline" data-aos="fade-left" data-aos-duration="2500">
          of Dominican's Republic natural resources
          </h1>
        </header>
      </div>
      <Factpanel/>
    </section>
    </div>
  )
}

export default Hero