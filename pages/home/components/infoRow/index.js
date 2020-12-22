import React from "react"
import "./style.css"

import InforCard from './InfoCard'
import HomeSection from "../common/homeSection"

export default function InfoRow(){
  const cards = [
    {
      title:"Aprenda inglês sem depender de ninguém",
      text:`Com essas aulas você é capaz de
      aprender a língua inglesa e ainda
      criar um plano de estudos para
      continuar aprendendo sozinho. `
    },
    {
      title:"7 dias por nossa conta?",
      text:`Pare de adiar o começo desse estudo,
        você pode começar gratuitamente. Se
        inscreva e agora e conheça nossas aulas
        e plataforma por 7 dias sem pagar nada. `
    },
    {
      title:"Acesso ao mundo",
      text:`Torne-se mais criativo, mais confiante
      e conheça diferentes formas de
      enxergar o mundo enquanto aprende
      uma nova língua. Língua é cultura. `
    },
  ]
  return (
    <div id="info-row" className="bd-red">


        <HomeSection>
          <div className="app-container">
            <div className="info-cards-pool">
            { cards.map((p,i)=>( <InforCard title={p.title}  text={p.text} key={i}></InforCard> ))  }
            </div> 
          </div>
        </HomeSection>
  
    </div>
  )
}