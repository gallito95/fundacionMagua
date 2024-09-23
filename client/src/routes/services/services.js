import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from '../../components/footer/Footer';
import './services.css'
import ScubadiveCourses from '../../images/ScubadiveCourses.jpeg'
import CoralReforestation from '../../images/coralReforestation.jpeg'
import EnviromentalConsulting from '../../images/enviromentalConsulting.jpeg'
import Reforestation from '../../images/reforestation.jpeg'

const Services = () => {

  return (
         <div className='services'>
           <h2 className="services__Maintitle"> Ecotourism: </h2>
          
          <div className='services__container'>
         
            <div className='div1'>           
            <div className="services__content">
              <h3 className='services__title'> Coral restoration and snorkel/glass bottom boat experience</h3>
               <p> Visitors are afforded the unique chance to attach coral micro fragments onto a structure that guides them to the coral nursery situated within the marine sanctuary of Sosúa Bay. Following this engaging activity, guests can partake in snorkeling adventures or opt to board the glass-bottom boat, allowing them to leisurely observe the vibrant reef ecosystem and interact with the diverse marine wildlife meticulously safeguarded by the foundation. Moreover, our program includes a captivating excursion to behold the grandeur of the Caribbean's largest underwater statue, Ata Bey, an awe-inspiring representation of the Taino deity embodying water and fertility.
               </p>
            </div>
           
        
        </div>         
        <img  className="services__Image" src={CoralReforestation}  alt="not working"/>
       </div>

       <div className='services__container'>
         
            <div className='div1'>           
            <div className="services__content">
               <h3 className='services__title title_special'> Scuba Dive Courses</h3>
               <p> Embark on a transformative journey by becoming a certified PADI Open Water Diver or experiencing the exhilarating Dive with PADI Discover Scuba program.  With the PADI Open Water Diver certification, individuals gain the skills and knowledge essential for exploring underwater realms with confidence and safety. Alternatively, the Dive with PADI Discover Scuba program offers a thrilling introduction to the captivating art of scuba diving, allowing participants to immerse themselves in the beauty of the underwater world under the guidance of seasoned professionals.

Upon achieving certification, divers are welcomed to join our esteemed Scuba Volunteer Program, where they can contribute to
 marine conservation efforts and actively participate in initiatives aimed at preserving our precious underwater ecosystems. Join us in making a positive impact on the environment while embarking on unforgettable diving adventures that leave a lasting impression on both heart and soul.</p>  {/*link to volunteer*/}
            </div>
           
        
        </div>         
        <img  className="services__Image" src={ScubadiveCourses }  alt="not working"/>
       </div>

       <h2 className="services__Maintitle"> Environmental consulting: </h2>

       <div className='services__container'>
            <div className='div1'>
            <h2 className="services__title"> Environmental consulting: </h2>
          <p className='services__content'> 
          We provide technical advisory services to organizations working on the conservation and adaptation of coastal and marine natural resources. Additionally, we conduct technical visits to identify opportunities and improvements in coral reproduction projects and seabed regeneration. Some of our flagship projects are in collaboration with Bávaro Reefs on the eastern coast of the country, the AMALO project in the south in Boca Chica, and the AMALO project in the north in Costambar and Punta Rucia.
           </p>
        </div>         
        <img  className="services__Image" src={EnviromentalConsulting }  alt="not working"/>
       </div>
       
       <div className='services__container'>
            <div className='div1'>
            <h2 className="services__title"> Reforestation: </h2>
          <p className='services__content'> We conduct mangrove forest planting sessions with the Sosua community. In the El Tablón area of Sosua, we have a nursery equipped for the assisted reproduction of various mangrove species, especially the endangered red mangrove. These planting sessions are carried out in collaboration with schools, organizations, and community volunteers. These mangrove planting sessions help the Sosua coastal ecosystem adapt to climate change, as these forests serve as natural barriers against strong hurricanes and storms.
           </p>
        </div>         
        <img  className="services__Image" src={Reforestation }  alt="not working"/>
       </div>

          
      <Footer />
      </div>
  )
}

export default Services;