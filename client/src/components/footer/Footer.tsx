import React from 'react'
import Logo from '../../Icons/logo.png'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className=" footer">
    <div className="container grid footer__sections">
      <section className="collapsible footer__section">
        <div className="collapsible__header">
          <div className= "footer__contact">
      
          <p>  <FontAwesomeIcon icon={faWhatsapp} /> +1809 623 4017</p>
          <p> <FontAwesomeIcon icon={faEnvelope} /> fundacionecologicamagua@outlook.com </p>
        </div>
        </div>
      </section>
      <div className="footer__brand">
        <img className="footer__content-brand" src={Logo} alt="" />
        <p className="footer__copyright">Copyright 2023 </p>
        <p className="footer__copyright">Fundación Ecológica Maguá</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer