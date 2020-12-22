import Layout from '../../components/layout'
import { FaTelegram } from 'react-icons/fa';
import Link from 'next/link'
import './style.css'
const telegram_link ="https://t.me/joinchat/Nx6qvxwC_aN9F2qQGT-nRg"
const Obrigado = () =>{
  return (
    <Layout content= {
    <div id="obrigado-screen">
      <div className="app-container mx756">
        <div className="d-flex flex-column align-items-center">
          <img src="/assets/logo.png" ></img>
          <h1 className="mt-5">Obrigado por se inscrever!</h1>
          <span className="my-4">
              Agora eu estou comprometido a te entregar os melhores conteúdos sobre inglês. 
              E você está comprometido a chegar à fluência? Juntos somos mais fortes e
              eu estou aqui para te ajudar nessa. Fique ligado que logo chega material 
              no seu e-mail! Bons estudos! #eusoufluente
          </span>

          <h4>
            Pronto para começar?
          </h4>

          <div className="d-flex justify-content-center align-items-center my-4 mb-5 py-5">
            <Link href={telegram_link}>
              <button className="ob-button">
                <FaTelegram></FaTelegram> Telegram
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div> }></Layout>
  )
}
export default Obrigado