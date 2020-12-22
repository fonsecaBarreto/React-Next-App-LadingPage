
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { facebook, instagram , youtube } from '../../services/global'
import Link from 'next/link'
const Header = () => {
  return(
    <header id="main-header">

      <div className="app-container mx1024">
        <div className="header-container bd-red">


        <Link href="/">
          <a className="header-brand bd-red" >
            <img src="/assets/logo-120px.png"/>
          </a>
        </Link>

          <div className="mr-0 ml-auto d-flex align-items-center">
        
            <a href={facebook} className="header-link">
            <FaFacebook/>
            </a>
            <a href={instagram} className="header-link">
              <FaInstagram/>
            </a>
            <a href={youtube} className="header-link">
              <FaYoutube/>
            </a>
     
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header