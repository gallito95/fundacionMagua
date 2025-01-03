import React from 'react'
import './AboutUs.scss'
import Footer from '../../components/footer/Footer.tsx'
import Team from '../../components/team/team'
import FoundationImage from '../../images/foundation image.png'
const AboutUS = () => {


  return (
 
    <form data-aos="fade-right" data-aos-duration="2000" >
    <h2 className="aboutUS__title">The Foundation</h2>
    <div className='aboutUS__container' >
    <img  className="aboutUS__image" src={FoundationImage }  alt="not working"/>
      <p className='aboutUS__content'>
      The Magua Ecological Foundation is a social, educational and scientific organization 
    of Dominican nationality that carry out the management of natural resources through 
    self-sustainable programs that enhance the preservation and conservation of the native
     environment and wildlife in partnership with the Dominican Republic’s government. <br />  <br />
     The Foundation also aims to promote the integration of the local communities with 
     mother nature in order to promote a sustainable development, stimulating productive 
     sectors that depend on the environment and its resources. The organization currently develops environmental 
     projects in three regions of the island, 
     cooperating with other organizations in the east and southeast, and leading projects
    in Sosua, Costambar and Punta Rucia.
     
     </p>
     </div>

    <Team/>
    <Footer/>
      </form>
     
   
  )
}

export default AboutUS