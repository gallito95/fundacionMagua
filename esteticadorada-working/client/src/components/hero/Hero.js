import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <section className="block block--dark block--skewed-left hero">
      <div className="container grid grid--1x2">
        <header className="block__header hero__content">
          <h2 data-aos="fade-right" data-aos-duration="2000" id="hero__heading" className="headinghero block__heading " >  Conservación y Restauración </h2>
           
          <h1 id="hero__tagline" className=" hero__tagline animate-character" data-aos="fade-left" data-aos-duration="2500">
          de los recursos naturales dominicanos
          </h1>
          {/* <button className="btn btn--accent btn--stretched btn--hero" > <a href="#servicios" className="btn__a" >Comienza!</a></button> */}
        </header>   
      </div>
    </section>
  )
}

export default Hero