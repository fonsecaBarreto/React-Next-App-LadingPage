import React from "react"
import HomeSection from '../../components/common/homeSection'
import VideoContainer from '../../../../components/utils/videoContainer'
import "./style.css"

export default function ComoFunciona(){
  const title = "Como funciona o clube?"
  const subtitle = "Somos um roteiro completo de estudos de inglês 100% online com acesso a aulas gravadas, exercícios e feedbacks nas correções. Muitas pessoas querem estudar sozinhas, mas não sabem por onde começar. Nós te damos a direção e ensinamos o caminho."
  return (
    <div id="howitworks">
      <HomeSection title={title} subtitle={subtitle}>

        <VideoContainer id="uUqQWUKqIKY"></VideoContainer>
      </HomeSection>
    </div>
  )
}