import './team.css'
import Manuel from '../../images/Manuel.jpeg'
import Adolfo from '../../images/Adolfo.jpeg'
import Fray from '../../images/Fray.jpeg'
import Irene from '../../images/Irene.jpeg'
import Juan from '../../images/Juan.jpeg'
import Maria from '../../images/Maria.jpeg'
import Melfin from '../../images/Melfin.jpeg'
import Rhadames from '../../images/Rhadames.jpeg'
import Sasha from '../../images/Sasha.jpeg'
import Zion from '../../images/Zion.jpeg'
import Cemento from '../../images/Logo_Cemento.png'
import KFC from '../../images/Logo_KFC.png'
import TL from '../../images/Logo_TL.png'

const Team = () => {
    return (
     <div>
        <h2 className='team_Headline'> Our Team</h2>
      <div className='team_Container'>
        <div className='team_Image' >
         <img src={Manuel} />
        </div>
        <div className='team_Image' >
         <img src={Adolfo} />
        </div>
        <div className='team_Image' >
         <img src={Fray} />
        </div>
        <div className='team_Image' >
         <img src={Irene} />
        </div>
        <div className='team_Image' >
         <img src={Juan} />
        </div>
        <div className='team_Image' >
         <img src={Maria} />
        </div>
        <div className='team_Image' >
         <img src={Melfin} />
        </div>
        <div className='team_Image' >
         <img src={Rhadames} />
        </div>
        <div className='team_Image' >
         <img src={Sasha} />
        </div>
        <div className='team_Image' >
         <img src={Zion} />
        </div>
      </div>
      <h2 className='team_Headline'> Our Sponsors</h2>
      <div className='team_Container'>
      <div className='team_Image' >
         <img src={Cemento} />
        </div>
        <div className='team_Image' >
         <img src={KFC} />
        </div>
        <div className='team_Image' >
         <img src={TL} />
        </div>
      </div>
      </div>
    )
}

export default Team