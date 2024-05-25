import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import Women1 from '../../images/women1.jpg'
import Women2 from '../../images/women2.jpg'
import Men1 from '../../images/men3.jpg'
import Men2 from '../../images/men4.jpg'
import "./references.css"

const References = () => {

  const carList = [
    {
      id: 1,
      name: "Maria Laura",
      img:
        Women1,
      info: "Volunteering at Fundación Ecológica Maguá was enriching. Manuel, the founder, generously shares knowledge. The team's dedication to the environment is evident. The experience was enjoyable, promising, and educational. I highly recommend volunteering with them.",
    },
    {
      id: 2,
      name: "Julia Ford",
      img:
        Women2,
      info: "Volunteering with Fundacion Ecologica Maguá was the most 'real' experience I have ever had, they are doing so many great things and it felt so rewarding to be part of their projects. I enjoyed every minute of my stay and looking foward to come back soon",
    },
    {
      id: 3,
      name: "Rosario",
      img:
        Men1,
     info: "Fundación Ecológica Maguá welcomed my son with limited mobility warmly, showcasing their marine lab and explaining our country's ecosystem. He enjoyed the coral restoration project and received a certificate. Grateful for Manuel and his team's care and efforts."
    },
    { 
      id: 4,
      name: "Xi Yun",
      img:
        Men2,
     info: "we made 'coral cakes ' with micro fragments of corals that were rescued and treated for a coral disease, we placed them in the ocean nursery where they will fuse into a mature coral colony and reproduce. So proud to be a 'coral dad'"
    },
  ];



    // List of all cars satisfing all the filters
  const [filteredList, setFilteredList] = useState(carList);
  const [currentItem,setCurrentItem] = useState(1)



  // set starting item





function nextPerson(){
  if(currentItem < 4){
    setCurrentItem(currentItem => currentItem +1)
  }
  else{
    setCurrentItem(1)
  }
}

function previousPerson(){
  if(currentItem > 1){
    setCurrentItem(currentItem => currentItem-1)
  }
  else{
    setCurrentItem(4)
  }
  
}



    return (
      <section className="block   block-showcase">
      <header className="block__header" >
        <h2 className="block__headline "id="referencias">Volunteer References</h2>
      </header>
      <div className="container">
        <div className="card testimonial">
       
        {filteredList.filter(item => item.id === currentItem).map((item, index) => (
           <div className="grid grid--1x2" key={index}>
            <div className="testimonial__image">
            <img  src={item.img} alt="car-img" />
             <span className="icon-container icon-container--accent">
                <svg className=" icon--small">
                <FontAwesomeIcon icon={faQuoteLeft} />
                </svg>
              </span>
            </div>
            <blockquote className="quote">
            <p className="quote__text">{item.info}</p>
            <footer>
                <div className="media media__reference">
                  <div className="media__image">
                    <svg className="icon icon--primary quote__line">
                      <FontAwesomeIcon icon={faMinus}/>
                    </svg>
                  </div>
                  <div className="media__body">
                  <h3 className="media__title quote__author">{item.name}</h3>
                  </div>
                  </div>
                 <div className="button-container">
                  <button className="prev-btn" >
                  <FontAwesomeIcon icon={faChevronLeft} onClick={previousPerson} />
                  </button>
                  <button className="next-btn" >
                    <FontAwesomeIcon icon={faChevronRight} onClick={nextPerson}/>
                </button>
                </div>
              </footer>
            </blockquote>
          </div>
             
        ))}                    
      
        </div>
      </div>
    </section>
    );
  
  
  
}

export default References