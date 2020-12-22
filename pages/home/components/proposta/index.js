import "./style.css"
import React from "react"
import HomeSection from '../common/homeSection'
import CallButton from '../../../../components/utils/callbutton'

export default function Depoimentos(){
  const title = "Não deixe para amanhã o que você pode começar hoje"
  const subtitle = "Construa-o hoje com suas decisões do presente, pois elas mudam sua vida."
  return (
    <div id="proposta">
      <HomeSection title={title} >

      <div className="app-container bd-red">

        <a target="__blank" href="https://www.asaas.com/c/994473463914" className="pp-box">
        <img
          className="bd-red img"
          src="/assets/home/proposta.svg"
          alt="Picture of the author"/>
         
 

          <ul className="bd-red">
            <li className="bd-green">30 dias de acesso à plataforma</li>
            <li>Aulas em vídeo começando desde o básico</li>
            <li>Novas Aulas toda semana</li>
            <li>Novos Exercícios toda semana</li>
            <li>Grupo fechado de WhatsApp</li>
          </ul> 

          <div className="mt-3 w-100 bd-red">
            <CallButton width="300px" styleb sm100  >COMECE AGORA</CallButton>
          </div>
        
         
         
        </a>

        </div>


      </HomeSection>
    </div>
  )
}