import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { facebook, instagram , youtube } from '../../services/global'
export default () =>{
  return(
    <footer id="main-footer">
      <div className="d-flex justify-content-center align-items-center footer-content">

        <a href={facebook} className="social-link">
          <FaFacebook/>
        </a>
        <a href={instagram} className="social-link">
          <FaInstagram/>
        </a>
        <a href={youtube} className="social-link">
          <FaYoutube/>
        </a>
     

      </div>
      <div className="footer-bottom">
        <a href="mailto:suporte@mathewslins.com">
            Copyright 2021 © Mathewslins & Partners - Todos os direitos reservados
        </a>
      </div>
    </footer>
  )
}