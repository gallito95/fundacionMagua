import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from '../../components/footer/Footer';
import './services.css'
import FoundationImage from '../../images/foundation image.png'

const Services = () => {

  return (
         <div className='services'>
           <h2 className="services__title"> Ecotourism: </h2>
          
          <div className='services__container'>
         
            <div className='div1'>           
            <div className="services__content">
              <h3 className='services__content--headline'> Coral restoration and snorkel/glass bottom boat experience</h3>
               <p> Visitors are afforded the unique chance to attach coral micro fragments onto a structure that guides them to the coral nursery situated within the marine sanctuary of Sosúa Bay. Following this engaging activity, guests can partake in snorkeling adventures or opt to board the glass-bottom boat, allowing them to leisurely observe the vibrant reef ecosystem and interact with the diverse marine wildlife meticulously safeguarded by the foundation. Moreover, our program includes a captivating excursion to behold the grandeur of the Caribbean's largest underwater statue, Ata Bey, an awe-inspiring representation of the Taino deity embodying water and fertility.
               </p>
            </div>
           
        
        </div>         
        <img  className="services__Image" src={FoundationImage }  alt="not working"/>
       </div>

       <div className='services__container'>
         
            <div className='div1'>           
            <div className="services__content">
               <h3 className='services__content--headline'> Scuba Dive Courses</h3>
               <p> Embark on a transformative journey by becoming a certified PADI Open Water Diver or experiencing the exhilarating Dive with PADI Discover Scuba program. Delve into the depths of the ocean and unlock a world of wonders beneath the surface. With the PADI Open Water Diver certification, individuals gain the skills and knowledge essential for exploring underwater realms with confidence and safety. Alternatively, the Dive with PADI Discover Scuba program offers a thrilling introduction to the captivating art of scuba diving, allowing participants to immerse themselves in the beauty of the underwater world under the guidance of seasoned professionals.

Upon achieving certification, divers are welcomed to join our esteemed Scuba Volunteer Program, where they can contribute to marine conservation efforts and actively participate in initiatives aimed at preserving our precious underwater ecosystems. Through hands-on involvement in research, rehabilitation, and habitat restoration projects, volunteers play a vital role in safeguarding marine life and promoting sustainable practices within our oceans. Join us in making a positive impact on the environment while embarking on unforgettable diving adventures that leave a lasting impression on both heart and soul.</p>  {/*link to volunteer*/}
            </div>
           
        
        </div>         
        <img  className="services__Image" src={FoundationImage }  alt="not working"/>
       </div>

       <h2 className="services__Maintitle"> Environmental consulting: </h2>

       <div className='services__container'>
            <div className='div1'>
            <h2 className="services__title"> Environmental consulting: </h2>
          <p className='services__content'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo justo. In metus nulla, sodales at nulla eu, condimentum iaculis eros. Suspendisse ac sapien dolor. Sed congue erat velit, tincidunt dignissim ipsum pellentesque ut. Nam sit amet orci nec lectus sagittis tincidunt. Fusce et dolor libero. Donec blandit pretium neque in commodo. Proin in placerat magna. Nullam gravida varius pharetra. Etiam in lacinia lectus, eu sagittis nulla. Sed eget mauris leo. Morbi a consequat odio.
          Cras nec laoreet dolor. Curabitur ultricies lacus ligula, nec faucibus lectus mattis quis. Maecenas volutpat vestibulum ex, at volutpat metus fermentum vitae. Integer vel ante in nunc ornare hendrerit ac quis mi. Etiam placerat est sit amet condimentum lacinia. Nam pharetra, enim vitae molestie bibendum, magna felis euismod odio, nec ultricies sapien quam in lorem. Duis ac erat id augue pellentesque hendrerit sed et felis. Quisque fermentum tortor arcu.
           </p>
        </div>         
        <img  className="services__Image" src={FoundationImage }  alt="not working"/>
       </div>
       
       <div className='services__container'>
            <div className='div1'>
            <h2 className="services__title"> Reforestation: </h2>
          <p className='services__content'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo justo. In metus nulla, sodales at nulla eu, condimentum iaculis eros. Suspendisse ac sapien dolor. Sed congue erat velit, tincidunt dignissim ipsum pellentesque ut. Nam sit amet orci nec lectus sagittis tincidunt. Fusce et dolor libero. Donec blandit pretium neque in commodo. Proin in placerat magna. Nullam gravida varius pharetra. Etiam in lacinia lectus, eu sagittis nulla. Sed eget mauris leo. Morbi a consequat odio.
          Cras nec laoreet dolor. Curabitur ultricies lacus ligula, nec faucibus lectus mattis quis. Maecenas volutpat vestibulum ex, at volutpat metus fermentum vitae. Integer vel ante in nunc ornare hendrerit ac quis mi. Etiam placerat est sit amet condimentum lacinia. Nam pharetra, enim vitae molestie bibendum, magna felis euismod odio, nec ultricies sapien quam in lorem. Duis ac erat id augue pellentesque hendrerit sed et felis. Quisque fermentum tortor arcu.
           </p>
        </div>         
        <img  className="services__Image" src={FoundationImage }  alt="not working"/>
       </div>

          
      <Footer />
      </div>
  )
}

export default Services;