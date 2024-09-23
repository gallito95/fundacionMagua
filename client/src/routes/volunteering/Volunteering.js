import './volunteering.css'
import References from '../../components/references/References'
import FoundationImage from '../../images/foundation image.png'
import CoralVolunteering from '../../images/coralVolunteering.jpeg'
import ScubaVolunteering from '../../images/ScubadiveVolunteer.jpeg'

import Footer from '../../components/footer/Footer'



const Volunteering = () => {
    return (
        <div className='services'>
            <h2 className="head__title">Our Volunteer Programms</h2>
         <div className='services__container'>
           <div className='div1'>
           <h2 className="services__title"> Scuba volunteer program:</h2>
         <p className='services__content'> Under the guidance of instructor Sasha, divers will first attend a safety briefing to receive all the necessary information and precautions. After this briefing, they will gear up and proceed to dive from a glass-bottom boat.

During the dive, volunteers will assist in maintaining the coral nurseries and engage in other marine conservation tasks. These important activities include cleaning and repairing coral structures and monitoring underwater ecosystems. At the end of their efforts, participants will be awarded a certificate of recognition for their contributions.
          </p>
       </div>         
       <img  className="services__Image" src={ScubaVolunteering }  alt="not working"/>
      </div>

      <div className='services__container'>
           <div className='div1'>
           <h2 className="services__title">Volunteering for Coral Structure Creation </h2>
         <p className='services__content'> Alongside our technical team, you can help us create coral structures by placing live coral fragments on designs such as domes and stars of various sizes. In this program, you will learn about different coral species, their care, and conservation. Additionally, you will be able to observe how the structures we planted years ago are growing in our Maguá Marine Sanctuary, so you could see the results of this initiative.
          </p>
       </div>         
       <img  className="services__Image" src={CoralVolunteering  }  alt="not working"/>
      </div>
     <References/>
     <Footer />
     </div>
 )
}

export default Volunteering