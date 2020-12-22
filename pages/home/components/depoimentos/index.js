import React from "react"
import "./style.css"
import HomeSection from '../../components/common/homeSection'
import VideoContainer from '../../../../components/utils/videoContainer'
import CommentCarousel from '../../../../components/utils/CommentCarousel'
export default function Depoimentos(){
  const title = "Alunos que já perceberam a mudança"
  const subtitle = ""
  return (
    <div id="depoimentos">
      <HomeSection title={title} subtitle={subtitle}>

        <VideoContainer id="8omzJ4baO6E"></VideoContainer>

     
        <div className="carousel-contaier">
          <CommentCarousel></CommentCarousel>
        </div>
        
      </HomeSection>
    </div>
  )
}