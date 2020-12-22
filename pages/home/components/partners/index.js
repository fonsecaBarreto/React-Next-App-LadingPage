import "./style.css"
import React from "react"
import HomeSection from '../../components/common/homeSection'
import PartnerItem from './PartnersItem'


export default function Depoimentos(){
  const title = "Quem faz o Clube acontecer?"
  const subtitle = "Essas são as pessoas que fazem o Clube de Inglês ser cada vez melhor. Nós continuamos procurando as melhores formas de te desenvolver."
  const partners = [
    {name:"Mathews Lins",description:"Founder", image:'/assets/home/partners/partner2.webp'},

    {name:"Thaís Rodrigues",description:"Copywriter", image:'/assets/home/partners/partner3.webp'},

    {name:"Lucas Fonseca",description:"Development and Tech", image:'/assets/home/partners/partner1.webp'}, 
  ]
  return (
    <div id="partners">
      <HomeSection title={title} subtitle={subtitle}>

        <div className="app-container">

          <div className="partners-pool bd-red">
            {partners.map((p,i)=>(
              <PartnerItem item={p} key={i}></PartnerItem> 
            ))}
          
          </div> 
        </div>

      </HomeSection>
    </div>
  )
}