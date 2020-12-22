import { FaLock } from 'react-icons/fa';
import './style.css'
import Layout from '../../components/layout'
import NForm from './components/NForm'
import CommentCarousel from '../../components/utils/CommentCarousel'
import Quemsou from './components/quemsou'
/* red d51247

blue 221e3d */
const Newsletter = () => {
  return ( 
    <Layout showHeader content={(
      <div id="newsletter-page">

        <div className="app-container mx756 d-flex flex-column justify-content-start align-items-center">

          <div className="bd-red  d-flex flex-column align-items-center  mb-5">

            <h1 className="primary-call">Aula de inglês terça e quinta, 21h. Ao vivo no Youtube.</h1>

            <span className="nn-text">
            Aula aberta ao público para aprender a língua inglesa por uma nova perspectiva.
Assine para ser avisado da próxima aula gratuitamente.
            </span> 
{/* 
            <span className="nn-text bold mt-3">
            Quer continuar por dentro das novidades sobre inglês?
            </span> */}

          </div>
            <NForm></NForm>
            <span class="mt-3 text-muted secure-text">
              <FaLock></FaLock>
              <span class="ml-1 text"> Suas informações estão seguras. </span>
              </span>
          </div>

        <div className="app-container mx1024 d-flex flex-column justify-content-start align-items-center">
            <div className="nsection">

              <h1 className="alt-call">Sobre as Lives</h1>
              <span className="nn-text">
              Toda terça e quinta o Mathews Lins aborda diferentes temas e formas de estudar
               a língua inglesa, a partir de livros de literatura, exames avaliativos ou temas
                pedidos pelos alunos. A sua dúvida pode ser a dúvida de mais alguém, portanto,
                 participe das Lives e traga os seus questionamentos. Essas aulas ficarão
                  disponíveis apenas por 24h, porém, todo domingo será liberado um vídeo
                   de resumo das Lives da semana. 
              </span>

            </div>
          </div>

        <div className="">
            <CommentCarousel wa></CommentCarousel>
        </div>

        <div className="app-container mx1024">
          <div className="nsection">
            <Quemsou></Quemsou>
          </div>
        </div>

      </div>
    )}/>
  )
}

export default Newsletter