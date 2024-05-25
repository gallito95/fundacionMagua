import './volunteering.css'
import References from '../../components/references/References'
import FoundationImage from '../../images/foundation image.png'
import Footer from '../../components/footer/Footer'



const Volunteering = () => {
    return (
        <div className='services'>
         
         <div className='services__container'>
           <div className='div1'>
           <h2 className="services__title"> Scuba volunteer program:</h2>
         <p className='services__content'> uided by instructor Sasha, divers will attend safety briefing, get kitted up and scuba dive from the glass bottom boat to volunteer their help maintaining the coral nurseries and other marine conservation field work and receive a certificate of recognition for participating.
          </p>
       </div>         
       <img  className="services__Image" src={FoundationImage }  alt="not working"/>
      </div>

      <div className='services__container'>
           <div className='div1'>
           <h2 className="services__title">Project 2 </h2>
         <p className='services__content'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id justo justo. In metus nulla, sodales at nulla eu, condimentum iaculis eros. Suspendisse ac sapien dolor. Sed congue erat velit, tincidunt dignissim ipsum pellentesque ut. Nam sit amet orci nec lectus sagittis tincidunt. Fusce et dolor libero. Donec blandit pretium neque in commodo. Proin in placerat magna. Nullam gravida varius pharetra. Etiam in lacinia lectus, eu sagittis nulla. Sed eget mauris leo. Morbi a consequat odio.
         Cras nec laoreet dolor. Curabitur ultricies lacus ligula, nec faucibus lectus mattis quis. Maecenas volutpat vestibulum ex, at volutpat metus fermentum vitae. Integer vel ante in nunc ornare hendrerit ac quis mi. Etiam placerat est sit amet condimentum lacinia. Nam pharetra, enim vitae molestie bibendum, magna felis euismod odio, nec ultricies sapien quam in lorem. Duis ac erat id augue pellentesque hendrerit sed et felis. Quisque fermentum tortor arcu.
          </p>
       </div>         
       <img  className="services__Image" src={FoundationImage }  alt="not working"/>
      </div>
     <References/>
     <Footer />
     </div>
 )
}

export default Volunteering