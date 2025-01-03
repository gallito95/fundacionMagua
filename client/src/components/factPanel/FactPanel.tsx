import React from 'react'
import './FactPanel.scss'
import facts from './facts.json';
import { motion } from 'framer-motion';

const FactPanel = () => {

  const content = () => {    
    const today = new Date();
    const day = today.getDate()
    return (facts[day -1])
  }


  return (
    <motion.div 
      className='fact__Container'
      data-aos="fade-up" 
      data-aos-duration="2000"
      animate={{x:[0,20,-20,20,-20,0]}}
      transition={{
        duration:2,
        repeat: Infinity,
        repeatType:"loop",
        delay: 2,
      }}
      
      > 
      <h3 className='fact__Headline'> Did you know?</h3>
      <p className='fact__Content'> {content()} </p>
    </motion.div>
  )
}

export default FactPanel
