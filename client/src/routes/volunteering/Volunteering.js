import './volunteering.scss'
import References from '../../components/references/References.tsx'
import CoralVolunteering from '../../images/coralVolunteering.jpeg'
import ScubaVolunteering from '../../images/ScubadiveVolunteer.jpg'

import Footer from '../../components/footer/Footer.tsx'



const Volunteering = () => {
    return (
        <div className='volunteering'>
            <h2 className="volunteering__mainTitle">Our Volunteer Programms</h2>
         <div className='volunteering__container'  data-aos="flip-left" data-aos-duration="2000"> 
         <img  className="volunteering__image" src={ScubaVolunteering }  alt="not working"/>
           
           <div className='volunteering__content'> 
           <h2 className="volunteering__title"> Scuba volunteer program:</h2>
         <p > Under the guidance of instructor Sasha, divers will first attend a safety briefing to receive all the necessary information and precautions. After this briefing, they will gear up and proceed to dive from a glass-bottom boat.

During the dive, volunteers will assist in maintaining the coral nurseries and engage in other marine conservation tasks. These important activities include cleaning and repairing coral structures and monitoring underwater ecosystems. At the end of their efforts, participants will be awarded a certificate of recognition for their contributions.
          </p>
          </div>      
      </div>

      <div className='volunteering__container'  data-aos="flip-right" data-aos-duration="2000">
      <img  className="volunteering__image" src={CoralVolunteering  }  alt="not working"/>
           <div className='volunteering__content'>
           <h2 className="volunteering__title">Volunteering for Coral Structure Creation </h2>
         <p > Alongside our technical team, you can help us create coral structures by placing live coral fragments on designs such as domes and stars of various sizes. In this program, you will learn about different coral species, their care, and conservation. Additionally, you will be able to observe how the structures we planted years ago are growing in our Maguá Marine Sanctuary, so you could see the results of this initiative.
          </p>       
          </div>
      </div>
     <References className="transparent-background" />
     <Footer />
     </div>
 )
}

export default Volunteering